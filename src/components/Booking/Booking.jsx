import './Booking.css';

const Booking = () => {
  return (
    <div className='booking-container'>
      <div className='booking-content'>
        <div className='title-section'>
          <h2>Book your Drive-me in just a few seconds!</h2>
        </div>
        <div className='text-section'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum in ex atque officia animi aut maiores accusantium mollitia quidem, maxime assumenda repudiandae. Eum atque dolor earum error blanditiis itaque praesentium.
          </p>
        </div>
        <div className='title-section'>
          <h2>Download now</h2>
        </div>
        <div className='text-section'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem expedita in fuga nihil, aliquid iure delectus recusandae libero sint.
          </p>
        </div>
        <div className='button-container'>
          <a href='https://play.google.com/store/apps' target='_blank' rel='noopener noreferrer'>
            <button className='google-play-button'>
              <i className='fab fa-google-play'></i> Google Play
            </button>
          </a>
          <a href='https://www.apple.com/app-store/' target='_blank' rel='noopener noreferrer'>
            <button className='apple-store-button'>
              <i className='fab fa-app-store'></i> Apple Store
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Booking;
