import { styled } from 'styled-components';
//import './Video.css'
import TV from './images/TV.png'

function Video() {
    return(
        <Wrapper>
     <div className='VideoContainer'>
      <div className='Video_rectangle'>
        <a href='#' className='TEXT_CHANGE'>
          <img src={TV} className='TV' alt='TV logo' />
          <p className='Text'>Introduction to Chameleon</p>
        </a>
      </div>

      <div className='Video_rectangle'>
        <a href='#' className='TEXT_CHANGE'>
          <img src={TV} className='TV' alt='TV logo' />
          <p className='Text'>What we do</p>
        </a>
      </div>

      <div className='Video_rectangle'>
        <a href='#' className='TEXT_CHANGE'>
          <img src={TV} className='TV' alt='TV logo' />
          <p className='Text'>What next for us</p>
        </a>
      </div>
    </div>
    </Wrapper>
    );
}

const Wrapper = styled.div`
/* Video.css */

/* Video.css */

.VideoContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.Video_rectangle {
  width: 300px;
  padding: 20px;
  margin: 10px;
  border: 1px solid #ccc;
  text-align: center;
  background-color: #f9f9f9;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.Video_rectangle:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.TV {
  max-width: 100%;
  height: auto;
}

.Text {
  font-size: 16px;
  margin-top: 10px;
  color: #333;
  font-weight: bold;
}

/* Media Query for responsiveness */
@media screen and (max-width: 768px) {
  .Video_rectangle {
    width: 45%;
  }
}


`
export default Video;