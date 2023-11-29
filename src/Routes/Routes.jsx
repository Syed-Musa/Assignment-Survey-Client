import { createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Homepage from "../Pages/Homepage/Homepage";
import Survey from "../Pages/Survey/Survey";
import SignUp from "../Pages/SignUpSignIn/SignUp";
import SignIn from "../Pages/SignUpSignIn/SignIn";
import SurveyDetails from "../Pages/SurveyDetails/SurveyDetails";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../DashBoardPage/AllUsers";
import SurveyCreation from "../DashBoardPage/SurveyCreation";
import UserHome from "../DashBoardPage/UserHome";
import ErrorPage from "../ErrorPage/ErrorPage";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AdminRoute from "./AdminRoute";
import ManageSurvey from "../DashBoardPage/ManageSurvey";
import UpdateVoted from "../DashBoardPage/UpdateVoted";
import Pricing from "../Pages/Pricing/Pricing";
import AdminHome from "../DashBoardPage/AdminHome";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
            path: '/pricing',
            element: <Pricing></Pricing>
        },
        {
            path: '/contactUs',
            element: <ContactUs></ContactUs>
        },
        {
            path: '/aboutUs',
            element: <AboutUs></AboutUs>
        },
        {
            path: '/login',
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
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'userhome',
                element: <UserHome></UserHome>
            },

            {
                path: 'adminhome',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'users',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'surveyCreation',
                element: <SurveyCreation></SurveyCreation>
            },
            {
                path: 'manageSurvey',
                element:<ManageSurvey></ManageSurvey>
            },
            {
                path: 'updateVoted/:id',
                element: <UpdateVoted></UpdateVoted>,
                loader: ({params}) => fetch(`http://localhost:5000/survey/${params.id}`)
            }
        ]
    }
]);