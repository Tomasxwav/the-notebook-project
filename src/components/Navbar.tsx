import { Badge } from '@/components/ui/badge'
import { SidebarTrigger } from './ui/sidebar'

interface NavbarProps {
  allFolders: string[]
  filterbyfolder: string
  handleFolder: (folder: string) => void
}

export function Navbar({
  allFolders,
  filterbyfolder,
  handleFolder,
}: NavbarProps) {
  // console.log("desde navbar ", filterbyfolder);

  return (
    <div className="flex items-center justify-start gap-3">
      <SidebarTrigger />
      <nav className="flex gap-2 items-center ">
        <Badge
          style={filterbyfolder === 'All' ? { backgroundColor: '#414040' } : {}}
          onClick={() => {
            handleFolder('All')
          }}
        >
          All
        </Badge>
        {allFolders.map((folder, index) => {
          return (
            <Badge
              onClick={() => {
                handleFolder(folder)
              }}
              key={index}
              style={
                filterbyfolder === folder ? { backgroundColor: '#414040' } : {}
              }
            >
              {folder}
            </Badge>
          )
        })}
      </nav>
    </div>
  )
}
