import React from 'react';
import styled from 'styled-components'; // Import styled-components library or use your preferred styling method
import Bottom_Logo from './images/Bottom_Logo.png';
import GooglePlay from './images/GooglePlay.png';
import AppStore from './images/AppStore.png';
import Facebook from './images/Facebook.jpg';
import Twitter from './images/Twitter.jpg';
import IG from './images/INS.jpg';

const Wrapper = styled.div`
  background-color: #f0f0f0;
  padding: 40px 20px;
`;

const BottomGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
`;

const LogoSection = styled.div`
  flex: 1 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const LogoImage = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const TextUnderLogo = styled.h5`
  font-size: 14px;
  color: #666;
`;

const DownloadSection = styled.div`
  flex: 0 0 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DownloadText = styled.h3`
  font-size: 18px;
  margin: 20px 0 5px 0;
`;

const DownloadIcon = styled.img`
  height: 40px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const SocialSection = styled.div`
  flex: 0 0 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FindUsText = styled.h3`
  font-size: 18px;
  margin: 20px 0 5px 0;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialIcon = styled.img`
  height: 30px;
  margin: 0 10px;
  cursor: pointer;
`;

const ContactSection = styled.div`
  flex: 1 0 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactText = styled.h1`
  margin: 5px 0;
`;

const ContactInfo = styled.h3`
  margin: 5px 0;
`;

const TextGroup = styled.div`
  display: flex;
  margin: 10px 0;
`;

const PrivacyText = styled.h3`
  margin: 0 10px;
`;

const CopyrightText = styled.h3`
  font-size: 14px;
  margin-top: 30px;
  text-align: center;
`;

function Bottom() {
  return (
    <Wrapper>
      <BottomGrid>
        <LogoSection>
          <div>
            <LogoImage src={Bottom_Logo} alt='Logo' />
            <TextUnderLogo>Striving to Create a Smarter World</TextUnderLogo>
          </div>
        </LogoSection>

        <DownloadSection>
          <DownloadText>Download our app here</DownloadText>
          <DownloadIcon src={GooglePlay} alt='GooglePlay Download icon' />
          <DownloadIcon src={AppStore} alt='AppStore Download icon' />
        </DownloadSection>

        <SocialSection>
          <FindUsText>Find us on</FindUsText>
          <SocialIcons>
            <SocialIcon src={Facebook} alt='Facebook icon' />
            <SocialIcon src={Twitter} alt='Twitter icon' />
            <SocialIcon src={IG} alt='Instagram icon' />
          </SocialIcons>
        </SocialSection>

        <ContactSection>
          <ContactText>Contact Us</ContactText>
          <ContactInfo>Tel: 03 5975 6586</ContactInfo>
          <ContactInfo>Email: customer.service@chameleon.com.au</ContactInfo>
          <TextGroup>
            <PrivacyText>Privacy Notice</PrivacyText>
            <PrivacyText>About Us</PrivacyText>
          </TextGroup>
          <CopyrightText>©2013 Copyright reserved by Chameleon</CopyrightText>
        </ContactSection>
      </BottomGrid>
    </Wrapper>
  );
}

export default Bottom;
