import damibeach from './pageassets/damibeach.jpg'

const Home = () => {
  return (
    <div className="bg-cover h-full" style={{backgroundImage: `url(${damibeach})`}}>
        <h1>    HOME    </h1>
    </div>
  )
}

export default Home