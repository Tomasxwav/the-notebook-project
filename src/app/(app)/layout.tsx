//import { ThemeProvider } from '@/providers/theme-provider'
import '../globals.css';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger />
            {children}
          </SidebarProvider>
        </body>
      </html>
    </>
  );
}
