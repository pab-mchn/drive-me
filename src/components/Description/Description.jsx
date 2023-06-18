import Booking from '../Booking/Booking';
// import PhoneSketch from '../PhoneSketch/PhoneSketch';
import './Description.css';

const Description = () => {
  return (
    <div className='parent-container'>
      <Booking />
      <div className='img-container'>
        {/* <div className='animation-container'>
          <PhoneSketch />
        </div> */}
        <img src='src/assets/mockup.png' alt='cellphone' className='phone-img' />
      </div>
      <div className='description-container'>
        <div className='content-container'>
          <div className='row-container'>
            <div className='column-container'>
                <div className='image'>
                  <img src='src\assets\map-icon.png' alt='About Us' />
                </div>
                <div className='content-section'>
                    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatum blanditiis dolore! Eaque, dolor minima ex voluptate eius esse error?
                    </p>
                </div>
            </div>
          </div>
          <div className='row-container'>
            <div className='column-container'>
                <div className='image'>
                  <img src='src\assets\map-icon.png' alt='About Us' />
                </div>
                <div className='content-section'>
                    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatum blanditiis dolore! Eaque, dolor minima ex voluptate eius esse error?
                    </p>
                </div>
            </div>
          </div>
          <div className='row-container'>
            <div className='column-container'>
                <div className='image'>
                  <img src='src\assets\map-icon.png' alt='About Us' />
                </div>
                <div className='content-section'>
                    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatum blanditiis dolore! Eaque, dolor minima ex voluptate eius esse error?
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
