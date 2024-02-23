import "./globals.css";
import { Text } from "./_components/text";
import Link from "next/link";
import { ArrowRightIcon } from "@/app/_components/icons/arrow-right";

export default function NotFound() {
  return (
    <div className="w-100 flex flex-col items-center justify-center gap-4">
      <Text variant="cap-case" className="font-medium text-aqua-100">
        404
      </Text>
      <Text variant="heading-2" className="tight-1 lighter capitalize text-light-200">
        This was not intented...
      </Text>
      <div className="flex">
        <Link
          className="flex cursor-pointer flex-row items-center justify-center gap-2 text-aqua-100 hover:opacity-75 md:justify-start"
          href={"/"}
        >
          <Text variant="cap-case-sm" className="font-medium">
            back to start page
          </Text>
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-aqua-100">
            <ArrowRightIcon />
          </div>
        </Link>
      </div>
    </div>
  );
}
