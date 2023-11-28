import { Link } from "react-router-dom";
import Not from "../assets/404-NotFound.gif";

const ErrorPage = () => {
    return (
        <div>
            <div className="mx-auto my-10 w-[800px]">
            <img src={Not} alt="" />
            </div>
            <div className="ml-80">
                <Link to='/'><button className="btn bg-orange-500 text-white font-bold uppercase italic">Go Back</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;