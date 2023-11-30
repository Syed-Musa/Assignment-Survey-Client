import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import { FaGoogle } from 'react-icons/fa';

const ExtraSignIn = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    };

    return (
        <div>
            <div className="divider"></div>
            <h2 className="text-2xl text-gray-700 font-bold my-5 text-center">Continue With</h2>
            <button onClick={handleGoogleSignIn} className='btn btn-outline bg-orange-500 text-white w-full text-[15px] font-bold my-2'>
            <FaGoogle className='text-xl text-white '></FaGoogle>Google Login
            </button>
        </div>
    );
};

export default ExtraSignIn;