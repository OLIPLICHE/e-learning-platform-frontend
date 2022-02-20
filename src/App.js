import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Sidebar from './components/navigation/Sidebar';
import HomePage from './pages/HomePage';
import AddCourse from './pages/AddCourse';
import CoursesHome from './components/courses/CoursesHome';
import MyReservations from './pages/MyReservations';
import MyCourses from './pages/MyCourses';
import DetailsPage from './pages/DetailsPage';
import Login from './pages/Login';
import Register from './pages/Register';
import { authenticateToken } from './redux/auth/authSlice';
import { getCourses } from './redux/courses/coursesSlice';
import { getCities, getReservations } from './redux/reservations/reservationsSlice';

const loggedRoutes = Object.entries({
  '/login': <Login />,
  '/sign_up': <Register />,
  '/courses/:course_id/details': <DetailsPage />,
  '/courses/new': <AddCourse />,
  '/courses': <CoursesHome />,
  '/myreservations': <MyReservations />,
});

const unLoggedRoutes = Object.entries({
  '/sign_up': <Register />,
  '/courses/:course_id/details': <DetailsPage />,
  '/courses': <CoursesHome />,
  '/mycourses': <MyCourses />,
});

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100vw;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const handleTokenAuthentication = (dispatch) => {
  const rcoursesJwt = JSON.parse(localStorage.getItem('rcourses_jwt'));
  const token = (rcoursesJwt) ? rcoursesJwt.token : null;

  if (token) {
    dispatch(authenticateToken(rcoursesJwt));
  }
};

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    handleTokenAuthentication(dispatch);
    dispatch(getCourses());
    dispatch(getReservations());
    dispatch(getCities());
  }, [isAuthenticated]);

  return (
    <Router>
      <AppContainer>
        <PageContainer>
          <Sidebar />
          <Routes>
            { isAuthenticated
              ? loggedRoutes.map((route) => (
                <Route key={uuidv4()} path={route[0]} element={route[1]} />
              ))
              : unLoggedRoutes.map((route) => (
                <Route key={uuidv4()} path={route[0]} element={route[1]} />
              ))}
            { isAuthenticated
              ? <Route exact path="/" element={<HomePage />} />
              : <Route path="/*" element={<Login />} /> }
          </Routes>
        </PageContainer>
      </AppContainer>
    </Router>
  );
};

export default App;
