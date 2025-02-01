import React from 'react'

import EBOOKIFY from '../assets/ebookify.png'
import WEATHER from '../assets/weatherui.png'
import NETFLIX from '../assets/netflixui.png'
import './cssforcomponents/Projects.css'

const Projects = () => {
  return (
    
         <div className="projects">
          <h1>My Projects</h1>
          <div className="services-container">
            <div className="services-format">
             
              <div className='img-div'>
                <img src={NETFLIX} alt="" />
              </div>
              <h2>Netflix Clone-UI</h2>
              <p>I created a Netflix clone UI using HTML and CSS. Through this project, I gained a strong understanding of CSS, focusing on layout design and styling.</p>
              <div className='project-card-btn'>



                <a target="_blank" href="https://net-flix-clonev1.netlify.app/"> <button className='live-btn'> Live Now</button>  </a>
                <a target="_blank" href="https://github.com/Nikhilkrishnapk/Netflix-clone.git" ><button className='git-btn'>Github Link </button> </a>
              </div>
            </div>
            <div className="services-format">
             
              <div className='img-div'>
                <img src={EBOOKIFY} alt="" />
              </div>
              <h2>Library Management System</h2>
              <p>I developed a Library Management System with a responsive design. This project includes CRUD operations.</p>
              <div className='project-card-btn'>


                <a target="_blank" href="https://e-bookify.netlify.app/"> <button className='live-btn'> Live Now</button>  </a>
                <a target="_blank" href="https://github.com/Nikhilkrishnapk/eBookify-using-REACT.git" ><button className='git-btn'>Github Link </button> </a>
              </div>
            </div>
            <div className="services-format">
             
              <div className='img-div'>
                <img src={WEATHER} alt="" />
              </div>
              <h2>Weather App</h2>
              <p>I built a Weather App that fetches real-time data using an API and dynamically displays images based on the current weather conditions.</p>
              <div className='project-card-btn'>
               <a target="_blank" href="https://leafy-blancmange-19b7bf.netlify.app/"> <button className='live-btn'> Live Now</button>  </a>
                 <a target="_blank" href="https://github.com/Nikhilkrishnapk/Weather-app-using-REACT.git" ><button className='git-btn'>Github Link </button> </a>
              </div>
            </div>
          </div>
         
         </div>
    
  )
}

export default Projects