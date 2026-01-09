import React from 'react'
import bg from "../assets/bg.png"
import HeroFooter from "./HeroFooter";

const Hero = () => {
  return (
    
        <div className='relative min-h-screen bg-cover bg-center  ' style={{backgroundImage:`url(${bg})`}}>
            <div className='absolute inset-0 bg-black/20'></div>
           <div className="relative z-10  px-8 pt-24 text-white max-w-7xl w-full mx-auto">
       <h1 className="font-solway text-4xl md:text-5xl font-medium leading-tight tracking-wide text-white/80">
  The World First Jewelry <br />
  Commerce Platform <br />
  The Future Talent
</h1>
<p
  className="
    mt-6
    font-solway
    text-[14px]
    md:text-[15px]
    text-white/50
    leading-[1.8]
    max-w-md
  "
>
  Discover the future of jewelry shopping with our innovative
  e-commerce platform, showcasing exceptional talent and unique designs.
</p>


      </div>
      
            <HeroFooter />

    </div>
    
  )
}

export default Hero
