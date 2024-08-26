import './App.css';
import {
    createBrowserRouter,
    Navigate,
    RouterProvider
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import PropTypes from 'prop-types';

// A wrapper component to handle protected routes
const PrivateRoute = ({ element }) => {
    const { currentUser } = useContext(AuthContext);

    return currentUser ? element : <Navigate to='/login' />;
};

const PublicRoute = ({ element }) => {
    const { currentUser } = useContext(AuthContext);
    return currentUser ? <Navigate to='/' /> : element;
};

// Define routes using createBrowserRouter
const router = createBrowserRouter([
    {
        path: '/login',
        element: <PublicRoute element={<Login />} />
    },
    {
        path: '/signup',
        element: <PublicRoute element={<Signup />} />
    },
    {
        path: '/',
        element: <PrivateRoute element={<Dashboard />} />
    },
    {
        path: '/profile',
        element: <PrivateRoute element={<Profile />} />
    }
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App;

PrivateRoute.propTypes = {
    element: PropTypes.element.isRequired
};
PublicRoute.propTypes = {
    element: PropTypes.element.isRequired
};
