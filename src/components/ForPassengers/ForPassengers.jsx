import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import './ForPassengers.css';


const ForPassengers = () => {
  return (
    <div className="cards-parent-container">
        <Navbar/>
        <div className="banner">
          <h2 className="title-banner">FOR<br/>PASSENGERS</h2>
        </div>
        <div className="cards-container">
          <div className="cards-column">
            <div className="card-row">
              <div className="card-number">
                <p>01</p>
              </div>
              <div className="card-content">
                <h2>asdad</h2>
                <p>asdasdadsfsdf</p>
              </div>
            </div>
            <div className="card-row">
              <div className="card-number">
                <p>01</p>
              </div>
              <div className="card-content">
                <h2>asdad</h2>
                <p>asdasdadsfsdf</p>
              </div>
            </div>
          </div>
          <div className="cards-column">
            <div className="card-row">
              <div className="card-number">
                <p>01</p>
              </div>
              <div className="card-content">
                <h2>asdad</h2>
                <p>asdasdadsfsdf</p>
              </div>
            </div>
            <div className="card-row">
              <div className="card-number">
                <p>01</p>
              </div>
              <div className="card-content">
                <h2>asdad</h2>
                <p>asdasdadsfsdf</p>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ForPassengers