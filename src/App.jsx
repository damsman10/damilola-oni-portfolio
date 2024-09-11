import './App.css'
import Home from './pages/Home'
import Fixedside from './sticky/Fixedside'



function App() {
  return (
    <div className='flex'>
        <Fixedside />

      <div className='w-[83%]'>
        <Home />
      </div>
    </div>
  )
}

export default App