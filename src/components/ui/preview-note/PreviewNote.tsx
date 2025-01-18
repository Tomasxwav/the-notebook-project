/* import DeleteDialog from './MaterialUICustom/DeleteDialog' */
/* import AddTo from './MaterialUICustom/AddTo' */
import Icons from '@/icons/Icons'
import IconButton from '@mui/material/IconButton'
import { Delete } from 'lucide-react'
import './preview-note.css'
import { useState } from 'react'
import Link from 'next/link'

interface Note {
  id: number
  title: string
  content: string
  date: string
  folder: string
}

function PreviewNote() {
  const [note, setNote] = useState<Note>({
    id: 1,
    title: 'Note Title',
    content: 'Note Content',
    date: '2023-01-01',
    folder: 'All',
  })

  const [folder, setFolder] = useState<string>('All')

  const previewContent = note.content
    .replace(/&nbsp;/g, '')
    .split(/<\/?[^>]+>/)
    .filter(Boolean)

  return (
    <div className="np-sticky-note">
      <div className="np-sn-topbar">
        <div className="np-sn-fold" />
        <div className="np-sn-icon">
          <IconButton
            /* onClick={handleDialogOpen}  */ aria-label="addtofolder"
          >
            <Icons width="20" height="20" color="currentColor" icon="pencil" />
          </IconButton>
          <IconButton /* onClick={handleClickOpen}  */ aria-label="delete">
            <Delete />
          </IconButton>
        </div>
      </div>
      <Link className="np-sticky-note-content" href="/draw">
        <h1>
          {note.title.length > 25
            ? note.title.slice(0, 25) + '...'
            : note.title}
        </h1>
        {previewContent.map((parraph, index) => {
          return (
            <p key={index}>
              {index === 1 &&
                (parraph.length > 30 ? parraph.slice(0, 50) + '...' : parraph)}
            </p>
          )
        })}
        <p>{note.date}</p>
      </Link>
    </div>
  )
}

export default PreviewNote
