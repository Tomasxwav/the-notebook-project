//import { ThemeProvider } from '@/providers/theme-provider'
import '../globals.css'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/AppSidebar'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger className="fixed top-2 left-0 z-50" />
      {children}
    </SidebarProvider>
  )
}
