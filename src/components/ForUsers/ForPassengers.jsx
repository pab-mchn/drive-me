import Card from "../Card/Card";
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import './ForUsers.css';


const ForPassengers = () => {
  return (
    <div className="cards-parent-container">
        <Navbar/>
        <div className="banner">
          <h2 className="title-banner">FOR<br/>PASSENGERS</h2>
        </div>
        <div className="cards-container">
          <div className="cards-column">
            <Card title={'Melde ich ann'} par={'asdasdasdsadadsd fg hfgh gf'} number={'01 |'}/>
            <Card title={'swana'} par={'asdasdasdsadadsd fgh fghfg fg hfgfgf hfhffgh fgh gfh'} number={'02 |'}/>
          </div>
          <div className="cards-column">
            <Card title={'swana'} par={'asdasdasdsadadsd dgdff h gh fhfg gf hfg hfg'} number={'03 |'}/>
            <Card title={'swana'} par={'lsadasdas asd asdasd  asd sad  asdasdas'} number={'04 |'}/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ForPassengers