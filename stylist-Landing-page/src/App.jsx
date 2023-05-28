import './App.css'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Approach from './Components/Approach/Approach'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'

function App() {

  

  return (
    <div className='w-full h-full '>
   <Navbar />
   <About />
   <Approach />
   <Services />
   <Contact />
        
    </div>
  )
}

export default App
