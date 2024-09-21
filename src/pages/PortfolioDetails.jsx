import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import atm from './pageassets/ATM-App.png';
import carrental from './pageassets/Car-Rental.png';
import alpha from './pageassets/alpha.png';

// Data for PortfolioDetails
const portfolioData = [
  {
    slug: 'car-rental',
    category: 'Services',
    stack: 'ReactJS, TailwindCSS, Redux, Git',
    status: 'Ongoing',
    url: 'https://car-rental-one-puce.vercel.app/',
    title: 'Car Rental Services',
    description:
    'Introducing an innovative Car Rental Services website, meticulously crafted using React. As the team lead of a dynamic group of four frontend developers and one backend developer, I spearheaded the project aimed at simplifying the car rental experience. Users can easily find and rent vehicles from their nearest locations through an intuitive interface. My responsibilities included overseeing the homepage design, managing routing, maintaining the central repository, and conducting thorough code reviews to ensure the highest quality standards throughout the development process.',
    image: carrental,

  },
  {
    slug: 'alphanews',
    category: 'Blog',
    stack: 'Wordpress',
    status: 'Completed',
    url: '/#',
    title: 'A News Blog',
    description:
      'A beautiful and efficient wordpress news website i made for a client. He maintained it for about two years till he stopped paying host and domain fee.',
    image: alpha,
  },
  {
    slug: 'atm-app',
    category: 'Finance',
    stack: 'ReactJS, NodeJS',
    date: 'Completed',
    url: 'https://example-atm-app.vercel.app/',
    title: 'ATM Application',
    description:
      'This is an ATM application built with React and NodeJS. The application allows users to simulate ATM transactions, view balances, and manage accounts efficiently.',
    // image: dami,
  },
  // Add more portfolio items here
];

const PortfolioDetails = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const [portfolioItem, setPortfolioItem] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    setLoading(true); // Start loading when component mounts
    // Find the portfolio item by its slug
    const item = portfolioData.find((item) => item.slug === slug);
    setTimeout(() => {
      setPortfolioItem(item);
      setLoading(false); // Stop loading after finding the item
    }, 500); // Simulating a delay for loading (can be removed if not needed)
  }, [slug]);

  if (loading) {
    return <div className="text-center mt-12 flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!portfolioItem) {
    return <div className="text-center mt-12 flex justify-center items-center h-screen">Project not found.</div>;
  }

  return (
    <div className="">
      
        {/* portfolio breadcrumb header */}
        <div className="portDetailHeader relative -top-1 w-full bg-[#040B14] text-white flex items-center px-4 py-4">
          <nav className="text-sm">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/portfolio" className="hover:underline">
              Portfolio
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200 capitalize">{slug.replace('-', ' ')}</span>
          </nav>
        </div>

        <h1 className="text-[1.5rem] mt-8 ml-4 sm:text-[2rem] font-bold">Project Details</h1>
        <hr className="border-2 border-blue-500 ml-4 w-[3.2rem] mt-4" />

    <div className="flex flex-col md:flex-row gap-8 mt-12 mb-4 mx-4 h-auto md:h-[80vh]">

      <div className="left w-full md:w-[65%] h-full shadow-md">
        <img
          src={portfolioItem.image}
          alt={portfolioItem.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="right w-full md:w-[30%] h-full">
        <div className="top space-y-2 p-4 md:p-8 border-2 shadow-lg">
          <h1 className="font-bold text-lg">Project Information</h1>
          <hr className="w-[10rem]" />
          <h3>
            <span className="font-semibold text-[0.9rem]">Category: </span>
            {portfolioItem.category}
          </h3>
          <h3>
            <span className="font-semibold text-[0.9rem]">Tech Stack: </span>
            {portfolioItem.stack}
          </h3>
          <h3>
            <span className="font-semibold text-[0.9rem]">Project date: </span>
            {portfolioItem.date}
          </h3>
          <h3>
            <span className="font-semibold text-[0.9rem]">Project URL: </span>
            <a
              href={portfolioItem.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {portfolioItem.url}
            </a>
          </h3>
        </div>
        <div className="bottom mt-4 md:mt-12 space-y-4">
          <h1 className="font-bold text-lg">{portfolioItem.title}</h1>
          <p className="text-[0.9rem] leading-6">{portfolioItem.description}</p>
        </div>
      </div>
    </div>



    </div>
  );
};

export default PortfolioDetails;
