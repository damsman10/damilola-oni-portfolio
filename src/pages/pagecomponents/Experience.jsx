

const Experience = (props) => {
  return (
    <div>
        <h1 className="text-[1.2rem] font-bold">{props.title}</h1>
        <p className="text-[#414042] italic mt-2">{props.companyperiod}</p>
        <p className="mt-1">{props.degree}</p>
        
    </div>
  )
}

export default Experience