'use client'
import { Navbar } from '@/components/Navbar'
import { useEffect, useState } from 'react'
import PreviewNote from '@/components/preview-note/PreviewNote'

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
    <div className="w-full pr-4 ">
      <Navbar
        allFolders={allFolders}
        filterbyfolder={filterbyfolder}
        handleFolder={handleFolder}
      />
      <div className="flex flex-wrap justify-between p-11 gap-5 h-full w-full ">
        <PreviewNote />
        <PreviewNote />
        <PreviewNote />
        <PreviewNote />
        <PreviewNote />
        <PreviewNote />
        <PreviewNote />
        <PreviewNote />
        <PreviewNote />
        <PreviewNote />
        <PreviewNote />
        <PreviewNote />
        <PreviewNote />
        <PreviewNote />
        <PreviewNote />
        <PreviewNote />
        <PreviewNote />
        <PreviewNote />
        <PreviewNote />
        <PreviewNote />
        <PreviewNote />
        <PreviewNote />
        <PreviewNote />
        <PreviewNote />
        <PreviewNote />
        <PreviewNote />
        <PreviewNote />
        <PreviewNote />
        <PreviewNote />

        {/* {allInfo.map(({note, folder}, index) => (
            note && <PreviewNote key={index} note={note} folder={folder} areChanges={areChanges} setAreChanges={setAreChanges} allFolders={allFolders}/>
          ))} */}
      </div>
    </div>
  )
}
