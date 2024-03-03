import React, { useState } from 'react';
import './newsletter.css';
import projects from '../Data/projects.json';
import Footer from './Layout.js';

import { SocialIcon } from 'react-social-icons'


const News = () =>{
    return(
        <div>
<section >
	<div className="container py-4">
	<br/><br/>
		<h1 className="newsletter_main_font" style={{color:"black",fontSize:"50px",fontFamily:"Times New Roman"}}>Newsletter</h1>
        <hr style={{color:"grey"}}/>

        <h3 className="font-par">The TMI newsletter includes short discussions of academic papers, news stories, and conferences 
            to prompt discussion and keep members up-to-date on salient issues in trustworthy ML.</h3>
        <h3 className="font-par">Have you found an interesting news article, research paper, or video on AI that you think others should
             know about? If you would like to submit a topic for discussion or write for the newsletter, please 
             message #newsletter on Discord!</h3>
		<br/><br/><br/>
        <article className="postcard dark" style={{background:"white"}}>

<div class="card-body"> 
<h1 className="postcard__title " style={{color:"#2596be"}}>05: TMI Events and Leadership Applications</h1>
    <div className="postcard__preview-txt" style={{color:"black"}}>
        <ul >
            <li>
            ChatGPT Seminar
            </li>
            <li>
            23/24 President Candidacy
            </li>
            <li>
            Deep Learning with Differential Privacy
            </li>
            <li>
            Sentiment Analysis of Tweets
            </li>
            <li>
            News in Ethical AI
            </li>
        </ul>
    </div>
    
    <a href="https://discord.com/channels/1110690752658415668/1110694536579121273" class="btn btn-primary" target="_blank" style={{fontFamily:"Times New Roman",backgroundColor: "#cc5500",borderColor:"#cc5500"}}>Read Issue 5</a>

</div>

</article>
<article className="postcard dark" style={{background:"white"}}>

<div class="card-body"> 
<h1 className="postcard__title " style={{color:"#2596be"}}>04: TMI Events and Leadership Applications</h1>
    <div className="postcard__preview-txt" style={{color:"black"}}>
        <ul >
            <li>
            EPAI Speaker Event: Professor Ahmed on Ethical Pluralism and Decolonizing AI
            </li>
            <li>
            Volunteer for the Hart House Show Debate
            </li>
            <li>
            New EPAI Podcast: Modern Data
            </li>
            <li>
            News in Ethical AI
            </li>
        </ul>
    </div>
    
    <button onClick={() => window.open("https://discord.com/channels/1110690752658415668/1110694536579121273", "_blank")} className="btn btn-primary"
  style={{ fontFamily: "Times New Roman", backgroundColor: "#cc5500", outline: "none" ,borderColor:"#cc5500"}}>
  Read Issue 4
</button>
</div>

</article>
<article className="postcard dark" style={{background:"white"}}>

<div class="card-body"> 
<h1 className="postcard__title " style={{color:"#2596be"}}>03: TMI Events and Leadership Applications</h1>
    <div className="postcard__preview-txt" style={{color:"black"}}>
        <ul >
            <li>
            Volunteer for the Hart House Show Debate
            </li>
            <li>
            Merch
            </li>
            <li>
            Positions open for Hackathon Committee
            </li>
            <li>
            EPAI Paper- Reading Group
            </li>
        </ul>
    </div>
    
    <a href="https://discord.com/channels/1110690752658415668/1110694536579121273" class="btn btn-primary" target="_blank" style={{fontFamily:"Times New Roman",backgroundColor: "#cc5500",borderColor:"#cc5500"}}>Read Issue 3</a>

</div>

</article>

<article className="postcard dark" style={{background:"white"}}>

<div class="card-body"> 
<h1 className="postcard__title " style={{color:"#2596be"}}>02: TMI Events and Leadership Applications</h1>
    <div className="postcard__preview-txt" style={{color:"black"}}>
        <ul >
            <li>
            [Workshop] Reading Race: AI Recognizes Patient's Racial Identity in Medical Images
            </li>
            <li>
            2021 Info Session Recording
            </li>
            <li>
            How to get involved
            </li>
            <li>
            Leadership Opportunities
            </li>
        </ul>
    </div>
    
    <a href="https://discord.com/channels/1110690752658415668/1110694536579121273" class="btn btn-primary" target="_blank" style={{fontFamily:"Times New Roman",backgroundColor: "#cc5500",borderColor:"#cc5500"}}>Read Issue 2</a>

</div>

</article>
		<article className="postcard dark" style={{background:"white"}}>

			<div class="card-body"> 
				
				<h1 className="postcard__title " style={{color:"#2596be"}} >01: Welcome to TMI!</h1>
				<div className="postcard__preview-txt" style={{color:"black"}}>
                    <ul >
                        <li>
                           Upcoming events
                        </li>
                        <li>
                        How to join TMI
                        </li>
                        <li>
                        Trustworthy AI resources
                        </li>
                        <li>
                        Meme of the Week
                        </li>
                    </ul>
                </div>
                <a href="https://discord.com/channels/1110690752658415668/1110694536579121273" class="btn btn-primary" target="_blank" style={{fontFamily:"Times New Roman",backgroundColor: "#cc5500",borderColor:"#cc5500"}}>Read Issue 1</a>

			</div>

		</article>

  </div>
  <SocialIcon     style={{ width: '70px', height: '70px' }}
 url="https://docs.google.com/forms/d/e/1FAIpQLSfiWqGIGpyTQeIFczuXJApwEECqR6Wjyyarg5OcCmtbfuCibQ/viewform" target="_blank"/>                   

  <div className="font-inline">Subscribe to TMI's newsletter</div>
  <br>
  </br>  <br>
  </br>
</section>


<Footer/>
</div>

    )


}


export default News;