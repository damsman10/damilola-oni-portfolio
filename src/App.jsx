import './App.css'
import Allpages from './pages/Allpages'
import Fixedside from './sticky/Fixedside'



function App() {
  return (
    <div className='flex sticky'>
      <Fixedside />

      <Allpages />
    </div>
  )
}

export default App