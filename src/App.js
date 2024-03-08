import Button from './Button'
import Navigation from './Navigation';
import InfoElement from './InfoElement';
import {fa7, faLaptop, faFaceSmile} from '@fortawesome/free-solid-svg-icons'
import Lottie from 'lottie-react';
import svg from "./assets/big.json"


function App() {
  return (
    <div className="m-12">
      <Navigation/>
      <div className='flex flex-col lg:flex-row lg:justify-between mt-12 lg:mt-20'>
        <div>
          <h1 className='text-5xl md:text-7xl font-bold text-gray-800'>It's Time to <br></br>Regain Your <br></br> Fitness</h1>
          <p className='text-lg md:text-xl text-gray-500 my-6' >Do fitness anywhere and anytime <br></br> with our training videos</p>
          < Button/>
        </div>
        <div className='flex mt-6 lg:mt-0'>
          <Lottie style={{width:500}} animationData={svg}/>
        </div>
      </div>
      <div className='mt-20 lg:mt-32 flex flex-col md:flex-row md:flex-wrap justify-between'>
          < InfoElement icon={fa7} heading='Daily Workouts 7 Days a Week' text='Get personalized workouts on a daily basis from professionals.' color='orange'/>
          < InfoElement icon={faLaptop} heading='Access From Any Platform' text='Use all of the benefits of the service anywhere and on any device' color='red'/>
          < InfoElement icon={faFaceSmile} heading='Guides & Community' text='A private community where we help each other.'  color='blue'/>
      </div>
    </div>
  );
}

export default App;
