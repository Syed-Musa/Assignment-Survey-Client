
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {

    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            <div className="w-60 min-h-screen bg-teal-400">
                <ul className="menu p-5">
                    {
                    isAdmin ?
                        <>                
                            <li className="font-bold uppercase italic text-white bg-gray-700 rounded-lg"><NavLink to='/Dashboard/access'>Access Control</NavLink></li>
                            <li className="font-bold uppercase my-4 italic text-white bg-gray-700 rounded-lg"><NavLink to='/Dashboard/users'>All Users</NavLink></li>
                        </> :
                        <>
                            <li className="font-bold uppercase italic text-white"><NavLink>User Home</NavLink></li>
                            <li className="font-bold my-4 uppercase italic text-white"><NavLink to='/Dashboard/surveyCreation'>Survey Creation</NavLink></li>
                            
                        </>
                    }

                    <div className="divider"></div>
                    <li className="font-bold uppercase italic text-white bg-gray-700 rounded-lg"><NavLink to='/'>Home</NavLink></li>
                </ul>
            </div>

            
            <div className="w-full">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;