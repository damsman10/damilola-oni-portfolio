import React from 'react';
import Experience from './pagecomponents/Experience';
import { FaCertificate, FaGraduationCap, FaLaptopCode, FaChalkboardTeacher, FaBookOpen } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="relative bg-white mt-12 ml-8 mb-4 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <h1 className="text-[1.5rem] sm:text-[2rem] font-bold mb-4 text-gray-800">Resume</h1>
      <hr className="border-2 border-blue-500 w-[3.2rem] mb-4" />
      
      <p className="leading-7 mb-6 text-gray-700">
        A technology enthusiast with a solid background in applied science and coding. Demonstrates strong problem-solving abilities and analytical thinking to tackle complex challenges. Passionate about leveraging technical expertise to drive innovation and efficiency in dynamic environments.
      </p>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 lg:w-3/5">
          <h2 className="text-red-600 font-bold text-[1.4rem] mt-8 mb-4 flex items-center gap-2">
            <FaLaptopCode /> EXPERIENCE
          </h2>


          <div className="mb-6 bg-gray-50 p-4 rounded shadow-sm transition duration-300 hover:shadow-md">
            <Experience title="Front End Engineer" companyperiod="Salesplat Technologies, 10/2023 - present" />
            <ul className="list-disc ml-8 mt-2 text-gray-700 space-y-1">
              <li>Collaborated with a diverse development team to create responsive and engaging web applications.</li>
              <li>Tested applications across various browsers and devices for consistent performance.</li>
              <li>Managed code changes using Git, ensuring smooth team collaboration.</li>
              <li>Conducted thorough testing and debugging of frontend components.</li>
              <li>Partnered closely with backend developers and designers to meet project goals.</li>
            </ul>
          </div>

          <div className="mb-6 bg-gray-50 p-4 rounded shadow-sm transition duration-300 hover:shadow-md">
            <Experience title="Software Developer (Contract)" companyperiod="SAIL Innovation Lab, 06/2023 - 09/2023" />
            <ul className="list-disc ml-8 mt-2 text-gray-700">
              <li>Created user-friendly web solutions by organizing information and improving navigation.</li>
            </ul>
          </div>

          <div className="mb-6 bg-gray-50 p-4 rounded shadow-sm transition duration-300 hover:shadow-md">
            <Experience title="Technical Officer" companyperiod="Daily Post Media Ltd, 01/2020 - present" />
            <ul className="list-disc ml-8 mt-2 text-gray-700 space-y-1">
              <li>Website maintenance</li>
              <li>Ad Operations</li>
              <li>Social Media Management</li>
              <li>Graphics Design</li>
              <li>Research and Data Analysis</li>
            </ul>
          </div>

          <div className="mb-6 bg-gray-50 p-4 rounded shadow-sm transition duration-300 hover:shadow-md">
            <Experience title="Information Technology Instructor" companyperiod="New Horizons Computer Learning Centers, 12/2018 - 12/2019" />
            <ul className="list-disc ml-8 mt-2 text-gray-700 space-y-1">
              <li>Taught:
                <ul className="list-disc ml-8 mt-1">
                  <li>Web Design using WordPress</li>
                  <li>HTML/CSS/JS</li>
                  <li>Microsoft Office</li>
                  <li>Java</li>
                  <li>Python</li>
                </ul>
              </li>
              <li>Prepared Junior and Senior students for WAEC</li>
              <li>Recorded over 90% distinction in ICT WAEC results</li>
              <li>Trained over 15 students for MOS Certification</li>
            </ul>
          </div>

          <h2 className="text-red-600 font-bold text-[1.4rem] mt-8 mb-4 flex items-center gap-2">
            <FaCertificate /> CERTIFICATIONS
          </h2>
          <ul className="list-disc ml-8 mt-4 space-y-2 text-gray-700">
            <li>Oracle Database SQL Certified Expert (OCE), <span className="font-bold">Oracle Corporation</span></li>
            <li>Software Development Training, <span className="font-bold">SAIL Innovation Lab</span></li>
            <li>React Js Certificate, <span className="font-bold">Great Learning</span></li>
            <li>SQL Database Management, <span className="font-bold">New Horizons</span></li>
            <li>Java Programming Language, <span className="font-bold">New Horizons</span></li>
            <li>Comptia A+, <span className="font-bold">New Horizons</span></li>
            <li>Adobe Certified Associate (ACA), <span className="font-bold">Adobe</span></li>
            <li>Cisco Certified Network Associate (CCNA), <span className="font-bold">New Horizons</span></li>
            <li>Certified Associate in Project Management, <span className="font-bold">Olabod Project Consult</span></li>
            <li>Microsoft Project Certification, <span className="font-bold">Olabod Project Consult</span></li>
          </ul>
        </div>

        <div className="flex-1 lg:w-2/5">
          <h2 className="text-red-600 font-bold text-[1.4rem] mt-8 mb-4 flex items-center gap-2">
            <FaGraduationCap /> EDUCATION
          </h2>
          <div className="mb-6 bg-gray-50 p-4 rounded shadow-sm transition duration-300 hover:shadow-md">
            <Experience
              title="B.Sc Physics and Solar Energy"
              companyperiod="Bowen University, Iwo, Osun State, 11/2013 - 06/2017"
              degree="Second class (Upper Division)"
            />
          </div>

          <h2 className="text-red-600 font-bold text-[1.4rem] mt-8 mb-4 flex items-center gap-2">
            <FaChalkboardTeacher /> SEMINARS & CONFERENCES
          </h2>
          <ul className="list-disc ml-8 mt-4 space-y-2 text-gray-700">
            <li>The Global Leadership Summit (TGLS), <span className="font-bold">TGLS 2016</span></li>
            <li>Nigerian Institute of Physics (NIP) 40th Annual Conference</li>
          </ul>

          <h2 className="text-red-600 font-bold text-[1.4rem] mt-8 mb-4 flex items-center gap-2">
            <FaBookOpen /> PUBLICATION
          </h2>
          <ul className="list-disc ml-8 mt-4 space-y-2 text-gray-700">
            <li>
              Oyewole, J. A., and F. O. Aweda and D. Oni. "Comparison Of Three Numerical Methods For Estimating Weibull Parameters Using Weibull Distribution Model In Nigeria". <span className="italic font-light">Nigerian Journal of Basic and Applied Sciences</span> 27.2 (2019), 8-15. Print. <a className="underline text-blue-600" href="http://dx.doi.org/10.4314/njbas.v27i2.2" target="_blank" rel="noopener noreferrer">doi:10.4314/njbas.v27i2.2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
