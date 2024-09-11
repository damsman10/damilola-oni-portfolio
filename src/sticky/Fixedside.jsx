import ImageSocials from "./stickycomps/ImageSocials"
import NavMenu from "./stickycomps/NavMenu"


const Fixedside = () => {
  return (
    <div className="fixed h-[100vh] w-[17rem] z-10" style={{backgroundColor: "#040B14"}}>
        <ImageSocials />
        <NavMenu />
    </div>
  )
}

export default Fixedside