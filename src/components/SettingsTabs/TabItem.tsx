'use client'

import * as RTabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export interface TabItemProps {
  title: string
  isSelected?: boolean
}

export function TabItem({ title, isSelected = false }: TabItemProps) {
  return (
    <RTabs.Trigger
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
      value={title}
    >
      {title}

      {isSelected && (
        <motion.div
          layoutId="active-tab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
        />
      )}
    </RTabs.Trigger>
  )
}
