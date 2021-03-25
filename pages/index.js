import React from 'react';
import MainContainer from '../components/MainContainer'
import Image from 'next/image'
import { CenterFocusStrong } from '@material-ui/icons';


const index = () => {
    return (
        <>
       <MainContainer keywords={'main page'}>
      
       <div style={{ position:'relative',margin:'0 50% 0 50%',borderRadius:'60%',overflow:'hidden',
       backgroundColor:'GrayText', width: "200px", height: "200px"}}>

    
       <Image 
        src="/samer1.jpg"
        alt="Picture of the author"
        layout="fill" />

</div>
       
       <section className="section">

       <div className="qualifications">
			<h2>Cover Letter</h2><br/><br/>
			<p>
            I would like to introduce myself as a candidate for the Front End Developer position within your company<br/>
 and be an excellent addition to your organization. In addition to my knowledge base, <br/>
 I actively seek out new technologies and stay up-to-date on industry trends and advancement.<br/>
I was able to develop my skills in the field of web development Especially a libraries of react.js and redux Next.js.<br/>
I like this field and I know with the help of those libraries I can't create good websites, so it is my target <br/>
to be a very good specialty Front-End developer with React JS.<br/>
Tech skills: React, Redux,Next, HTML5/CSS5, SCSS,Material-ui, responsive and multi device <br/>
 layouts, BEM, Javascript (ES6+), Webpack, Babel, ESLint, REST API, Figma, Github, Trello,Elma<br/><br/>
I can be reached anytime via my cell phone,+380730674311 or by email at samerukr@gmail.com.<br/>
you can visit my Repository in GitHub and see all my Rep:<br/>
https://github.com/samerlagha?tab=repositories<br/>
Thank you for your time and consideration. I look forward to speaking with you about this opportunity. <br/>
Best regards,<br/>
Samer Lagha<br/>



			</p>
		</div>
           </section>
           </MainContainer> 
           <style jsx>{`
           
           .images{
            border-radius: 50%;
            width: 200px;
            height: 200px;
        }
           
           `
           }

           </style>
        </>
        
    );
};

export default index;