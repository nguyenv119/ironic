import { MemeWorkspace } from "../components/meme/meme-workspace";

export default async function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-12">
        <section className="space-y-6">
          <h1 className="text-4xl font-semibold uppercase leading-tight">
          Don&apos;t be scared...
          </h1>
          <p className="max-w-2xl text-base text-muted">
            say whatever you want, because you&apos;re
            saying it ironically!
          </p>
        </section>
        <MemeWorkspace />
      </main>
    </div>
  );
}
