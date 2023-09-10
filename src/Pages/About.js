import './About.css'
import profile from '../img/profile.jpg'
function About() {
    return (
        <div class="head-container">
        <div class="w50">
            <h1  class="title">Hi,I am Sahil</h1>
        <p>Hello everyone, I'm sahil chauhan and here is my Portfolio i hope you like it.</p>
        </div>
        <div class="w50 align-right">
            <img src={profile} class="profile-img" alt=""/>
        </div>
    </div>
    )
}
export default About