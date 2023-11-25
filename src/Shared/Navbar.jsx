import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import {Link} from "react-router-dom";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
      logOut()
      .then(()=>{})
      .catch(error => console.log(error));
    }

    const navItems = <>
    <li className="font-bold uppercase italic"><Link to='/'>Home</Link></li>
    <li className="font-bold uppercase italic"><Link to='/survey'>Surveys</Link></li>
    <li className="font-bold uppercase italic"><Link to='/'>Survey Details</Link></li>
    <li className="font-bold uppercase italic"><Link to='/'>Pricing</Link></li>
    </>
    
  return (
    <div>
      <div className="navbar bg-orange-600 max-w-screen-xl text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <a className=" text-xl font-bold uppercase italic">SurveyPolling</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
        {
            user ? <>
            <span className="font-bold mr-2">{user?.displayName}</span>
            <img className="w-4 lg:w-10 rounded-full mr-2" src={user?.photoURL} />
            <button onClick={handleLogOut} className="font-bold uppercase p-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Log Out</button>
            </> : <>
            <li className="font-bold uppercase p-4 rounded-lg bg-gradient-to-r from-orange-500 to-orange-300 text-white"><Link to='signIn'>Login</Link></li>
            </>
        }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
