import damibeach from './pageassets/damibeach.jpg';

const Home = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${damibeach})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative flex flex-col items-center justify-center h-full z-10 text-center px-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Damilola Oni
        </h1>
        <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
          I am a frontend developer
        </p>
      </div>
    </div>
  );
};

export default Home;
