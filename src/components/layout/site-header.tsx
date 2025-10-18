import Link from "next/link";

/** Currently not used... */
export function SiteHeader() {
  return (
    <header className="border-b border-black bg-white">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-lg font-semibold uppercase tracking-tight">
          Ironic Meme Generator
        </Link>
      </div>
    </header>
  );
}
