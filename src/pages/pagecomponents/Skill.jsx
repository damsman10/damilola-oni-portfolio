

const Skill = (props) => {
  return (
    <div className="mb-6w-[35rem] ml-8">
        <div className="top flex justify-between items-center">
            <div className="left">
                <p>{props.skillname}</p>
            </div>
            <div className="right">
                <p>{props.barrate}%</p>
            </div>
        </div>
        <div className="bottom">
            <div className="fullbar w-full h-4 rounded overflow-hidden">
                <div 
                className="level h-full" 
                style={{
                    width: `${props.barrate}%`,
                    backgroundImage: "repeating-linear-gradient(45deg, #facc15 0%, #facc15 12px, transparent 10px, transparent 14px)"
                }}>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Skill