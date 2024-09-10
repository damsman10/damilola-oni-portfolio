import ImageSocials from "./stickycomps/ImageSocials"
import NavMenu from "./stickycomps/NavMenu"


const Fixedside = () => {
  return (
    <div className="h-[100vh] w-[20%]" style={{backgroundColor: "#040B14"}}>
        <ImageSocials />
        <NavMenu />
    </div>
  )
}

export default Fixedside