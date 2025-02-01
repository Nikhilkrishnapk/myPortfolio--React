import React from 'react'
import './cssforcomponents/Skills.css'
import JS from '../assets/js.png'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import REACT from '../assets/react.png'
import REDUX from '../assets/redux.png'
import TAILWIND from '../assets/tailwind.png'
import MONGODB from '../assets/mongodb.png'
import NODE from '../assets/node.png'
import GIT from '../assets/git.png'
import ANGULAR from '../assets/angular.png'

const Skills = () => {
  return (
<div className='skill'>
  <h1>Skills</h1>
      <div className='skills'>
        <img  src={JS} alt="" />
        <img  src={HTML} alt="" />
        <img  src={CSS} alt="" />
        <img  src={REACT} alt="" />
        <img  src={REDUX} alt="" />
        <img  src={TAILWIND} alt="" />
        <img  src={MONGODB} alt="" />
        <img  src={NODE} alt="" />
        <img  src={GIT} alt="" />
        <img  src={ANGULAR} alt="" />
      </div>
      
</div>
  )
}

export default Skills