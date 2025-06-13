import { z } from "zod";

import {
  MAILCHIMP_API_KEY,
  MAILCHIMP_API_SERVER,
  MAILCHIMP_AUDIENCE_ID,
} from "./_constants";

type MailchimpResponse = {
  id?: string | undefined; // hash of user email
  title?: string | undefined; // "Member Exists" if already subscribed
  status: number; // http code
  detail: string; // description
};

export async function POST(request: Request) {
  try {
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

    const data = (await response.json()) as MailchimpResponse;

    // handle existing record
    if (data.title?.toLowerCase().includes("member exists")) {
      return new Response("Already subscribed", {
        status: 200,
      });
    }

    if (data.id) {
      return new Response("Successfully subscribed", {
        status: 201,
      });
    }

    return new Response(`${data.title}: ${data.detail}`, {
      status: response.status,
    });
  } catch (error) {
    console.error(error);
    return new Response("Something went wrong", {
      status: 500,
    });
  }
}
