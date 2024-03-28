import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const handleAreaClick = (event, href) => {
        event.preventDefault();
        // Navigate to the specified href
        window.location.href = href;
      };
      const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
      const handleMouseMove = (event) => {
        const { left, top } = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - left;
        const y = event.clientY - top;
        setCoordinates({ x, y });
      };
  return (
    <div className="content">
        <div className="content1">
           <div className="one">
           <h1>Bring home the best of furniture</h1>
            <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus incidunt cum inventore ut vel? Sapiente consectetur eos officia a, temporibus optio nihil. Cum ducimus impedit quam necessitatibus eum quos in.</h5>
           <button className='shop poppins-regular'>Shop Now <FontAwesomeIcon icon={faArrowRight} size="lg" style={{color: "#000000",}} /></button>
           </div>
            <div className="two">
                <img src="./chairREsize.png" useMap="#workmap"
          alt="Work Map"
          onClick={(event) => event.preventDefault()} onMouseMove={handleMouseMove}/>
          <map name="workmap">
          <area
            shape="rect"
            coords="277,164,174,68"
            alt="Computer"
            onClick={(event) => handleAreaClick(event, "/hot")}
          />
        </map>
        <p>X: {coordinates.x}, Y: {coordinates.y}</p>
            </div>
        </div>
        
        <div className="new">
            <h1>New Arrivals</h1>
            <div className="cart1">
                <div className="furn">
                    <img src="./sam-moghadam-khamseh-kvmdsTrGOBM-unsplash.jpg" alt="" />
                    <h3>wooden chair</h3>
                    <h3>12.34$</h3>
                    <button className="poppins-regular">Add to cart</button>
                </div>
                <div className="furn">
                    <img src="./deconovo-gVKmonDbotU-unsplash.jpg" alt="" />
                    <h3>bed</h3>
                    <h3>100.65$</h3>
                    <button className="poppins-regular">Add to cart</button>
                </div>
                <div className="furn">
                    <img src="./samantha-gades-XDaa1RPb6n8-unsplash.jpg" alt="" />
                    <h3>garden chair</h3>
                    <h3>10.34$</h3>
                    <button className="poppins-regular">Add to cart</button>
                </div>
                <div className="furn">
                    <img src="./alexandru-acea-Zg9R__O-8fM-unsplash.jpg" alt="" />
                    <h3>study-table</h3>
                    <h3>35.98$</h3>
                    <button className="poppins-regular">Add to cart</button>
                </div>
                <div className="furn">
                    <img src="./denys-striyeshyn-wJ7yGwz2-00-unsplash.jpg" alt="" />
                    <h3>wooden table-chair set</h3>
                    <h3>67.45$</h3>
                    <button className="poppins-regular"> Add to cart</button>
                </div>
            </div>
            <div className="cart1">
                <div className="furn">
                    <img src="./sam-moghadam-khamseh-kvmdsTrGOBM-unsplash.jpg" alt="" />
                    <h3>wooden chair</h3>
                    <h3>12.34$</h3>
                    <button className="poppins-regular">Add to cart</button>
                </div>
                <div className="furn">
                    <img src="./deconovo-gVKmonDbotU-unsplash.jpg" alt="" />
                    <h3>bed</h3>
                    <h3>100.65$</h3>
                    <button className="poppins-regular">Add to cart</button>
                </div>
                <div className="furn">
                    <img src="./samantha-gades-XDaa1RPb6n8-unsplash.jpg" alt="" />
                    <h3>garden chair</h3>
                    <h3>10.34$</h3>
                    <button className="poppins-regular">Add to cart</button>
                </div>
                <div className="furn">
                    <img src="./alexandru-acea-Zg9R__O-8fM-unsplash.jpg" alt="" />
                    <h3>study-table</h3>
                    <h3>35.98$</h3>
                    <button className="poppins-regular">Add to cart</button>
                </div>
                <div className="furn">
                    <img src="./denys-striyeshyn-wJ7yGwz2-00-unsplash.jpg" alt="" />
                    <h3>wooden table-chair set</h3>
                    <h3>67.45$</h3>
                    <button className="poppins-regular">Add to cart</button>
                </div>
            </div>
            <div className="review">
                <h1>Reviews from our top customers</h1>
                <div className="people">
                    <div className="person">
                        <img src="./Untitled design (1).png" alt="" />
                        <h3>Blair Maximoff</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil reiciendis, eos nemo quasi incidunt culpa ex veritatis ullam hic. Ab repellendus quisquam minima iure nobis? Tempore atque aspernatur ex!</p>

                    </div>
                    <div className="person">
                        <img src="./Untitled design (2).png" alt="" />
                        <h3>Harry Waldorf</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil reiciendis, eos nemo quasi incidunt culpa ex veritatis ullam hic. Ab repellendus quisquam minima iure nobis? Tempore atque aspernatur ex!</p>

                    </div>
                    <div className="person">
                        <img src="./Untitled design (3).png" alt="" />
                        <h3>Josh Bryant</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil reiciendis, eos nemo quasi incidunt culpa ex veritatis ullam hic. Ab repellendus quisquam minima iure nobis? Tempore atque aspernatur ex!</p>

                    </div>
                    <div className="person">
                        <img src="./saira.png" alt="" />
                        <h3>Saira Singh</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil reiciendis, eos nemo quasi incidunt culpa ex veritatis ullam hic. Ab repellendus quisquam minima iure nobis? Tempore atque aspernatur ex!</p>

                    </div>
                </div>
            </div>
            <div className="contact">
                <h2>Contact Us</h2>
                <div className="icons">
                    <div className="sub">
                    <FontAwesomeIcon icon={faPhone} size="2x" style={{color: "#000000",}} />
                    <p>+10-4561285562</p>
                    </div>
                <div className="sub">
                <FontAwesomeIcon icon={faInstagram} size="2x" style={{color: "#000000",}} />
                <p>@peppyfryLive</p>
                </div>
                <div className="sub">
                <FontAwesomeIcon icon={faTwitter} size="2x" style={{color: "#000000",}} />
                <p>@weATpeppy</p>
                </div>
                <div className="sub">
                <FontAwesomeIcon icon={faLinkedin} size="2x" style={{color: "#000000",}} />
                <p>peppy-034516</p>
                </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Home
