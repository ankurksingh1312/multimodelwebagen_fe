import  LeftPannel from '../components/LeftPannel'
import ReghtPannel from '../components/RightPannel'

export default function Home() {
  return (
  <div className="flex h-screen w-screen border bg-white">
    <div className="basis-3/12 flex-shrink">
    < LeftPannel />
    </div>
    <div className="basis-9/12">
    < ReghtPannel />
    </div>
    
    
 </div>
  );
}
