'use client'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState<string>('Profile')
  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.TabsList className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-400">
            <TabItem
              isSelected={currentTab === 'My details'}
              title="My details"
            />
            <TabItem isSelected={currentTab === 'Profile'} title="Profile" />
            <TabItem isSelected={currentTab === 'Password'} title="Password" />
            <TabItem isSelected={currentTab === 'Team'} title="Team" />
            <TabItem isSelected={currentTab === 'Plan'} title="Plan" />
            <TabItem isSelected={currentTab === 'Billing'} title="Billing" />
            <TabItem isSelected={currentTab === 'Email'} title="Email" />
            <TabItem
              isSelected={currentTab === 'Notifications'}
              title="Notifications"
            />
            <TabItem
              isSelected={currentTab === 'Integrations'}
              title="Integrations"
            />
            <TabItem isSelected={currentTab === 'API'} title="API" />
          </Tabs.TabsList>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
