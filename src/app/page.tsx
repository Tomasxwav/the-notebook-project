'use client'
import { Navbar } from '@/components/Navbar'
import { useEffect, useState } from 'react'
import { Headers } from '@/components/Headers'
import PreviewNote from '@/components/ui/preview-note/PreviewNote'

export default function Home() {
  const [allFolders, setAllFolders] = useState<string[]>([])
  const [filterbyfolder, setFilterbyfolder] = useState<string>('All')

  const handleFolder = (folder: string) => {
    setFilterbyfolder(folder)
  }

  useEffect(() => {
    const getAllFolders = async () => {
      /* const folders = await getFolders() */
      const folders = ['test', 'test2']
      setAllFolders(folders)
    }
    getAllFolders()
  }, [])

  return (
    <div className="w-full pr-4">
      <Headers />

      <Navbar
        allFolders={allFolders}
        filterbyfolder={filterbyfolder}
        handleFolder={handleFolder}
      />
      <div className="flex m-11 gap-2 h-full w-full">
        <PreviewNote />
        {/* {allInfo.map(({note, folder}, index) => (
            note && <PreviewNote key={index} note={note} folder={folder} areChanges={areChanges} setAreChanges={setAreChanges} allFolders={allFolders}/>
          ))} */}
      </div>
    </div>
  )
}
