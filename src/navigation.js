import AddCourse from './pages/AddCourse';
import CoursesHome from './components/courses/CoursesHome';
import MyReservations from './pages/MyReservations';
import DetailsPage from './pages/DetailsPage';

const links = [
  {
    id: 1,
    element: <CoursesHome />,
    path: '/courses',
  },
  {
    id: 2,
    element: <DetailsPage />,
    path: '/:course_id/details',
  },
  {
    id: 3,
    element: <MyReservations />,
    path: '/myreservations',
  },
  {
    id: 4,
    element: <AddCourse />,
    path: '/courses/new',
  },
];

export default links;
