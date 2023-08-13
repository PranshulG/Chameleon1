import React from 'react'
import Chameleon from './images/Chameleon_Figma.png';
import { styled } from 'styled-components';

function ImageForWelcome2() {
  return (
    <Wrapper>
    <main> 
    <img src={Chameleon} className='Chameleon' alt='tree1'></img>
    {/* <img src={tree2} className='img_tree2_inverse' alt='tree2'></img> */}
</main>
</Wrapper>
  )
}
const Wrapper = styled.main`
 img{
 width:35vw;
 margin-top:30px;
 }
`

export default ImageForWelcome2