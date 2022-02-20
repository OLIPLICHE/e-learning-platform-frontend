import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Slider from '../Slider';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1320px;
  height: 100vh;
  color: black;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  font-weight: bold;
  text-shadow: 2px 2px #000;
  padding: 1rem;
`;

const SubTitle = styled.h2`
  font-size: 0.8em;
  text-align: center;
  letter-spacing: 1px;
  padding-bottom: 20px;
  font-weight: bold;
  color: gray;
  border-bottom: 2px dotted #D3D3D3;

`;

const HomePage = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Container>
      {
        isAuthenticated
          ? (
            <>
              <Title>NEW COURSES</Title>
              <SubTitle>Please select your course</SubTitle>
              <Slider />
            </>
          ) : (
            <>
              <Title>Welcome to our Elearning platform</Title>
              <SubTitle>Please sign in to explore more</SubTitle>
              <Slider />
            </>
          )
      }

    </Container>
  );
};

export default HomePage;
