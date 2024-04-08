
import './App.css'
import Navbar from './Components/Navbar'
import Cards from './Components/Cards'
import Slider from './Components/Slider'

import SectionHeader from './Components/SectionHeader'
import Footer from './Components/Footer'
import Gallery from './Components/Gallery'
import Blogs from './Components/Blogs'
import LogoSlider from './Components/Logoslider'
import BrandSlider from './Components/BrandSlider'
function App() {
 

  return (
    <>
    <Navbar />
   <Cards />
 <SectionHeader />
 <Slider />
 <Blogs />
<LogoSlider />
{/* <BrandSlider /> */}
 <Gallery />
 <Footer />
    </>
  )
}

export default App
