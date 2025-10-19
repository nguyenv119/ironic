import { MemeWorkspace } from "../components/meme/meme-workspace";

export default async function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black px-6 ">
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
          <h3 className="text-xl font-semibold leading-tight">
            say whatever you want, because you&apos;re saying it ironically 🗣️
          </h3>
        </section>
        <MemeWorkspace />
      </main>
    </div>
  );
}
