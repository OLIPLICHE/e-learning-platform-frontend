/* eslint-disable react/jsx-wrap-multilines */
import {
  HashRouter as Router, Route, Routes,
} from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Auth, { AuthRoute } from './components/Auth';
import CourseDetails from './components/CourseDetails';
import CreateCourse from './pages/CreateCourse';
import MyEnrolment from './pages/MyEnrolments';
import AddEnrolment from './pages/AddEnrolment';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route
        path="/"
        element={
          <Auth>
            <Home />
          </Auth>
        }
      />
      <Route
        path="/users/login"
        element={
          <AuthRoute>
            <LogIn />
          </AuthRoute>
        }
      />
      <Route
        path="/users/signup"
        element={
          <AuthRoute>
            <SignUp />
          </AuthRoute>
        }
      />
      <Route
        path="/course_details/:id"
        element={
          <Auth>
            <CourseDetails />
          </Auth>
        }
      />
      <Route
        path="/create_course"
        element={
          <Auth>
            <CreateCourse />
          </Auth>
        }
      />
      <Route
        path="/enrolments"
        element={
          <Auth>
            <MyEnrolment />
          </Auth>
        }
      />

      <Route
        path="/add_enrolment"
        element={(<AddEnrolment />)}
      />
    </Routes>
  </Router>
);

export default App;
