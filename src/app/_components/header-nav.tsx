import Link from "next/link";

import { AcrossIcon } from "./icons/across";

export default function HeaderNav() {
  return (
    <header className="container mx-auto flex items-center justify-between p-4">
      <Link href="/">
        <AcrossIcon className="fill-aqua-100" />
      </Link>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/"></Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/across-plus">Across+</Link>
          </li>
          <li>
            <Link href="/across-settlement">Settlement</Link>
          </li>
          <li>
            <Link href="/across-bridge">Bridge</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
