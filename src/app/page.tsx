import { MemeWorkspace } from "../components/meme/meme-workspace";

export default async function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="border-b border-black/7">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between py-4">
          <a
            href="https://github.com/nguyenv119/ironic/blob/main/README.md"
            className="text-sm uppercase tracking-wide text-black hover:underline"
          >
            why use this?
          </a>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-12">
        <section className="space-y-6 mx-auto w-full max-w-3xl">
          <h2 className="text-4xl font-semibold uppercase leading-tight">
            Don&apos;t be scared...
          </h2>
          <p className="max-w-2xl text-base text-muted">
            say whatever you want, because you&apos;re saying it ironically!
          </p>
        </section>
        <MemeWorkspace />
      </main>
    </div>
  );
}
