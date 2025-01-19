import Icons from '@/icons/Icons'
import { iconsSvgProps } from '@/types/types'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import Link from 'next/link'

export function AppSidebar() {
  const items: { title: string; url: string; icon: keyof iconsSvgProps }[] = [
    {
      title: 'New',
      url: '#',
      icon: 'pencil',
    },
    {
      title: 'Inbox',
      url: '#',
      icon: 'folder',
    },
    {
      title: 'Calendar',
      url: '#',
      icon: 'notebook',
    },
    {
      title: 'Search',
      url: '#',
      icon: 'shared',
    },
    {
      title: 'Settings',
      url: '#',
      icon: 'return',
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="pt-8" />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="flex flex-col h-fit">
                    <Link href={item.url}>
                      <Icons
                        width="12"
                        height="12"
                        color="currentColor"
                        icon={item.icon}
                      />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
