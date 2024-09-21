import link from '../pageassets/link-solid.svg'

const Porto = (props) => {
    return (
        <div 
            className="relative mt-6 w-[22rem] h-[15rem] shadow-2xl bg-cover bg-center transition-all duration-300 hover:opacity-100 group" 
            style={{ backgroundImage: `url(${props.pic})` }}
        >
            {/* Overlay */}
            <div 
                className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"
            ></div>
      
            {/* Link Image */}
            <a 
                href={`/portfolio${props.site}`}
                // href={`/${props.site}`}
                // target='_blank'
                rel='noopener noreferrer'
                className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
                <img
                    src={link}
                    alt="Link icon"
                    className="w-16"
                />
            </a>
        </div>
    );
}

export default Porto;
