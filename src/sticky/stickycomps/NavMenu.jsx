import { NavLink } from 'react-router-dom';

const NavMenu = ({ onMenuItemClick }) => {
  return (
    <div>
      <ul className="text-gray-400 text-[1.1rem] space-y-6 ml-8 mt-12">
        <li className="cursor-pointer space-x-2 group hover:text-white transition duration-300 ease-in-out">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `flex items-center space-x-2 ${isActive ? 'text-white' : 'text-gray-400'}`
            }
            end
            onClick={onMenuItemClick}
          >
            <svg className="w-6 h-6 fill-current group-hover:text-blue-700 transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            <span>Home</span>
          </NavLink>
        </li>
        <li className="cursor-pointer flex items-center space-x-2 group hover:text-white transition duration-300 ease-in-out">
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `flex items-center space-x-2 ${isActive ? 'text-white' : 'text-gray-400'}`
            }
            onClick={onMenuItemClick}
          >
            <svg className="w-6 h-6 fill-current group-hover:text-blue-700 transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <span>About</span>
          </NavLink>
        </li>
        <li className="cursor-pointer flex items-center space-x-2 group hover:text-white transition duration-300 ease-in-out">
          <NavLink 
            to="/resume" 
            className={({ isActive }) => 
              `flex items-center space-x-2 ${isActive ? 'text-white' : 'text-gray-400'}`
            }
            onClick={onMenuItemClick}
          >
            <svg className="w-6 h-6 fill-current group-hover:text-blue-700 transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"/>
            </svg>
            <span>Resume</span>
          </NavLink>
        </li>
        <li className="cursor-pointer flex items-center space-x-2 group hover:text-white transition duration-300 ease-in-out">
          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => 
              `flex items-center space-x-2 ${isActive ? 'text-white' : 'text-gray-400'}`
            }
            onClick={onMenuItemClick}
          >
            <svg className="w-6 h-6 fill-current group-hover:text-blue-700 transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"/>
            </svg>
            <span>Portfolio</span>
          </NavLink>
        </li>
        <li className="cursor-pointer flex items-center space-x-2 group hover:text-white transition duration-300 ease-in-out">
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `flex items-center space-x-2 ${isActive ? 'text-white' : 'text-gray-400'}`
            }
            onClick={onMenuItemClick}
          >
            <svg
              className="w-6 h-6 fill-current group-hover:text-blue-700 transition duration-300 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M487.9 315.1l-41.6-16.5c2.3-14.3 3.7-29.2 3.7-44.6s-1.4-30.3-3.7-44.6l41.6-16.5c8.5-3.4 12.8-12.9 9.5-21.4l-19.7-48.1c-3.4-8.5-12.9-12.8-21.4-9.5l-41.7 16.5c-12-12.5-25.9-23.5-41.4-32.7l5.7-44.9c1.1-9-5.5-17.2-14.5-18.4l-51.8-7.4c-9-1.3-17.5 5.3-18.4 14.5l-5.7 44.9c-15.5-3.9-31.8-6-48.6-6s-33.1 2.1-48.6 6l-5.7-44.9c-1.1-9-9.4-15.8-18.4-14.5l-51.8 7.4c-9 1.3-15.6 9.5-14.5 18.4l5.7 44.9c-15.5 9.1-29.4 20.2-41.4 32.7l-41.7-16.5c-8.5-3.4-18 1-21.4 9.5L15.1 192.5c-3.4 8.5 1 18 9.5 21.4l41.6 16.5c-2.3 14.3-3.7 29.2-3.7 44.6s1.4 30.3 3.7 44.6l-41.6 16.5c-8.5 3.4-12.8 12.9-9.5 21.4l19.7 48.1c3.4 8.5 12.9 12.8 21.4 9.5l41.7-16.5c12 12.5 25.9 23.5 41.4 32.7l-5.7 44.9c-1.1 9 5.5 17.2 14.5 18.4l51.8 7.4c9 1.3 17.5-5.3 18.4-14.5l5.7-44.9c15.5 3.9 31.8 6 48.6 6s33.1-2.1 48.6-6l5.7 44.9c1.1 9 9.4 15.8 18.4 14.5l51.8-7.4c9-1.3 15.6-9.5 14.5-18.4l-5.7-44.9c15.5-9.1 29.4-20.2 41.4-32.7l41.7 16.5c8.5 3.4 18-1 21.4-9.5l19.7-48.1c3.4-8.5-1-18-9.5-21.4zM256 352c-52.9 0-96-43.1-96-96s43.1-96 96-96 96 43.1 96 96-43.1 96-96 96z" />
            </svg>
            <span>Services</span>
          </NavLink>
        </li>

        <li className="cursor-pointer flex items-center space-x-2 group hover:text-white transition duration-300 ease-in-out">
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `flex items-center space-x-2 ${isActive ? 'text-white' : 'text-gray-400'}`
            }
            onClick={onMenuItemClick}
          >
            <svg className="w-6 h-6 fill-current group-hover:text-blue-700 transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21 8V7l-3 2-2-2v5l2-1 3 2v-1l-2-1zm0-4H3C1.89 4 1 4.89 1 6v12c0 1.1.89 2 2 2h18c1.11 0 2-.9 2-2V6c0-1.11-.89-2-2-2zM20 6l-8 5-8-5h16zm-2 12H6v-7l6 4 6-4v7z"/>
            </svg>
            <span>Contact</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
