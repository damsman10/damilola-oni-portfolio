

const NavMenu = () => {
  return (
    <div>
        <ul className="text-gray-400 text-[1.1rem] space-y-6 ml-8 mt-12">
          <li className="cursor-pointer flex items-center space-x-2 group hover:text-white transition duration-300 ease-in-out active:text-white">
            <svg className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-700 transition duration-300 ease-in-out active:text-blue-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            <span className="group-hover:text-white">Home</span>
          </li>

          <li className="cursor-pointer flex items-center space-x-2 group hover:text-white transition duration-300 ease-in-out active:text-white">
            <svg className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-700 transition duration-300 ease-in-out active:text-blue-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <span className="group-hover:text-white">About</span>
          </li>

          <li className="cursor-pointer flex items-center space-x-2 group hover:text-white active:text-white">
            <svg className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-700 transition duration-300 ease-in-out active:text-blue-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"/>
            </svg>
            <span className="group-hover:text-white">Resume</span>
          </li>

          <li className="cursor-pointer flex items-center space-x-2 group hover:text-white active:text-white">
            <svg className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-700 transition duration-300 ease-in-out active:text-blue-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"/>
            </svg>
            <span className="group-hover:text-white">Portfolio</span>
          </li>

          <li className="cursor-pointer flex items-center space-x-2 group hover:text-white transition duration-300 ease-in-out active:text-white">
            <svg className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-700 transition duration-300 ease-in-out active:text-blue-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M4 5h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2zm1 5h14v6H5v-6zm0-4v2h14V6H5z"/>
            </svg>
            <span className="group-hover:text-white">Services</span>
          </li>

          <li className="cursor-pointer flex items-center space-x-2 group hover:text-white transition duration-300 ease-in-out active:text-white">
            <svg className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-700 transition duration-300 ease-in-out active:text-blue-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21 8V7l-3 2-2-2v5l2-1 3 2v-1l-2-1zm0-4H3C1.89 4 1 4.89 1 6v12c0 1.1.89 2 2 2h18c1.11 0 2-.9 2-2V6c0-1.11-.89-2-2-2zM20 6l-8 5-8-5h16zm-2 12H6v-7l6 4 6-4v7z"/>
            </svg>
            <span className="group-hover:text-white">Contact</span>
          </li>

        </ul>
    </div>
  )
}

export default NavMenu