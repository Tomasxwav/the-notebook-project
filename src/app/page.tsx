import { Sign } from '@/components/Sign'
import { Headers } from '@/components/Headers'

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col flex-nowrap items-center ">
      <Headers />
      <Sign />
    </div>
  )
}
