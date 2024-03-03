import './mainPage.css'
import Footer from './Layout.js'
const Main = () =>{
    return(
        <div>
        <div >      
            <br></br>
        <h1  style={{color:"#2596be",fontSize:"50px",fontFamily:"Times New Roman"}}> UofT Trustworthy Machine Intelligence Team</h1>
        <br></br>
        <img style={{borderRadius:"0.4rem"}} className="responsive-image"
            src="https://github.com/HoumanEbrahimi/Lol/blob/main/tmi_banner.png?raw=true"
            alt=""
            width="1400" 
            />    
     
            <br></br>
            <div className="font-custom"> 
            <p style={{fontFamily:"Times New Roman"}}> The Trustworthy Machine Intelligence Team (TMI) is committed to educating and 
            taking action on ethical concerns within artificial intelligence and data science. Bias in decision systems, 
            data privacy and surveillance, as well as manipulation of behaviour, are just some of the  ethical concerns 
            that need to be addressed to avoid AI causing detrimental effects to individuals and society. Our mission
            is to make  the ethics  in AI more accessible through educational workshops and hands-on projects. Our club 
            is committed to building a supportive community of students passionate about ethical principles in AI.</p>
            </div>

            <br></br>
            <strong className="bold"> We welcome all students from all backgrounds of knowledge and experience </strong>

         </div>

            <br></br><br></br> <br></br>

        <Footer> </Footer>
        </div>
    )
   
}

export default Main;