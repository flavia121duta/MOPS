import './app.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Homepage from './pages/Homepage/Homepage';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '*',
    element: <p>404</p>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
