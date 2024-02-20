import { z } from "zod";

export async function POST(request: Request) {
  const body = await request.json();
  const email = body.email;

  const parsedEmail = z.string().email().safeParse(email);

  if (!parsedEmail.success) {
    return new Response("Invalid email address", {
      status: 400,
    });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const API_SERVER = process.env.MAILCHIMP_API_SERVER;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  const response = await fetch(
    `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `api_key ${API_KEY}`,
      },
      body: JSON.stringify({
        email_address: parsedEmail.data,
        status: "subscribed",
      }),
    },
  );

  if (response.status == 200) {
    return new Response("Successfully subscribed", {
      status: 201,
    });
  }

  return new Response("Something went wrong", {
    status: 500,
  });
}
