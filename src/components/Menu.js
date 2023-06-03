import {Link, useLocation} from 'react-router-dom';

import {Nav, NavItem} from 'reactstrap';

export const Menu = () => {
  let location = useLocation();

  const links = [
    {title: 'MeDev', to: '/about'},
    {title: 'About', to: '/about'},
    {title: 'Projects', to: '/projects'},
    {title: 'Blog', to: '/blog'}
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
