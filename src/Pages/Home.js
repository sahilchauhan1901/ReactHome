import hero from '../img/hero.png'
import { Link } from 'react-router-dom'
import './Home.css'
function Home() {
    return (
        <div className='container'>
            <div className='hero'>
                <img src={hero} className='hero-img' />
                <div className='hero-content'>
                    <h1 className='hero-title'>Watching these young kids play football</h1>
                    {/* <p>We are here for you, we can help you with that</p> */}
                    {/* <button className='btn'>Know More</button> */}
                    <Link to='/newsletter' className='hero-btn'>Know More</Link>
                </div>
            </div>
            <div className='service-container'>
                <h1>We are here for you</h1>
                <p>We are here for you, we can help you with thatWe are here for you, we can help you with thatWe are here for you, we can help you with thatWe are here for you, we can help you with thatWe are here for you, we can help you with thatWe are here for you, we can help you with thatWe are here for you, we can help you with thatWe are here for you, we can help you with thatWe are here for you, we can help you with thatWe are here for you, we can help you with that</p>
                <p>We are here for you, we can help you with thatWe are here for you, we can help you with thatWe are here for you, we can help you with thatWe are here for you, we can help you with that</p>
                <p>We are here for you, we can help you with thatWe are here for you, we can help you with thatWe are here for you, we can help you with that</p>
                <Link to="/newsletter" className="Btn">My Newsletter</Link>
            </div>
        </div>
    )
}
export default Home