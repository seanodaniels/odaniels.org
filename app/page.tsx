// import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl">odaniels.org</h1>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://musaria.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          musaria.com →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://soundcloud.com/seanodaniels"
          target="_blank"
          rel="noopener noreferrer"
        >
          soundcloud.com/seanodaniels →
        </a>
      </footer>
    </div>
  );
}
