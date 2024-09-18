import ImageSocials from "./stickycomps/ImageSocials"
import NavMenu from "./stickycomps/NavMenu"


const Fixedside = () => {
  return (
    <div className="fixed hidden lg:block h-[100vh] min-w-[16%] w-[20%] z-10" style={{backgroundColor: "#040B14"}}>
        <ImageSocials />
        <NavMenu />
    </div>
  )
}

export default Fixedside