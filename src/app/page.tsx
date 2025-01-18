'use client'
import { Navbar } from '@/components/Navbar'
import PreviewNote from '@/components/PreviewNote'
import { useEffect, useState } from 'react'

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
    <div className="np-main">
      <Navbar
        allFolders={allFolders}
        filterbyfolder={filterbyfolder}
        handleFolder={handleFolder}
      />
      <div className="np-displayer">
        <PreviewNote />
        {/* {allInfo.map(({note, folder}, index) => (
            note && <PreviewNote key={index} note={note} folder={folder} areChanges={areChanges} setAreChanges={setAreChanges} allFolders={allFolders}/>
          ))} */}
      </div>
    </div>
  )
}
