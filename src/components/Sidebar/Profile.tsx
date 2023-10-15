import { LogOut } from 'lucide-react'

/* eslint-disable @next/next/no-img-element */
export function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <img
        src="https://github.com/MauricioAires.png"
        alt="Mauricio Aires"
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Mauricio Aires
        </span>
        <span className="max-w-full truncate text-ellipsis text-sm text-zinc-500">
          mauricioaires015@gmail.comasgdygasuydgyuasgyudgasyud
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
