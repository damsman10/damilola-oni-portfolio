import damibeach from './pageassets/damibeach.jpg'

const Home = () => {
  return (
    <div className="relative left-[20.5%] bg-cover w-[82.1vw] h-[100vh]" style={{backgroundImage: `url(${damibeach})`}}>
        
        <div className="absolute inset-0 bg-black opacity-50"></div>
  
        <h1 className="relative w-[30rem] left-[4%] top-[40%] text-white text-[3.5rem] font-bold z-10">Damilola Oni</h1>
        <p className="relative w-[40rem] left-[4.2%] top-[42%] text-white text-[1.5rem] font-bold z-10">I am a frontend developer</p>
    </div>
  )
}

export default Home