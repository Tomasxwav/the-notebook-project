import { Badge } from '@/components/ui/badge'

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
    <>
      <nav className="flex gap-2 items-center">
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
    </>
  )
}
