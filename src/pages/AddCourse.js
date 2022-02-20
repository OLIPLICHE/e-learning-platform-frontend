import styled from 'styled-components';
import CourseForm from '../components/courses/CourseForm';
import { mobile, tablet } from '../responsive';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  max-width: 1320px;
  min-heigth: 100vh;
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
  font-size: 36px;
  font-weight: 600;
  font-family: 'Urbanist', 'Arial', cursive !important;
  color: black;
  ${mobile({
    'font-size': '26px',
  })};
  ${tablet({
    'font-size': '32px',
  })};
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const AddCourse = () => (
  <Container>
    <Wrapper>
      <Title>
        <p style={{ padding: '0 2.5rem', margin: 0 }}>
          Create a new courses
        </p>
      </Title>
    </Wrapper>
    <CourseForm />
  </Container>
);

export default AddCourse;
