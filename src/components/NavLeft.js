import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadCurrentUser, logout } from '../redux/auth';

const NavLeft = () => {
  const isAuthenticated = useSelector(loadCurrentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout);
  };

  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/enrolments',
      text: 'My enrolments',
    },
    {
      id: 3,
      path: '/create_course',
      text: 'Create course',
    },
    {
      id: 4,
      path: '/course_details',
      text: 'course Details',
    },
  ];
  return (
    <section>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.id} className="nav-link">
              <NavLink to={link.path} exact="true">
                {link.text}
              </NavLink>
            </li>
          ))}

          {isAuthenticated && (
            <li>
              <a href="/" className="nav-link" onClick={handleLogout}>Log Out</a>
            </li>
          )}
        </ul>
      </nav>
    </section>
  );
};
export default NavLeft;
