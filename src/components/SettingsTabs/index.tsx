'use client'

import * as RTabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState<string>('Profile')
  return (
    <RTabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <RTabs.TabsList className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem isSelected={currentTab === 'My details'} title="My details" />
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
      </RTabs.TabsList>
    </RTabs.Root>
  )
}
