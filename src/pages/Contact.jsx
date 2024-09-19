import locate from './pageassets/location-dot-solid.svg'
import call from './pageassets/phone-solid.svg'
import mail from './pageassets/envelope-solid.svg'

const Contact = () => {
  return (
    <div className="relative bg-white p-4 sm:p-8 md:p-12 lg:p-16">
      <h1 className="text-[1.5rem] sm:text-[2rem] font-bold">Contact</h1>
      <hr className="border-2 border-blue-500 w-[3.2rem] mt-4" />
      <p className="mt-4 text-[0.9rem] sm:text-[1rem] leading-7">
        You can reach me via the addresses below or simply fill and submit the form and I will respond with speed of light.
      </p>

      <div className="details flex flex-col md:flex-row justify-start gap-6 mt-16">
        <div className="left md:w-[40%] p-[1.5rem] shadow-lg flex flex-col">
          <div className="row1 flex justify-start gap-4">
            <div className="left">
              <div className="skype w-9 h-9 rounded-[50%] flex justify-center items-center bg-[#EDF8FD] hover:bg-blue-300">
                <img src={locate} alt="Location" className="w-4" />
              </div>
            </div>
            <div className="right">
              <h1 className="text-[1rem] font-medium">Address</h1>
              <p className="mt-2 text-[0.8rem]">Lagos, Nigeria</p>
            </div>
          </div>

          <div className="row2 mt-6 flex justify-start gap-4">
            <div className="left">
              <div className="skype w-9 h-9 rounded-[50%] flex justify-center items-center bg-[#EDF8FD] hover:bg-blue-300">
                <img src={call} alt="Call" className="w-4" />
              </div>
            </div>
            <div className="right">
              <h1 className="text-[1rem] font-medium">Call Me</h1>
              <p className="mt-2 text-[0.8rem]">+234 810 8648 372</p>
            </div>
          </div>

          <div className="row3 mt-6 flex justify-start gap-4">
            <div className="left">
              <div className="skype w-9 h-9 rounded-[50%] flex justify-center items-center bg-[#EDF8FD] hover:bg-blue-300">
                <img src={mail} alt="Email" className="w-4" />
              </div>
            </div>
            <div className="right">
              <h1 className="text-[1rem] font-medium">Email Me</h1>
              <p className="mt-2 text-[0.8rem]">damilolaoni07@gmail.com</p>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15863.569277051987!2d3.3792!3d6.5244!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5090b1388af%3A0x6e24769daaa6a2e6!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1695016459000!5m2!1sen!2sus"
            className="mt-4 w-full h-[200px]"
            style={{ border: 0 }}
            frameBorder="0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="right md:w-[55%] p-[1.5rem] shadow-lg">
          <div className="top flex flex-col md:flex-row justify-start items-center gap-8">
            <div className="name w-full">
              <p className="mb-2">Your Name</p>
              <input
                type="text"
                className="bg-white border-2 border-gray-200 w-full h-9"
              />
            </div>
            <div className="email w-full mt-4 md:mt-0">
              <p className="mb-2">Your Email</p>
              <input
                type="text"
                className="bg-white border-2 border-gray-200 w-full h-9"
              />
            </div>
          </div>
          <div className="subject mt-4">
            <p className="mb-2">Subject</p>
            <input
              type="text"
              className="w-full bg-white border-2 border-gray-200 h-9"
            />
          </div>
          <div className="message mt-4">
            <p className="mb-2">Message</p>
            <textarea
              name="textarea"
              id=""
              className="w-full h-32 bg-white border-2 border-gray-200"
            ></textarea>
          </div>

          <div className="button text-center">
            <button className="px-6 py-2 bg-blue-700 text-white rounded-3xl mt-4">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
