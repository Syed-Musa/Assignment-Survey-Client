
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {

    const [isAdmin] = useAdmin();
    console.log(isAdmin)

    return (
        <div>
            <Helmet>
                <title>SURVEYPOLLING | DASHBOARD</title>
            </Helmet>
            <div className="flex">
            <div className="w-60 min-h-screen bg-teal-400">
                <ul className="menu p-5">
                    {
                    isAdmin ?
                        <>                
                            <li className="font-bold bg-gradient-to-r from-teal-500 to-blue-300 uppercase italic mb-4 text-white rounded-lg"><NavLink to='/Dashboard/adminhome'>Admin Home</NavLink></li>
                            <li className="font-bold bg-gradient-to-r from-teal-500 to-blue-300 uppercase italic text-white rounded-lg"><NavLink to='/Dashboard/access'>Access Control</NavLink></li>
                            <li className="font-bold bg-gradient-to-r from-teal-500 to-blue-300 rounded-lg my-4 uppercase italic text-white"><NavLink to='/Dashboard/surveyCreation'>Survey Creation</NavLink></li>
                            <li className="font-bold bg-gradient-to-r from-teal-500 to-blue-300 rounded-lg uppercase italic text-white"><NavLink to='/Dashboard/manageSurvey'>Manage Survey</NavLink></li>
                            <li className="font-bold bg-gradient-to-r from-teal-500 to-blue-300 uppercase italic my-4 text-white rounded-lg"><NavLink to='/Dashboard/users'>All Users</NavLink></li>
                        </> :
                        <>
                            <li className="font-bold bg-gradient-to-r from-teal-500 to-blue-300 rounded-lg uppercase italic text-white"><NavLink to='/Dashboard/userhome'>User Home</NavLink></li>
                            
                            
                        </>
                    }

                    <div className="divider"></div>
                    <li className="font-bold uppercase italic text-white bg-gradient-to-r from-teal-500 to-blue-300 rounded-lg"><NavLink to='/'>Home</NavLink></li>
                </ul>
            </div>

            
            <div className="w-full">
                <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;