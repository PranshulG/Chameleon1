import { styled } from 'styled-components';
import './Comments.css'
import Avatar1 from './images/avatar1.png'
import Avatar2 from './images/avatar2.png'
import Avatar3 from './images/avatar3.png'

import React from 'react';
 // Import styled-components library or use your preferred styling method

 const CommentRectangle = styled.div`
 border: 1px solid #ccc;
 border-radius: 8px;
 padding: 16px;
 max-width: 600px;
 width: 90%;
 margin: 20px auto;
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

 @media (max-width: 768px) {
   width: 100%;
 }
`;

const TextComment = styled.p`
 font-size: 18px;
 font-weight: bold;
 margin-bottom: 10px;
`;

const Temp = styled.div`
 display: flex;
 align-items: center;
 margin: 10px 0;

 img {
   width: 40px;
   height: 40px;
   border-radius: 50%;
   margin-right: 10px;
 }

 p {
   font-size: 16px;
   line-height: 1.4;
 }
`;

function Comments() {
  return (
        <CommentRectangle>
          <TextComment>Testimony</TextComment>
          <Temp>
            <img src={Avatar1} className='Photo_size' alt='avatar1' />
            <p>I like it.</p>
          </Temp>

          <Temp>
            <img src={Avatar2} className='Photo_size' alt='avatar2' />
            <p>It is very good.</p>
          </Temp>

          <Temp>
            <img src={Avatar3} className='Photo_size' alt='avatar3' />
            <p>This is useful.</p>
          </Temp>
        </CommentRectangle>
  );
}

export default Comments;
