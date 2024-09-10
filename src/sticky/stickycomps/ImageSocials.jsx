import dami from '../stickyassets/Dami-at-port.JPG'

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
        <div className="socials flex justify-center gap-3 items-center">
            <div className="twitter cursor-pointer">
                
            </div>
            <div className="linkedin w-9 h-9 rounded-[50%]" style={{backgroundColor: "#292F37"}}>

            </div>
            <div className="github w-9 h-9 rounded-[50%]" style={{backgroundColor: "#292F37"}}>

            </div>
            <div className="skype w-9 h-9 rounded-[50%]" style={{backgroundColor: "#292F37"}}>

            </div>
            <div className="twitter w-9 h-9 rounded-[50%]" style={{backgroundColor: "#292F37"}}>

            </div>
            <div className="twitter w-9 h-9 rounded-[50%]" style={{backgroundColor: "#292F37"}}>

            </div>
        </div>
    </div>
  )
}

export default ImageSocials