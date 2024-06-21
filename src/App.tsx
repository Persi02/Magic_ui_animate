import './App.css'
import {  Marquee3D, MarqueeDemo,OrbitingCirclesDemo} from './components/display/test'
import { BentoGridThirdDemo } from './components/display/grid'
import BoxReveal from './components/magicui/box-reveal'
import LetterPullup from './components/magicui/letter-pullup'
import { VelocityScroll } from './components/magicui/scroll-based-velocity'
import TextRevealByWord from './components/magicui/text-reveal'
import { Button } from './components/ui/button'
import { ThreeDCardDemo } from './components/display/test_3'
// import { PlaceholdersAndVanishInputDemo } from './components/display/input'




function App() {


return (
<>
  
    <LetterPullup words={"Vao line."} delay={0.05}  />
    <div className='w-full flex justify-end items-center h-screen'>
    <OrbitingCirclesDemo/>
    <Marquee3D/>
    </div>
    <div className='w-full flex justify-end items-center h-screen '>
    <MarqueeDemo/>
    </div>
    <VelocityScroll text="VAO" className="py-2 text-9xl"/>
    
    <TextRevealByWord text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam accusantium incidunt delectus iusto labore dolorum nulla, tempora quaerat veritatis odio quasi voluptas maiores explicabo eos officia dignissimos odit rem! Sequi."} className='test' />
    <div className='w-full flex justify-center items-center h-screen'>
    <div className="w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Vao<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>
 
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          Lorem ipsum, dolor sit amet consectetur{" "}
          <span className="text-[#5046e6]">Lorem ipsum dolor sit </span>
        </h2>
      </BoxReveal>
 
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-[1.5rem]">
          <p>
            -&gt; 20+ Lorem ipsum dolor sit amet consectetur adipisicing elit. A laborum repellat quae, esse laudantium consectetur pariatur in aspernatur odio atque rem harum tempore! At soluta ipsum, cum deserunt adipisci aliquam.
            <span className="font-semibold text-[#5046e6]"> lorem</span>,
            <span className="font-semibold text-[#5046e6]"> lorem</span>,
            <span className="font-semibold text-[#5046e6]"> lorem</span>,
            and
            <span className="font-semibold text-[#5046e6]"> lorem</span>
            . <br />
            -&gt; 100% Lorem ipsum dolor sit amet consectetur . <br />
          </p>
        </div>
      </BoxReveal>
 
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-[#5046e6]">voir plus</Button>
      </BoxReveal>
      
    </div>
    </div>
    <div className='w-full overflow-x-hidden'>
      <ThreeDCardDemo/>
    </div>
    <div className='w-full p-5 bg-violet-500 overflow-x-hidden'>
    <BentoGridThirdDemo/>
    </div>
    {/* <PlaceholdersAndVanishInputDemo/> */}
    
    
    
  </>
  )
}

export default App

