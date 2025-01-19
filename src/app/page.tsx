import { Sign } from '@/components/Sign';
import { Headers } from '@/components/Headers';

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Headers />
      <Sign />
    </div>
  );
}
