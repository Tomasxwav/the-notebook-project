'use client'

import React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export const ThemeButton = () => {
  const { setTheme } = useTheme()

  return (
    <div className="size-full">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-2">
            <span>Select theme</span>

            <Sun className="  h-[1.2rem] w-[1.2rem] rotate-0 flex transition-all dark:-rotate-90 dark:hidden" />
            <Moon className=" h-[1.2rem] w-[1.2rem] rotate-90 hidden transition-all dark:rotate-0 dark:flex" />
            <span className="sr-only">Toggle theme</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme('light')}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('dark')}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('system')}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
