import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import carrental from './pageassets/Car-Rental.png';
import alpha from './pageassets/alpha.png';
import blog from './pageassets/blog.png';
import atmapp from './pageassets/ATM-App.png';
import htmlport from './pageassets/htmlportfolio.png';
import currconv from './pageassets/curr-conv.png';
import retain from './pageassets/retain.png';
import adtrakker from './pageassets/adtrakker.png';
import SupportPro from './pageassets/SupportPro.png'
import BallotNaija from './pageassets/BallotNaija.png'
import cipher from './pageassets/Cipher-Machine.png'
import newsletter from './pageassets/Email-Template.png'
import Syndeco from './pageassets/Syndeco-Technologies-shot.png'

// Data for PortfolioDetails
const portfolioData = [
  
  {
  slug: 'syndeco',
  category: 'Corporate Website',
  stack: 'ReactJS, TailwindCSS, Vite, Framer Motion, Git',
  date: 'Completed',
  url: 'https://syndeco-technologies.vercel.app/',
  title: 'Syndeco Technologies Website',
  description:
    'Syndeco Technologies is a modern corporate website built to highlight the company’s services, expertise, and career opportunities. I developed this multi-page application with React and TailwindCSS, ensuring a professional design, optimized performance, and mobile responsiveness. The site also features dynamic sections like Careers and Blog for scalability and content management.',
  image: Syndeco,
  },


  {
  slug: 'support-pro',
  category: 'Marketing Tech',
  stack: 'ReactJS, TailwindCSS, Git',
  date: 'Completed',
  url: 'https://support-pro-training.vercel.app/',
  title: 'Support Pro HR Training',
  description:
    'Support Pro is a promotional landing page designed to showcase services and drive user engagement. I developed this single-page application using React and TailwindCSS, focusing on clean layout, responsive design, and persuasive ad copy integration to support targeted marketing efforts.',
  image: SupportPro,
  },
  
  {
  slug: 'adtrakker',
  category: 'Performance Tracking',
  stack: 'ReactJS, TailwindCSS, Redux, Git',
  date: 'Ongoing',
  url: 'https://ad-trakker.vercel.app/',
  title: 'AdTrakker Dashboard',
  description:
    'AdTrakker is a campaign performance tracking web app built with React. I designed and developed this dashboard to help businesses monitor ad engagement metrics, visualize campaign data, and optimize advertising strategies. It emphasizes clarity in analytics and actionable insights through an intuitive UI.',
  image: adtrakker,
  },
  {
    slug: 'retain',
    category: 'Education',
    stack: 'ReactJS, TailwindCSS, Redux, Git',
    date: 'Ongoing',
    url: 'https://incubate-retain.vercel.app/',
    title: 'Incubate Retain',
    description:
    'I developed the Incubate-Retain website, an ad platform for a tech training platform, using React. As the sole front-end developer, I designed an intuitive interface for users to explore courses, access resources, ask questions, and apply. This project highlights my skills in front-end development, UX design, and delivering user-centric solutions.',
    image: retain,

  },
  
  
  {
    slug: 'car-rental',
    category: 'Services',
    stack: 'ReactJS, TailwindCSS, Redux, Git',
    date: 'Ongoing',
    url: 'https://car-rental-lmd.vercel.app/',
    title: 'Car Rental Services',
    description:
    'Introducing an innovative Car Rental Services website, meticulously crafted using React. As the team lead of a dynamic group of four frontend developers and one backend developer, I spearheaded the project aimed at simplifying the car rental experience. Users can easily find and rent vehicles from their nearest locations through an intuitive interface.',
    image: carrental,

  },

  {
    slug: 'ballot-naija',
    category: 'Media & Entertainment',
    stack: 'ReactJS, TailwindCSS, Redux, Git',
    date: 'Ongoing',
    url: 'https://ballot-naija.vercel.app/',
    title: 'Ballot Naija',
    description:
    'Ballot Niaja is a profssional website i craeted from scratch to be used as both website and news aggregator. It combines news from two websites, daily post and premium times using both websites news feed. It is also a platform for giveaways.',
    image: BallotNaija,

  },

  {
    slug: 'cipher-machine',
    category: 'Web Application',
    stack: 'ReactJS, TailwindCSS, Javacript, Git',
    date: 'Ongoing',
    url: 'https://cipher-web-app.vercel.app/',
    title: 'Car Machine Web App',
    description:
    'Introducing an advanced Cipher Machine web app, designed to encrypt and decrypt messages using a variety of cipher algorithms. Built with React and TailwindCSS, this app provides a user-friendly interface for encoding and decoding text, making it ideal for learning about cryptography or securing messages.',
    image: cipher,

  },
  {
    slug: 'email-newsletter',
    category: 'Email Design',
    stack: 'HTML, CSS, GitHub Pages, PutsMail',
    date: 'Completed',
    url: 'https://damsman10.github.io/incubate_newsletter/',
    title: 'Email Newsletter Template',
    description:
    'Designed a professional email newsletter template for Salesplat, ensuring responsiveness and compatibility across email clients. The template includes dynamic placeholders for personalization and integrates brand assets seamlessly. This project serves as a reusable and scalable email design for marketing campaigns.',
    image: newsletter,
  },
  {
    slug: 'alphanews',
    category: 'Newspaper',
    stack: 'Wordpress',
    date: 'Completed',
    url: 'https://alphanewsng.com/',
    title: 'A News Blog',
    description:
      'A beautiful and efficient wordpress news website i made for a client.',
    image: alpha,
  },
  {
    slug: 'blog',
    category: 'Blog',
    stack: 'ReactJS, Tailwind CSS, Redux',
    date: 'Ongoing',
    url: 'https://dammy-bytes.vercel.app/',
    title: 'My Personal Blog',
    description:
      'This is my personal blog',
    image: blog,
  },
  {
    slug: 'atm-app',
    category: 'Finance',
    stack: 'HTML, CSS, JS',
    date: 'Completed',
    url: 'https://damsman10.github.io/bank-web-app/',
    title: 'ATM Application',
    description:
      'This is a a real banking web app where you can deposit any virtual amount with ease and send real money to friends and family anywhere around the world',
    image: atmapp,
  },
  {
    slug: 'htmlportfolio',
    category: 'portfolio',
    stack: 'HTML, CSS, JS',
    date: 'Completed',
    url: 'https://damsman10.github.io/RealPortfolio/',
    title: 'HTML Portfolio',
    description:
      'This is a standard portfolio i made using html, css and javascript',
    image: htmlport,
  },
  {
    slug: 'currency-converter',
    category: 'Finance',
    stack: 'HTML, CSS, JS, Axios',
    date: 'Completed',
    url: 'https://damsman10.github.io/live-currency-converter/',
    title: 'Live Currency Converter',
    description:
      'This daily updated currency converter is an application that can be used to know the current value of any of the currencies of nations around the world. The base currency is the USD.',
    image: currconv,
  },
  
  
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
