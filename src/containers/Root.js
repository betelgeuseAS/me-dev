import {useEffect} from 'react';

import {Outlet, useLocation, useNavigate} from 'react-router-dom';

import {Container} from 'reactstrap';

import {Menu, Footer} from '../components';

export const Root = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/me-dev/') navigate('/me-dev/about');
  }, []);

  return (
    <Container>
      <Menu />

      <Outlet />

      <Footer />
    </Container>
  );
}
