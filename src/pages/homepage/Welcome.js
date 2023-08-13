//import './Welcome.css'
        
 import React from 'react';
import ImageForWelcome from './ImageForWelcome';
import tree3 from './images/tree3.png';
import Chameleon from './images/Chameleon_Figma.png';
import tree1 from './images/tree1.png';
import styled from 'styled-components';
import ImageForWelcome2 from './ImageForWelcome2';

function Welcome() {
  return (
    <Wrapper>
      <div className='all'>
      <ImageForWelcome/>
     <div className='backgrounds'>
      <p className='wel'>Welcome to Chameleon</p>
      <div className='introduction'>
        <div className='article'>
          <h3 className='title'>Who is Chameleon?</h3>
          <p>
            Chameleon is a sophisticated no-code platform for product success, 
            empowering SaaS teams to build self-service user onboarding, feature adoption, 
            and feedback collection.
          </p>     
          <p>
            Using Chameleon you can show new users key functionalities, 
            highlight product changes, improve feature discoverability, 
            and reduce confusion and support requests. 
            Deploy NPS, CSAT, CES and custom surveys to users, 
            triggered at the right time and to the right audience. 
            Add self-serve help and user onboarding launchers to guide users without interrupting their workflow.
          </p>
        </div>
      </div>
      <div>
        <p className='text2'>
          Discover exciting information about how to save our planet
        </p> 
        <input className='input_for' type='text' id='email' placeholder='Please enter here'></input>
        <button className='button' type='submit'>I'm in</button>       
      </div>
      </div>

      {/* <div className='intro_right'>
        <img src={tree3} className='img_tree3'></img>
        <img src={Chameleon} className='Chameleon' alt='tree1'></img>
        <p className='right_text'>Striving to Create a Smarter World</p>
        <img src={tree1} className='img_tree1' alt='tree1'></img>
      </div> */}
      <ImageForWelcome2/>
    </div>
    </Wrapper>

  )}

  const Wrapper = styled.div`
  /* Welcome.css */
  .all{
    display:flex;
    background:grey;
    border-bottom:2px solid green;
  }
  .backgrounds {
    padding: 20px;
    background-color: ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  /* Add any other styles you want for the background images here */
  
  .wel {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color:black;
  }

  .introduction {
    margin-bottom: 20px;
  }

  .article {
    max-width: 800px;
    margin: auto;
    text-align: left;
  }

  .title {
    font-size: 20px;
    font-weight: bold;
  }

  /* Images */
  .img_tree2,
  .img_tree2_inverse {
    max-width: 100%;
    height: auto;
  }

  .subscribe {
    margin-bottom: 20px;
  }

  .text2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-top:30px;
  }

  .subscribe-form {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .input_for {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
    margin-top:10px;
    margin-bottom:20px;
  }

  .button {
    padding: 10px 20px;
    background-color: green;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .intro_right {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .img_tree3,
  .Chameleon,
  .img_tree1 {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  .right_text {
    font-size: 18px;
    font-weight: bold;
  }


/* Responsive styles for tablets */
@media screen and (max-width: 768px) {

}

/* Responsive styles for mobile devices */
@media screen and (max-width: 480px) {
  .responsive-component {
    /* Add styles for mobile devices here */
  }
}

`;
export default Welcome;