import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { useState, useContext } from "react";
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ExtraSignIn from "./ExtraSignIn";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {createUser} = useContext(AuthContext);
  const { register, reset, formState: {errors} } = useForm();
  const [showPassword, setShowPassWord] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    setErrorMessage(null);
      setSuccess(null);
      if(password.length > 6){
        setErrorMessage('Password should have at least 6 character');
        return;
      }else if(!/[A-Z]/.test(password)){
        setErrorMessage('Password should have at least one uppercase');
        return;
      }

      createUser( email, password)
      .then(result => {
        console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName
        }
        console.log(userInfo)
        axiosPublic.post('/users', userInfo)
          .then(res =>{
            console.log(res.data);
            navigate('/');
        })
        setSuccess('Created message Successfully');
        })
      
      .catch(error =>{
        console.error(error);
        setErrorMessage(error.message)
      })
      reset()
  }

  return (
    <div>
      <Helmet>
        <title>SURVEYPOLLING | SIGN UP</title>
      </Helmet>
      <div className="hero bg-orange-300">
        <div className="hero-content flex-col">
            <div className="text-center">
              <h1 className="text-5xl font-bold uppercase italic text-orange-600">Sign Up</h1>
              
            </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-orange-300 to-orange-200">
            <form onSubmit={handleSignUp} className="card-body">
                <div className="form-control w-80">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register('name', {required: true})}
                    name="name"
                    placeholder="name"
                    className="input input-bordered w-full"
                    required
                  />
                  {errors.name && <span className="text-red-600 font-bold">Name is required</span>}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register('photoURL', {required: true})}
                    placeholder="photoURL"
                    className="input input-bordered"
                    required
                  />
                  {errors.photoURL && <span className="text-red-600 font-bold">photoURL is required</span>}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register('email', {required: true})}
                    name="email"
                    placeholder="email"
                    className="input input-bordered w-full"
                    required
                  />
                  {errors.email && <span className="text-red-600 font-bold">Email is required</span>}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register('password', {required: true})}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full"
                    required
                  />
                  {errors.password?.type === 'required' && <p className="text-red-600 font-bold">Password is required</p>}
                  </div>
                  <span className="absolute text-2xl top-[260px] right-10" onClick={()=>setShowPassWord(!showPassword)}>
                    {
                      showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                    }
                  </span>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <button className="btn bg-orange-500 text-white italic uppercase">SignUp</button>
                </div>
                <p className='text-center'><small>New Here? <Link to='/login' className='text-blue-500 font-bold'>Go to SignIn</Link></small></p>
                <ExtraSignIn></ExtraSignIn>
            </form>
            {
              errorMessage && <p className="text-red-600 italic font-bold mb-10 text-center">{errorMessage}</p>
            }
            {
              success && <p className="text-green-600 italic font-bold mb-10 text-center">{success}</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
