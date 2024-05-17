import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {routes} from '../routes';

const Navbar: React.FC = () => {

    return (
        <Router>
            <nav>
                <ul>
                    {routes.map((route, index) => (
                        <li key={index}>
                            <Link to={route.path}>{route.path}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={<route.component/>}/>
                ))}
            </Routes>
        </Router>
    );
};

export default Navbar;
