'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { GithubIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

export const Sign = () => {
  const router = useRouter()

  const handleSignIn = () => {
    router.push('/notes')
  }

  return (
    <div className="flex flex-col items-center h-full justify-center">
      <Tabs defaultValue="sign-in" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sign-in">Sign In</TabsTrigger>
          <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in">
          <Card>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>Sign in to your account</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="name@example.com" />
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                    />
                  </div>

                  <Button onClick={handleSignIn}>Sign in</Button>
                </div>
              </form>

              <div className="flex flex-nowrap justify-between my-4 items-center">
                <Separator className="flex-1" />
                <Label htmlFor="or" className="text-gray-500">
                  Or continue with
                </Label>
                <Separator className="flex-1" />
              </div>
              <CardFooter className="flex justify-between pb-0">
                <Button variant="outline">
                  <GithubIcon /> Google
                </Button>
                <Button variant="outline">
                  {' '}
                  <GithubIcon />
                  Github
                </Button>
              </CardFooter>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sign-up">
          <Card>
            <CardHeader>
              <CardTitle>Sign up</CardTitle>
              <CardDescription>Sign up for create account</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" placeholder="create a username" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="name@example.com" />
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="confirm_password">Confirm password</Label>
                    <Input id="confirm_password" placeholder="••••••••" />
                  </div>
                  <Button onClick={handleSignIn}>Sign up</Button>
                </div>
              </form>

              <div className="flex flex-nowrap justify-between my-4 items-center">
                <Separator className="flex-1" />
                <Label htmlFor="or" className="text-gray-500">
                  Or continue with
                </Label>
                <Separator className="flex-1" />
              </div>
              <CardFooter className="flex justify-between pb-0">
                <Button variant="outline">
                  <GithubIcon /> Google
                </Button>
                <Button variant="outline">
                  {' '}
                  <GithubIcon />
                  Github
                </Button>
              </CardFooter>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
