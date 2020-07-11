import React, { useContext, useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import styles from '../Experience/Cards.module.css'
import cx from 'classnames'
import {Container} from 'react-bootstrap';

const Experience = () => {

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (

    <div className = {styles.container}>
        <Container>
      
            <Grid container spacing= {10} justify="center">
                
            
                          
                        
                <Grid item component = {Card} xs={20} md={0} className={cx(styles.card, styles.languages)}>

                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        <img src="https://cdn4.iconfinder.com/data/icons/mayssam/512/development-256.png" alt="Programming" height="80" width="80"></img>
                            <h2 class="languages">
                            Languages I speak
                               </h2></Typography>
                               

                              
                               <div className="row">
                              <div className="column">
                               <img src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-html-markup-develop-layout-language-128.png" alt="Programming" className="html" height="50" width="50" ></img><h5>HTML</h5></div>

                              <div className="column"> <img src="https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-256.png" alt="Programming" height="50" width="50"className="css"></img><h5>CSS</h5></div>
                              <div className="column">
                               <img src="https://cdn2.iconfinder.com/data/icons/nodejs-1/256/nodejs-256.png" alt="Programming" className="javascript" height="50" width="50"></img><h5>JavaScript</h5></div>

                               
                               <div className="column">
                               <img src="https://cdn0.iconfinder.com/data/icons/flat-round-system/512/java-128.png" alt="Programming" className="java" height="50" width="50"></img><h5>JAVA</h5></div>
                               <div className="column">
                               <img src="https://cdn4.iconfinder.com/data/icons/logos-3/504/my_sql-256.png" className="sql" height="50" width="50"></img><h5>SQL</h5></div>
                               <div className="column">
                               <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-256.png" className="python" height="50" width="50" ></img><h5>Python</h5></div>

</div>


                               
                        

  
               </CardContent>
                </Grid>


                
                <Grid item component = {Card} xs={20} md={0} className={cx(styles.card, styles.tools)}>

                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        <img src="https://cdn0.iconfinder.com/data/icons/web-development-79/32/development_pencil_pen-128.png" alt="Tools" height="80" width="80"></img>
                          <h2 class="tools" >
                          Tools I use
                                </h2>
                              
                        </Typography>
                        <div className="row">
                        <div className="column">

                        <img src="https://cdn0.iconfinder.com/data/icons/social-media-2091/100/social-13-128.png" height="50" width="50" ></img><h5>Photoshop</h5></div>
                        <div className="column">

                               <img src="https://cdn4.iconfinder.com/data/icons/bloomies-webdesign-tools/25/Figma_square-256.png" alt="figma" height="50" width="50" ></img><h5>Figma</h5></div>
                               <div className="column">

                               <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/3_Xd_Adobe_logo_logos-256.png" alt="adobe xd" height="50" width="40"></img><h5>Adobe Xd</h5></div>
                               <div className="column">

                               <img src="https://cdn4.iconfinder.com/data/icons/macaron-1/48/gimp-128.png" alt="Programming" height="50" width="50"></img><h5>Gimp</h5></div>
                               <div className="column">

                               <img src="https://cdn.icon-icons.com/icons2/1381/PNG/512/intellij_93550.png" alt="Programming" height="50" width="40"></img><h5>Intellij</h5></div>
                               <div className="column">

                               <img src="https://cdn0.iconfinder.com/data/icons/social-glyph/30/windows-visual-studio-240.png" height="50" width="40"></img><h5>    ..VS code</h5></div></div>
                                                       <div className="row">

                               <div className="column">

                               <img src="https://cdn4.iconfinder.com/data/icons/macaron-1/48/atom-128.png" height="50" width="50"></img><h5>Atom</h5></div>
                               <div className="column">

                               <img src="https://cdn.icon-icons.com/icons2/2157/PNG/512/github_git_hub_logo_icon_132878.png" height="50" width="50"></img><h5>GitHub</h5></div>
                               <div className="column">

                               <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_netlify_icon_130354.png" height="50" width="50"></img><h5>netlify</h5></div>
                               <div className="column">

                               <img src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-128.png" alt="Programming" height="50" width="50"></img><h5>React</h5></div>
                               <div className="column">

                               <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_gatsby_icon_130583.png" height="50" width="50"></img><h5>Gatspy</h5></div>

                               </div>


                    </CardContent>
                    
                </Grid>

            </Grid>
            </Container>
            
        </div>
  );
};

export default Experience;
