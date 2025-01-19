'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

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
      <header className="flex w-full py-2 px-4 justify-center">
        <div className="flex items-center justify-center text-lg font-bold gap-3">
          <Icons width="30" color="currentColor" icon="notebook" height="30" />
          The Note Project
        </div>

        <div className="absolute right-0">
          <div className="flex gap-2 ml-3 ">
            <ThemeButton />
            <Avatar>
              <AvatarImage src="https://github.com/tomasxwav.png" />
              <AvatarFallback>TM</AvatarFallback>
            </Avatar>
            <Button onClick={handleLogout}>Log out</Button>
          </div>
        </div>
        {/* {isLogin !== undefined && <a onClick={handleLogout} href='/'>Log out</a> } */}
      </header>
    </>
  )
}
