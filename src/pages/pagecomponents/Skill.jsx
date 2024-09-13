

const Skill = (props) => {
  return (
    <div className="mb-6w-[35rem] ml-8 my-4">
        <div className="top flex justify-between items-center mb-[0.4rem]">
            <div className="left">
                <p>{props.skillname}</p>
            </div>
            <div className="right">
                <p>{props.barrate}%</p>
            </div>
        </div>
        <div className="bottom">
            <div className="fullbar w-full h-2 rounded overflow-hidden bg-[#cecece]">
                <div 
                className="level h-full" 
                style={{
                    width: `${props.barrate}%`,
                    backgroundImage: "repeating-linear-gradient(45deg, #149DDD 0%, #149DDD 12px, transparent 10px, transparent 12.5px)"
                }}>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Skill