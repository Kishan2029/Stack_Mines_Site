import Navbar from "../components/Navbar"
import Stake from "../components/Stake"


const Home = () => {
  return (
    <div className="h-screen">
        <Navbar/>
        <div className="h-[90%]  bg-mainBagCol">
          <Stake/>
        </div>
        
    </div>
  )
}

export default Home