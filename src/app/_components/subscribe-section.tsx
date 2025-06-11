"use client";

import { useState } from "react";

import { Text } from "./text";
import { twMerge } from "../_lib/tw-merge";

const variantToClassNames = {
  aqua: {
    buttonClassName: "bg-aqua-100/[.05] text-aqua-100",
  },
  teal: {
    buttonClassName: "bg-teal-100/[.05] text-teal-100",
  },
  purple: {
    buttonClassName: "bg-purple-100/[.05] text-purple-100",
  },
};

export function SubscribeSection(props: { variant: "aqua" | "teal" | "purple" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/across-newsletter", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseMsg = await response.text();
      const userAlreadySubscribed = responseMsg.toLowerCase().includes("already a list member");

      if (userAlreadySubscribed) {
        setResponseMsg("Already subscribed");
      } else {
        setResponseMsg(responseMsg);
      }

      if (response.ok || userAlreadySubscribed) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="mb-24 flex flex-col items-center gap-6">
      <Text variant="heading-2" className="capitalize text-light-100">
        Stay up to date
      </Text>
      <Text variant="body-nums" className="text-light-300">
        Sign up for our Newsletter
      </Text>
      <form className="flex flex-row gap-3" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="your email"
          className="text-medium h-10 rounded-full border border-grey-500 bg-transparent px-6 text-xs uppercase lining-nums tabular-nums tracking-wide-4 focus:outline-none focus:ring-light-100 sm:w-[280px] sm:text-sm"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <button
          type="submit"
          className={twMerge(
            "h-10 w-[112px] rounded-full px-6  shadow hover:opacity-75",
            variantToClassNames[props.variant].buttonClassName,
          )}
          disabled={status === "loading"}
        >
          <Text variant="cap-case-sm">Sign up</Text>
        </button>
      </form>
      <div>
        {status === "success" ? <p className="text-aqua-100">{responseMsg}</p> : null}
        {status === "error" ? <p className="text-orange-100">{responseMsg}</p> : null}
      </div>
    </section>
  );
}
