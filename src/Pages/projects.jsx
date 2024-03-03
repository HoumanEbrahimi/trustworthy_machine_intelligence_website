import React, { useState } from 'react';
import './projects.css';
import projects from '../Data/projects.json';
import Footer from './Layout.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRss} from '@fortawesome/free-solid-svg-icons';
//<a href="https://discord.com/channels/1110690752658415668/1110694536579121273" target="_blank" class="btn btn-primary" style={{backgroundColor:"#2596be",fontFamily:"Times New Roman"}}>Full Project Proposal</a>


const Projects = () =>{
    return(
        <div>
	<div className="container">
	<br/><br/>
		<h1 className="font-main-projects" style={{color:"black"}}>Projects</h1>
    <hr style={{color:"grey"}}/>


		<br/><br/><br/>
		<div className="project-container ">

        {projects.map((project, index) => (

			           <div class="card " style={{width: "45rem", height:"50rem"}}>
					   <img class="card-top" src={project.imagePath} alt={project.name} style={{marginTop:"20px",width:"717.6px",height:"500.63px",objectFit: 'cover', width: '50%', height: '50%' }}/>
					   <div class="card-body">
					   <br></br>
	   
						   <h3 class="card-title"  style={{fontFamily:"50px",color:"black"}}>{project.name}</h3>
						   <p class="card-text">{project.description}</p>
						   <br></br>
						   <a href={project.website} type="button" class="btn btn-primary btn-sm" style={{ fontFamily: "Times New Roman", backgroundColor: "#2596be", position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>Learn More</a>

						</div>

					</div>

		
		        ))}

  </div>
  

</div>


<Footer/>
</div> 

    )


}


export default Projects;