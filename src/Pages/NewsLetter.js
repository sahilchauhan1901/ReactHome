import './Newsletter.css'
function NewsLetter(){
    return(
        <div className="container">
           <div className="newsletter-container">
           <h1>Join our digital marketing newsletter</h1>
           <p>Join this amazing newsletter so you do not miss any updates!!</p>
           <input type="text" placeholder="Enter Your Name"/>
           <input type="email" placeholder="Enter Your Email"/>
           <button className='newsletter-btn'>Join Now</button>
           </div>
        </div>
    )
}
export default NewsLetter