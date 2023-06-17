import Booking from '../Booking/Booking';

import './Description.css';


const Description = () => {
  return (
    <div className='parent-container'>
        <Booking/>
        <div className='description-container'>
            <div className='title-section'>
                <h3>Explore the routes to Ireland!</h3>
            </div>
            <div className='content'>
                <div className='step-container'>
                    <div className='image'>
                        <img src='src\assets\map-icon.png' alt='About Us' />
                    </div>
                    <div className='title-section'>
                        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    </div>
                    <div className='content-section'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatum blanditiis dolore! Eaque, dolor minima ex voluptate eius esse error?</p>
                    </div>
                </div>
                <div className='step-container'>
                    <div className='image'>
                    <img src='src\assets\map-icon.png' alt='About Us' />
                    </div>
                    <div className='title-section'>
                    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    </div>
                    <div className='content-section'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatum blanditiis dolore! Eaque, dolor minima ex voluptate eius esse error?</p>
                    </div>
                </div>
                <div className='step-container'>
                    <div className='image'>
                        <img src='src\assets\map-icon.png' alt='About Us' />
                    </div>
                    <div className='title-section'>
                        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    </div>
                    <div className='content-section'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatum blanditiis dolore! Eaque, dolor minima ex voluptate eius esse error?</p>
                    </div>
                </div>
            </div>
            
        </div>
    
        </div>
  )
}

export default Description