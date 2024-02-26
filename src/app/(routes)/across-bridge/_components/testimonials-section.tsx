"use client";

import Image from "next/image";
import { useState } from "react";

import { TwitterIcon, VerifiedCheckmarkIcon } from "@/app/_components/icons";
import { Text } from "@/app/_components/text";
import { twMerge } from "@/app/_lib/tw-merge";

import prayEthProfileImage from "../_assets/pray_eth-profile-pic.jpeg";
import davidjgooseyProfileImage from "../_assets/davidjgoosey-profile-pic.jpeg";
import ayyyeaandyProfileImage from "../_assets/ayyyeandy-profile-pic.jpeg";
import carlshuuProfileImage from "../_assets/carlshuu-profile-pic.jpeg";
import infinityProfileImage from "../_assets/Infinity_1001-profile-pic.jpeg";
import ivanProfileImage from "../_assets/ivan90403291-profile-ic.jpeg";
import kidpongaProfileImage from "../_assets/kidponga-profile-pic.jpeg";
import maxlomuProfileImage from "../_assets/maxlomu-profile-pic.jpeg";
import scottProfileImage from "../_assets/scottburke777-profile-pic.jpeg";

const mainTweet = {
  title: (
    <>
      Lowest fees, Zero slippage,
      <br />
      professional team.
    </>
  ),
  body: (
    <>
      &apos;I&apos;ve tried every L2 bridge out there. @AcrossProtocol is undoubtedly the
      best one.
      <br />
      <br />
      Lowest fees, 0 slippage, professional team. Very under-appreciated, use it.&apos;
    </>
  ),
  username: "@aradtski",
};

const tweets = {
  firstColumn: [
    {
      isVerified: true,
      displayName: "pray.eth",
      username: "@pray_eth",
      profileImageUrl: prayEthProfileImage,
      tweet: (
        <>
          Yeah, I bridge a lot, noticed @BungeeExchange routes were giving me
          @AcrossProtocol most of the time, so just started to use it as my default bridge
          (minimizing risk is my primary concern when bridging).
          <br />
          <br />
          Transfers are incredibly fast and cheap. Great work!
        </>
      ),
      tweetUrl: "https://x.com/pray_eth/status/1679328596261842944?s=20",
    },
    {
      isVerified: false,
      displayName: "David Goose",
      username: "@davidjgoosey",
      tweetUrl: "https://x.com/davidjgoosey/status/1649207665518690304?s=20",
      profileImageUrl: davidjgooseyProfileImage,
      tweet: (
        <>
          Across has one of the best UX of the bridges I&apos;ve tried to date, keep up
          the good work
        </>
      ),
    },
    {
      isVerified: true,
      displayName: "Scott BurkΞ",
      username: "@scottburke777",
      tweetUrl: "https://x.com/scottburke777/status/1656557680012476416?s=20",
      profileImageUrl: scottProfileImage,
      tweet: (
        <>
          Tried a few Arbitrum bridges over the last few months, just tried
          @AcrossProtocol and it was the fastest yet, it was like 1 min Eth -&gt; Arb
        </>
      ),
    },
    {
      isVerified: true,
      displayName: "kidponga.eth",
      username: "@kidponga",
      tweetUrl: "https://x.com/kidponga/status/1750013537379111135?s=20",
      profileImageUrl: kidpongaProfileImage,
      tweet: (
        <>
          What&apos;s the best bridge in crypto?
          <br />
          <br />A bridge that focuses on what users want the most:
          <br />- speed
          <br />- cost
          <br />- trust
          <br />
          <br />
          @AcrossProtocol $ACX
        </>
      ),
    },
    {
      isVerified: true,
      displayName: "Kisuke Urahara",
      username: "@Ivan90403291",
      tweetUrl: "https://x.com/Ivan90403291/status/1692120646602391671?s=20",
      profileImageUrl: ivanProfileImage,
      tweet: <>@AcrossProtocol is 100% the best bridge</>,
    },
  ],
  secondColumn: [
    // {
    //   isVerified: false,
    //   displayName: "maxlomu",
    //   username: "@maxlomu",
    //   tweetUrl: "https://x.com/maxlomu/status/1675975309835882502?s=20",
    //   profileImageUrl: maxlomuProfileImage,
    //   tweet: (
    //     <>
    //       Honestly well done guys.
    //       <br />
    //       <br />
    //       Not only Across liquidity model is very capital efficient (so you can be
    //       cheaper), but the architecture (contrary to L0) is actually trust-minimized.
    //     </>
    //   ),
    // },
    {
      isVerified: true,
      displayName: "Andy",
      username: "@ayyyeandy",
      tweetUrl: "https://x.com/ayyyeandy/status/1726985723285553249?s=20",
      profileImageUrl: ayyyeaandyProfileImage,
      tweet: (
        <>
          Lol. One second to bridge from @arbitrum to @zksync using @AcrossProtocol
          <br />
          <br />
          <Image
            height={242}
            width={302}
            alt="Across bridge ui"
            src="https://pbs.twimg.com/media/F_d8Rl1XoAA4N8S?format=jpg"
          />
        </>
      ),
    },
    {
      isVerified: false,
      displayName: "Infinity",
      username: "@Infinity_1001",
      tweetUrl: "https://x.com/Infinity_1001/status/1749523278228521112?s=20",
      profileImageUrl: infinityProfileImage,
      tweet: (
        <>
          Across is without a doubt the best bridge you can use today.
          <br />
          <br />
          It is the fastest, most efficient and safest
          <br />
          <br />
          Not because I say so, the statistics support it
        </>
      ),
    },
    {
      isVerified: false,
      displayName: "jaeger 狼",
      username: "@carlshuu",
      tweetUrl: "https://x.com/carlshuu/status/1742052941480255592?s=20",
      profileImageUrl: carlshuuProfileImage,
      tweet: (
        <>
          @AcrossProtocol is so freaking good. It&apos;s insane how fast their bridge is.
        </>
      ),
    },
  ],
};

export function TestimonialsSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section className="container mx-auto">
      <div className="relative">
        <div className="flex flex-col items-center gap-6">
          <Text variant="cap-case" className="text-aqua-100">
            across users say it all
          </Text>
          <Text variant="heading-2" className="text-center capitalize text-light-200">
            &quot;{mainTweet.title}&quot;
          </Text>
          <Text
            variant="body"
            className="max-w-[400px] text-center text-md text-light-300 md:text-lg"
          >
            {mainTweet.body}
          </Text>
          <div className="flex h-10 w-40 flex-row items-center justify-between gap-2 rounded-full border border-aqua-100/[.05] bg-aqua-100/[.05] px-4 py-2">
            <Text className="flex-1 text-center text-aqua-100">{mainTweet.username}</Text>
            <TwitterIcon className="h-3 w-3 fill-aqua-100" />
          </div>
          <div
            className={twMerge(
              "mt-12 flex flex-col gap-4 overflow-hidden sm:flex-row md:mt-24 md:gap-8",
              isExpanded ? "" : "h-[480px]",
            )}
          >
            <div className="flex flex-1 flex-col gap-4">
              {tweets.firstColumn.map((tweet, index) => (
                <TweetCard key={index} tweet={tweet} />
              ))}
            </div>
            <div className="flex flex-1 flex-col gap-4">
              {tweets.secondColumn.map((tweet, index) => (
                <TweetCard key={index} tweet={tweet} />
              ))}
            </div>
          </div>
        </div>
        {!isExpanded && (
          <div className="absolute bottom-0 h-24 w-full bg-gradient-to-t from-grey-dark to-transparent" />
        )}
      </div>
      {!isExpanded && (
        <div className="mt-4 flex flex-row justify-center">
          <button
            className="flex rounded-full bg-light-100/[.05] px-4 py-2 hover:opacity-75"
            onClick={() => setIsExpanded(true)}
          >
            <Text variant="body-nums" className="text-grey-400">
              View more Tweets
            </Text>
          </button>
        </div>
      )}
    </section>
  );
}

function TweetCard({ tweet }: { tweet: (typeof tweets.firstColumn)[0] }) {
  return (
    <a className="group" href={tweet.tweetUrl} target="_blank" rel="noopener noreferrer">
      <div className="flex cursor-pointer flex-col gap-4 rounded-3xl border border-black-700 p-5 transition group-hover:border-aqua-100/[.05] group-hover:bg-aqua-100/[.05] sm:p-6">
        <div className="flex flex-row items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-full">
            <Image
              src={tweet.profileImageUrl}
              alt={`${tweet.displayName} profile picture`}
              width={40}
              height={40}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-1">
              <Text variant="body" className="text-aqua-100">
                {tweet.displayName}
              </Text>
              {tweet.isVerified && <VerifiedCheckmarkIcon />}
            </div>
            <Text variant="body" className=" text-grey-400">
              {tweet.username}
            </Text>
          </div>
        </div>
        <Text variant="body">{tweet.tweet}</Text>
      </div>
    </a>
  );
}
