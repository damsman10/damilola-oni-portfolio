

const Service = (props) => {
  return (
    <div className="flex justify-between mt-6 gap-4 w-[40%] border-2 border-black">
        <div className="left">
            <div className="skype w-9 h-9 rounded-[50%] flex justify-center items-center bg-[#EDF8FD] hover:bg-blue-300">
                {/* <img src={call} alt="Call" className="w-4" /> */}
            </div>
        </div>
        <div className="right">
            <h1 className="font-bold text-[1.2rem]">{props.tit}</h1>
            <p className="mt-2 text-[0.9rem]">{props.par}</p>
        </div>
    </div>
  )
}

export default Service