import { ThemeProvider } from '@/providers/theme-provider'
import { Headers } from '@/components/Headers'
import './globals.css'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Headers />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
