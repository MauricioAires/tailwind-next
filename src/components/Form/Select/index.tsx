'use client'

import * as RSelect from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'

export interface SelectProps {
  children: React.ReactNode
  placeholder: string
}

export function Select({ children, placeholder }: SelectProps) {
  return (
    <RSelect.Root>
      <RSelect.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm  data-[placeholder]:text-zinc-500">
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
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white"
        >
          <RSelect.Viewport>{children}</RSelect.Viewport>
        </RSelect.Content>
      </RSelect.Portal>
    </RSelect.Root>
  )
}
