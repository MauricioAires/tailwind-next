export default function Home() {
  return (
    <div className="p-8 bg-slate-50 dark:bg-slate-900 dark:text-slate-100 text-slate-900 h-screen flex flex-col items-center text-center">
      <div className="max-w-2xl">
        <h1 className="font-bold text-3xl sm:text-4xl">
          Rapidly build modern websites without ever leaving your HTML.
        </h1>
        <h2 className="mt-4 dark:bg-slate-400">
          A utility-first CSS framework packed with classes like flex, pt-4,
          text-center and rotate-90 that can be composed to build any design,
          directly in your markup. Get started Quick search... Ctrl K
        </h2>

        <button className="bg-sky-500 dark:bg-sky-400 dark:text-sky-950 text-white px-4 py-2 rounded-md font-md mt-4 enabled:hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60 ">
          Get Started
        </button>
      </div>
    </div>
  );
}
