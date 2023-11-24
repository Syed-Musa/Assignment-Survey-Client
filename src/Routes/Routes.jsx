import { createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Homepage from "../Pages/Homepage/Homepage";
import Survey from "../Pages/Survey/Survey";

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
            element: <Survey></Survey>
        },
      ]
    }
]);