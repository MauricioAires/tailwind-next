'use client'

import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
  LifeBuoy,
  Cog,
  Search,
  Menu,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import * as Input from '../Form/Input'
import * as RCollapsible from '@radix-ui/react-collapsible'
import { Button } from '../Button'

export function Sidebar() {
  return (
    <RCollapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900 lg:right-auto  lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between">
        <Logo />

        <RCollapsible.Trigger className="lg:hidden" asChild>
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </RCollapsible.Trigger>
      </div>

      <RCollapsible.Content
        forceMount
        className="flex  flex-1  flex-col gap-6 overflow-y-auto data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control placeholder="Search" />
        </Input.Root>

        <nav className="space-y-0.5">
          <NavItem title="Home" icon={Home} />
          <NavItem title="Dashboard" icon={BarChart} />
          <NavItem title="Projects" icon={SquareStack} />
          <NavItem title="Tasks" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={Users} />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Support" icon={LifeBuoy} />
            <NavItem title="Settings" icon={Cog} />
          </nav>

          <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5 dark:bg-zinc-800">
            <div className="space-y-1">
              <span className="text-sm/5 font-medium text-violet-700 dark:text-zinc-100">
                Used space
              </span>
              <p className="text-sm/5 text-violet-500 dark:text-zinc-400">
                Your team has used 80% of your available space. Need more?
              </p>
            </div>

            <div className="h-2 rounded-full bg-violet-100 dark:bg-zinc-600">
              <div className="h-2 w-4/5 rounded-full bg-violet-600 dark:bg-violet-400"></div>
            </div>

            <UsedSpaceWidget />
          </div>
          <div className="h-px bg-zinc-200 dark:bg-zinc-700"></div>

          <Profile />
        </div>
      </RCollapsible.Content>
    </RCollapsible.Root>
  )
}
