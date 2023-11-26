
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-60 min-h-screen bg-teal-400">
                <ul className="menu p-5">
                    <>
                        <li className="font-bold uppercase italic text-white"><NavLink>User Home</NavLink></li>
                        <li className="font-bold my-4 uppercase italic text-white"><NavLink>Survey Creation</NavLink></li>
                    </>

                    <div className="divider"></div>
                    <li className="font-bold uppercase italic text-white bg-gray-700 rounded-lg"><NavLink to='/'>Home</NavLink></li>
                </ul>
            </div>

            
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;