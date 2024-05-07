import { createBrowserRouter } from "react-router-dom";
import {LoginForm} from '../LoginForm/LoginForm.jsx';
import {SignupForm} from '../SignupForm/SignupForm';
import {Homepage} from '../Homepage/Homepage';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


  

const routes = [
    {
        path:"/",
        element: <>
                <Homepage/>
                </>
    },
    {
        path:"/LoginForm",
        element: <>
                <LoginForm/>
                </>
    },
    {
        path:"/SignupFormnp",
        element: <>
                <SignupForm/>
                </>
    }
];

export const router = createBrowserRouter(routes);