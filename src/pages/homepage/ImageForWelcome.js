import React from 'react'
import tree2 from './images/tree3.png'
import Chameleon from './images/Chameleon_Figma.png';
import { styled } from 'styled-components';

function ImageForWelcome() {
  return (
    <Wrapper>
    <main> 
    <img src={tree2} className='img_tree2' alt='tree2'></img>
    {/* <img src={tree2} className='img_tree2_inverse' alt='tree2'></img> */}
    
</main>
</Wrapper>
  )
}
const Wrapper = styled.main`
img{
  width:30vw;
 margin-right:40px;

}
`

export default ImageForWelcome