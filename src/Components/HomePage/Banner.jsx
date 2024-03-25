// Banner.js
// import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';

const BannerContainer = styled.div`
  background-color: #f8f9fa;
  padding: 100px 0;
  text-align: center;
`;

const BannerText = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

const BannerImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Banner = () => {
  return (
    <BannerContainer>
      <Fade>
        <BannerText>Welcome to My Portfolio</BannerText>
        <BannerImage src="https://i.ibb.co/mNyFmMW/48377308-10212277271947891-981207286183624704-n.jpg" alt="Portfolio Banner" />
      </Fade>
    </BannerContainer>
  );
};

export default Banner;
