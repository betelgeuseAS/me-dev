import {useEffect} from 'react';

import {Outlet, useLocation, useNavigate} from 'react-router-dom';

import {Container} from 'reactstrap';

import {Menu, Footer} from '../components';

export const Root = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const navigatePaths = ['/me-dev/', '/me-dev']

    if (navigatePaths.includes(location.pathname))
      navigate('/me-dev/about');
  }, [location.pathname, navigate]);

  return (
    <Container>
      <Menu />

      <Outlet />

      <Footer />
    </Container>
  );
}
