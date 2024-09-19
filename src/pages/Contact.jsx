

const Contact = () => {
  return (
    <div className="relative bg-white p-4 sm:p-8 md:p-12 lg:p-16">
      <h1 className="text-[1.5rem] sm:text-[2rem] font-bold">Contact</h1>
      <hr className="border-2 border-blue-500 w-[3.2rem] mt-4" />
      <p className="mt-4 text-[0.9rem] sm:text-[1rem] leading-7">
         You can reach me via the addresses below or simply fill and submit the form and I will respond with speed of light.
      </p>

      <div className="details flex justify-start i gap-6 mt-16">
        <div className="left w-[35%] h-[20rem] border-2 border-black">
            
        </div>
        <div className="right w-[55%] p-[1.5rem] shadow-lg
">
            <div className="top flex justify-start items-center gap-8">
                <div className="name w-full">
                    <p className="mb-2">Your Name</p>
                    <input type="text" className="bg-white border-2 border-gray-200 w-full h-9"/>
                </div>
                <div className="email w-full">
                    <p className="mb-2">Your Email</p>
                    <input type="text" className="bg-white border-2 border-gray-200 w-full h-9" />
                </div>
            </div>
            <div className="subject mt-4">
                <p className="mb-2">Subject</p>
                <input type="text" className="w-full bg-white border-2 border-gray-200 h-9" />
            </div>
            <div className="message mt-4">
                <p className="mb-2">Message</p>
                <textarea name="textarea" id="" className="w-full h-32 bg-white border-2 border-gray-200"></textarea>
            </div>

            <div className="button text-center">
                <button className="px-6 py-2 bg-blue-700 text-white rounded-3xl mt-4">Send Message</button>
            </div>
        </div>
      </div>
        
    </div>
  )
}

export default Contact