import {Link, useLocation} from 'react-router-dom';

import {Nav, NavItem} from 'reactstrap';

export const Menu = () => {
  let location = useLocation();

  const links = [
    {title: 'MeDev', to: '/me-dev/about'},
    {title: 'About', to: '/me-dev/about'},
    {title: 'Projects', to: '/me-dev/projects'},
    {title: 'Blog', to: '/me-dev/blog'}
  ];

  const isActive = (to) => location.pathname === to ? 'active' : '';

  return (
    <Nav style={{display: 'flex', alignItems: "center", marginTop: '15px', marginBottom: '25px'}}>
      {links.map((item, index) => (
        <NavItem key={index} className={`nav-link ${isActive(item.to)}`}>
          <Link to={item.to} className="hover-link">{item.title.toUpperCase()}</Link>
        </NavItem>
      ))}
    </Nav>
  );
}
