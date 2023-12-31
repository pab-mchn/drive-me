import "./Booking.css";

const Booking = () => {
  return (
    <div className='booking-container'>
      <div className='booking-content'>
        <div className='title-section'>
          <h2>Book your DriveMe in just a few seconds!</h2>
        </div>
        <div className='text-section'>
          <p>
            Share rides, save time! Say goodbye to traffic and travel hassles. Book your Drive-me in seconds and enjoy
            cost-effective and eco-friendly journeys with fellow drivers and passengers. Join our carpooling community
            today!
          </p>
        </div>
        <div className='download-content'>
          <div className='title-section'>
            <h2>Download Now</h2>
          </div>
          <div className='text-section'>
            <p>
              Revolutionize your travel experience. Download our app now and start enjoying seamless, efficient
              journeys.
            </p>
          </div>
          <div className='button-container'>
            <a
              href='https://play.google.com/store/apps'
              target='_blank'
              rel='noopener noreferrer'
              className='google-play-button fa-app-store'>
              Google Play
            </a>
            <a
              href='https://www.apple.com/app-store/'
              target='_blank'
              rel='noopener noreferrer'
              className='apple-store-button fa-app-store'>
              Apple Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
