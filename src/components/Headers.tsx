'use client'

import { Button } from '@/components/ui/button'
import Icons from '../icons/Icons'
import { ThemeButton } from './ThemeButton'
import { useRouter } from 'next/navigation'

export function Headers() {
  const router = useRouter()

  const handleLogout = () => {
    router.push('/')
  }

  return (
    <>
      <header className="flex  w-full py-2 pr-2">
        <div className="flex items-center w-full justify-center text-lg font-bold gap-3">
          <Icons width="30" color="currentColor" icon="notebook" height="30" />
          The Note Project
        </div>

        <div className="flex gap-2 ml-3">
          <ThemeButton />
          <Button onClick={handleLogout}>Log out</Button>
        </div>
        {/* {isLogin !== undefined && <a onClick={handleLogout} href='/'>Log out</a> } */}
      </header>
    </>
  )
}
