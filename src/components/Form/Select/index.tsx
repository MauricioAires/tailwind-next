'use client'

import * as RSelect from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

export interface SelectProps extends RSelect.SelectProps {
  children: React.ReactNode
  placeholder: string
}

export function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <RSelect.Root {...props}>
      <RSelect.Trigger
        className={twMerge([
          'flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm  outline-none',
          'focus:border-violet-300 focus:ring-2 focus:ring-violet-100 data-[placeholder]:text-zinc-500',
          'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20 dark:data-[placeholder]:text-zinc-400',
        ])}
      >
        <RSelect.Value className="text-black" placeholder={placeholder} />
        <RSelect.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </RSelect.Icon>
      </RSelect.Trigger>
      <RSelect.Portal>
        <RSelect.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] animate-slideDownAndFade overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-md dark:border-zinc-700 dark:bg-zinc-800"
        >
          <RSelect.Viewport>{children}</RSelect.Viewport>
        </RSelect.Content>
      </RSelect.Portal>
    </RSelect.Root>
  )
}
