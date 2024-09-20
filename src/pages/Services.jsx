import Service from "./pagecomponents/Service";
import webdev from './pageassets/webdev-solid.svg'
import react from './pageassets/react-solid.svg'
import wpmaint from './pageassets/wpmaint-solid.svg'
import seo from './pageassets/seo-solid.svg'
import uiux from './pageassets/uiux-solid.svg'
import webmaint from './pageassets/webmaint-solid.svg'

const Services = () => {
  return (
    <div className="relative bg-white mt-12 px-4 sm:px-8 lg:px-16 mb-4">
      <h1 className="text-[1.5rem] sm:text-[2rem] font-bold">Services</h1>
      <hr className="border-2 border-blue-500 w-[3.2rem] mt-4" />
      <p className="mt-4 text-[0.9rem] sm:text-[1rem] leading-7">
        I am committed to delivering top-notch web development services that
        cater to your unique needs. My expertise spans across various areas of
        frontend development, ensuring that every project is crafted with
        precision and a keen eye for detail.
      </p>

      <div className="services flex flex-col md:flex-row flex-wrap justify-start gap-8 mt-8 mb-16">
        <Service
          image = {webdev}
          tit="Web Development"
          par="Developing responsive, visually appealing websites with a focus on exceptional user experience."
        />

        <Service
          image = {react}
          tit="React Development"
          par="Creating dynamic and high-performance web applications with the latest React tools and libraries."
        />

        <Service
          image = {wpmaint}
          tit="WordPress Site Maintenance"
          par="Offering reliable maintenance services to keep your WordPress site secure, updated, and functioning at its best."
        />

        <Service
          image = {seo}
          tit="SEO Optimization"
          par="Boosting your website's search engine rankings to drive more organic traffic and enhance visibility."
        />

        <Service
          image = {uiux}
          tit="UI/UX Design"
          par="Designing intuitive and user-friendly interfaces that enhance interaction and elevate user satisfaction."
        />

        <Service
          image = {webmaint}
          tit="Website Maintenance"
          par="Providing consistent support and regular updates to ensure your website remains up-to-date and operates smoothly."
        />
      </div>
    </div>
  );
};

export default Services;
