import { z } from "zod";

import {
  MAILCHIMP_API_KEY,
  MAILCHIMP_API_SERVER,
  MAILCHIMP_AUDIENCE_ID,
} from "./_constants";

export async function POST(request: Request) {
  const body = await request.json();
  const email = body.email;

  const parsedEmail = z.string().email().safeParse(email);

  if (!parsedEmail.success) {
    return new Response("Invalid email address", {
      status: 400,
    });
  }

  const response = await fetch(
    `https://${MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `api_key ${MAILCHIMP_API_KEY}`,
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
