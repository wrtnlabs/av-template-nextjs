export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex flex-col items-center gap-6 px-6 text-center">
        <h1 className="text-4xl font-semibold tracking-tight">
          Welcome
        </h1>
        <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
          Get started by editing{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm dark:bg-zinc-800">
            app/page.tsx
          </code>
        </p>
      </main>
    </div>
  );
}
