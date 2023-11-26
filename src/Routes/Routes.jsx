import { createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Homepage from "../Pages/Homepage/Homepage";
import Survey from "../Pages/Survey/Survey";
import SignUp from "../Pages/SignUpSignIn/SignUp";
import SignIn from "../Pages/SignUpSignIn/SignIn";
import SurveyDetails from "../Pages/SurveyDetails/SurveyDetails";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Homepage></Homepage>
        },
        {
            path: '/survey',
            element: <Survey></Survey>,
        },
        {
            path: '/survey/:id',
            element: <SurveyDetails></SurveyDetails>,
            loader: ({params})=> fetch(`http://localhost:5000/survey/${params.id}`)
        },
        {
            path: '/signIn',
            element: <SignIn></SignIn>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        }
      ]
    },

    {
        path: "/Dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
]);