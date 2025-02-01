import MyEditor from './Editor'

export default function EditorPage() {
  return (
    <div className='container mx-auto mt-10'>
      <h1 className='text-2xl text-foreground font-bold mb-4'>
        Editor de Texto
      </h1>
      <MyEditor />
    </div>
  )
}
