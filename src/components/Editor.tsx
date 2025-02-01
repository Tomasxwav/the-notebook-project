'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { EditorState, RichUtils } from 'draft-js'
import 'draft-js/dist/Draft.css'
import { Button } from './ui/button'

// Importamos Editor de forma dinámica, desactivando SSR
const Editor = dynamic(() => import('draft-js').then((mod) => mod.Editor), {
  ssr: false,
})

export default function MyEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )
  const toggleBold = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'))
  }
  const toggleItalic = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'))
  }
  const toggleUnderline = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'))
  }
  const toggleCode = () => {
    setEditorState(RichUtils.toggleCode(editorState))
  }
  const toggleBlockType = (blockType: string) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType))
  }

  return (
    <div className='border p-4'>
      <div className='flex gap-2 items-center mb-8'>
        <Button onClick={toggleBold}>Bold</Button>
        <Button onClick={toggleItalic}>Italic</Button>
        <Button onClick={toggleUnderline}>Underline</Button>
        <Button onClick={toggleCode}>Code</Button>
        <Button onClick={() => toggleBlockType('header-one')}>H1</Button>
        <Button onClick={() => toggleBlockType('header-two')}>H2</Button>
        <Button onClick={() => toggleBlockType('header-three')}>H3</Button>
        <Button onClick={() => toggleBlockType('unordered-list-item')}>
          UL
        </Button>
        <Button onClick={() => toggleBlockType('ordered-list-item')}>OL</Button>
      </div>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  )
}
