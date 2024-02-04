import Link from "next/link";

export default function HeaderNav() {
  return (
    <header className="container mx-auto flex items-center justify-between p-4">
      <h1 className="text-2xl font-bold">Across</h1>
      <nav>
        <ul className="flex gap-4">
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
