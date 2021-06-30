import React from 'react'
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar'
import Project from './Project';
import { useHistory } from 'react-router-dom'
import projects from './projects.json'

function Projects() {

  
    // TODO: improve stylings on links


    let history = useHistory()
    let pathname = history.location.pathname

    function getProject(project){
        // TODO: make this a json 
        return <Project  title={project.title} language={project.language} description={project.description} id={project.id} source={project.source} alt={project.alt} thumbnail={project.thumbnail}></Project>

    }


    if(pathname === "/projects"){
 
        return (
            <div>
                <Navbar />
                <div style={{paddingTop:'5%'}} />
                <h1 class="projects-title">Projects</h1>
                    <div class="projects-container">
                        {projects.map((project) => (
                            getProject(project)
                        ))}
                    </div>
                    <div style={{paddingTop:'5%'}} />
                <Footer />
            </div>
        )
    } else {
        return (
            <div>

                <div className="projects-background">
                    <div className="projects-container">
                        {projects.map((project) => (
                            getProject(project)
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects
