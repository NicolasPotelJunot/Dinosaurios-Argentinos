import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex gap-10 text-4xl">
          <Link href="/">Home</Link>
          <Link href="/registrodinosaurios">Lista Dinos</Link>
        </ul>
      </nav>
    </header>
  );
};
