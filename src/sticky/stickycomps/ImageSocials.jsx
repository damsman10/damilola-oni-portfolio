import dami from '../stickyassets/Dami-at-port.JPG';
import twitter from '../stickyassets/x-solid.svg';
import linkedin from '../stickyassets/linkedin-solid.svg';
import github from '../stickyassets/github-solid.svg';
import whatsapp from '../stickyassets/whatsapp-solid.svg';
import blog from '../stickyassets/blog-solid.svg';

const ImageSocials = () => {
  return (
    <div className="mt-4">
      <div className="outercircle w-[7rem] h-[7rem] rounded-[50%] flex justify-center items-center m-auto" style={{ backgroundColor: "#292F37" }}>
        <div className="innercircle w-[6rem] h-[6rem] rounded-[50%] bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url(${dami})` }}
        >
          {/* <img src={dami} alt="" /> */}
        </div>
      </div>
      <h1 className="text-center font-bold text-[white] my-2">Damilola Oni</h1>
      <div className="socials flex justify-center gap-3 items-center my-3">
        <a href="https://www.linkedin.com/in/damilola-o-oni" target="_blank" rel="noopener noreferrer" className="linkedin w-9 h-9 rounded-[50%] flex justify-center items-center bg-[#292F37] hover:bg-blue-700">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://github.com/damsman10" target="_blank" rel="noopener noreferrer" className="github w-9 h-9 rounded-[50%] flex justify-center items-center bg-[#292F37] hover:bg-blue-700">
          <img src={github} alt="GitHub" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="skype w-9 h-9 rounded-[50%] flex justify-center items-center bg-[#292F37] hover:bg-blue-700">
          <img src={blog} alt="Blog" />
        </a>
        <a href="https://wa.me/2348108648372" target="_blank" rel="noopener noreferrer" className="twitter w-9 h-9 rounded-[50%] flex justify-center items-center bg-[#292F37] hover:bg-blue-700">
          <img src={whatsapp} alt="WhatsApp" />
        </a>
        <a href="https://twitter.com/dummyprofile" target="_blank" rel="noopener noreferrer" className="twitter w-9 h-9 rounded-[50%] flex justify-center items-center bg-[#292F37] hover:bg-blue-700">
          <img src={twitter} alt="Twitter" />
        </a>
      </div>
    </div>
  );
};

export default ImageSocials;
