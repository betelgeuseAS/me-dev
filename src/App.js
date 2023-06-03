import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Root, NotFoundPage, ErrorPage, AboutPage, ProjectsPage, BlogPage} from './containers';

import './App.sass';

const router = createBrowserRouter([{
  path: "/",
  element: <Root />,
  errorElement: <ErrorPage />,
  children: [{
    path: "/about",
    element: <AboutPage />,
  }, {
    path: "/projects",
    element: <ProjectsPage />,
  }, {
    path: "/blog",
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
