import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLeft = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/enrolments',
      text: 'My Enrolments',
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
        </ul>
      </nav>
    </section>
  );
};

export default NavLeft;
