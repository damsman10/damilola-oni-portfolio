import dami from '../stickyassets/Dami-at-port.JPG'
import twitter from '../stickyassets/x-solid.svg'
import linkedin from '../stickyassets/linkedin-solid.svg'
import github from '../stickyassets/github-solid.svg'
import whatsapp from '../stickyassets/whatsapp-solid.svg'
import blog from '../stickyassets/blog-solid.svg'

const ImageSocials = () => {
  return (
    <div className="mt-4" >

        <div className="outercircle w-[7rem] h-[7rem] rounded-[50%] flex justify-center items-center m-auto" style={{backgroundColor: "#292F37"}}>
            <div className="innercircle w-[6rem] h-[6rem] rounded-[50%] bg-cover bg-center bg-no-repeat" 
            style={{backgroundImage: `url(${dami})`}}
            >
                {/* <img src= {dami} alt="" /> */}
            </div>
        </div>
        <h1 className="text-center font-bold text-[white] my-2">Damilola Oni</h1>
        <div className="socials flex justify-center gap-3 items-center my-3">

            <div className="linkedin w-9 h-9 rounded-[50%] cursor-pointer flex justify-center items-center bg-[#292F37] hover:bg-blue-700">
                <img src={linkedin} alt="" />
            </div>
            <div className="github w-9 h-9 rounded-[50%] cursor-pointer flex justify-center items-center bg-[#292F37] hover:bg-blue-700">
                <img src={github} alt="" />
            </div>
            <div className="skype w-9 h-9 rounded-[50%] cursor-pointer flex justify-center items-center bg-[#292F37] hover:bg-blue-700">
                <img src={blog} alt="" />
            </div>
            <div className="twitter w-9 h-9 rounded-[50%] cursor-pointer flex justify-center items-center bg-[#292F37] hover:bg-blue-700">
                <img src={whatsapp} alt="" />
            </div>
            <div className="twitter w-9 h-9 rounded-[50%] cursor-pointer flex justify-center items-center bg-[#292F37] hover:bg-blue-700">
                <img src={twitter} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ImageSocials