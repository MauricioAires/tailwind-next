import { LogOut } from 'lucide-react'
import { Button } from '../Button'

/* eslint-disable @next/next/no-img-element */
export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/MauricioAires.png"
        alt="Mauricio Aires"
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Mauricio Aires
        </span>
        <span className="max-w-full truncate text-ellipsis text-sm text-zinc-500 dark:text-zinc-400">
          mauricioaires015@gmail.com
        </span>
      </div>
      <Button variant="ghost" type="button">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
