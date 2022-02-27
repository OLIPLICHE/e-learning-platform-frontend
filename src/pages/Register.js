import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authenticateUser, SIGNUP_ENDPOINT } from '../redux/auth/authSlice';
import { mobile } from '../responsive';
import store from '../redux/configureStore';

const Container = styled.div`
  display: flex;
  width: 100vw;
  max-width: 1320px;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 50%;
  text-align: center;
  background: white;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  ${mobile({ width: '60vw' })};

`;

const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 300px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  font-weight: 300;
  ${mobile({ minWidth: '75%' })};
`;

const Aggrement = styled.p`
  font-size: 12px;
  font-weight: 200;
  margin: 20px 0;
  text-align: center;
`;

const Button = styled.button`
  padding: 12px 22px;
  width: 40%;
  background-color: #97BF11;
  cursor: pointer;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  &:hover {
    background-color: #97BF11;
    border: 2px solid #f6a40e;
  }
`;

const Register = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const authenticate = (e) => {
    e.preventDefault();

    store.dispatch(authenticateUser({ form: e.target, url: SIGNUP_ENDPOINT }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated]);

  return (
    <Container>
      <Wrapper>
        <Title>SIGN UP HERE</Title>
        <Form onSubmit={(e) => authenticate(e)}>
          <Input type="text" name="username" placeholder="Username" defaultValue="" />
          <Input type="email" name="email" placeholder="E-mail" defaultValue="" />
          <Input type="password" name="password" placeholder="Password" defaultValue="" />
          <Aggrement>
            By clicking
            {' '}
            <b>Register</b>
            {' '}
            STOP
            {' '}
            to stop.
          </Aggrement>
          <Button type="submit">Sign Up</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
