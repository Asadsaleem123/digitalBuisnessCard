import React from "react"
export default function MainContent(){
    return (
        <div >
            <div className="main-container">
            <div className="my-services">
            <h1>Asad Saleem</h1>
            <h4>Frontend Developer</h4>
            <h5>Asad Saleem website</h5>
            <div className="btn-container">
            <button className="btn-one">Email</button>
            <button className="btn-two">linkden</button>
            </div>
            </div>
           
            <div className="intro-container">
                <div className="about">
                <h3>About</h3>
               <p>I am a frontend developer with
                 a particular interest in making 
                 things simple and automating daily tasks. 
                 I try to keep up with security and best practices,
                  and am always looking for new things to learn.</p>
                </div>
              
                  <div className="intrests">
                  <h3>Intrests</h3>
                  <p>Food expert. Music scholar. Reader. 
                    Internet fanatic. Bacon buff. Entrepreneur. 
                    Travel geek. Pop culture ninja. Coffee fanatic.</p>

                  </div>
                  
            </div>
           
        </div>
    
            </div>
           
    )
}