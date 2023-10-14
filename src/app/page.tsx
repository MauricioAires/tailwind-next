export default function Home() {
  return (
    <div className="flex h-screen flex-col  items-center bg-slate-900 p-8 text-center text-slate-100">
      <div className="max-w-[700px]">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Rapidly build modern websites without ever leaving your HTML.
        </h1>
        <h2 className="mt-4 dark:bg-slate-400">
          A utility-first CSS framework packed with classes like flex, pt-4,
          text-center and rotate-90 that can be composed to build any design,
          directly in your markup. Get started Quick search... Ctrl K
        </h2>

        <button className="font-md mt-4 rounded-md bg-sky-400 px-4 py-2 text-sky-950 enabled:hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-slate-100 dark:font-serif  dark:text-slate-200 ">
          Get Started
        </button>
      </div>
    </div>
  )
}
