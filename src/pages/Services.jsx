import Service from "./pagecomponents/Service"


const Services = () => {
  return (
    <div className="relative bg-white mt-12 ml-8 mb-4">
      <h1 className="text-[1.5rem] sm:text-[2rem] font-bold">Services</h1>
      <hr className="border-2 border-blue-500 w-[3.2rem] mt-4" />
      <p className="mt-4 text-[0.9rem] sm:text-[1rem] leading-7">
        I am a frontend developer with over 6 years of experience working with web technologies such as HTML
      </p>
      
      <div className="services flex flex-wrap justify-start items-center gap-6">
        <Service
        tit = "Web Development" 
        par = "Crafting responsive and visually appealing websites that provide an excellent user experience."
        />

        <Service
        tit = "Web Development" 
        par = "Crafting responsive and visually appealing websites that provide an excellent user experience."
        />

        <Service
        tit = "Web Development" 
        par = "Crafting responsive and visually appealing websites that provide an excellent user experience."
        />
        
        <Service
        tit = "Web Development" 
        par = "Crafting responsive and visually appealing websites that provide an excellent user experience."
        />

        <Service
        tit = "Web Development" 
        par = "Crafting responsive and visually appealing websites that provide an excellent user experience."
        />

        <Service
        tit = "Web Development" 
        par = "Crafting responsive and visually appealing websites that provide an excellent user experience."
        />
      </div>



    </div>
  )
}

export default Services