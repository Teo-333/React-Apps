import React from 'react';
import styled from 'styled-components';
import HomeImage from '../../../assets/images/Home-Image.svg';
import Star from '../../../assets/images/Thrustpilot-Star.svg';

const App = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Blue = styled.span`
  color: #35B8BE;
`;

const Container = styled.div`
  display: flex;
`;

const Content = styled.div` 
  justify-content: center; 
  display: flex;
  flex-direction: column;
  column-gap: 100px;
`;

const Title = styled.h1`
    font-family: Inter;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
`;

const ContentText = styled.p`
  color: #546285;
  font-family: Inter;
  font-size: 0.325rem;
  font-style: normal;
  font-weight: 400;
  max-width: 70%;
`;

const PrimaryButton = styled.button`
  background-color: #35B8BE;
  color: white;
  border: none;
  padding: 15px 15px;
  border-radius: 4px;
  cursor: pointer;
  width: 4rem;
  max-width: 18%;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

const TrustpilotContainer = styled.div`
  padding-top:0.4rem;
  padding-bottom:0.2rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  /* Add any other styles as needed */
`;

const TrustpilotLogo = styled.img`
 
`;

const TrustpilotText = styled.div`
  
`;

const ContentRating = styled.div`
  
`;

const HomeImg = styled.img`
  width: 70%;
`;

function Home() {

  return (
    <App>
      <Container>
        <Content>
          <Title>Beatiful food & takeaway,<Blue>delivered</Blue>  to your door</Title>
          <ContentText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</ContentText>
          <PrimaryButton>Place an order</PrimaryButton>
          <TrustpilotContainer>
            <TrustpilotLogo alt='Trustpilot-logo' src={Star}></TrustpilotLogo>
            <TrustpilotText>Trustpilot</TrustpilotText>
          </TrustpilotContainer>
          <ContentRating><Blue>4.8 out of 5</Blue> based on 2000+ reviews</ContentRating>
        </Content>
        <HomeImg alt='food-img' src={HomeImage}></HomeImg>
      </Container>
    </App>
  );
}

export default Home;    