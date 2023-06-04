import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Root, NotFoundPage, ErrorPage, AboutPage, ProjectsPage, BlogPage} from './containers';

import './App.sass';

const router = createBrowserRouter([{
  path: "/me-dev",
  element: <Root />,
  errorElement: <ErrorPage />,
  children: [{
    path: "/me-dev/about",
    element: <AboutPage />,
  }, {
    path: "/me-dev/projects",
    element: <ProjectsPage />,
  }, {
    path: "/me-dev/blog",
    element: <BlogPage />,
  }, {
    path: "*",
    element: <NotFoundPage />
  }],
}]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
