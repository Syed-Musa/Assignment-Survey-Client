import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import ExtraSignIn from "./ExtraSignIn";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const SignIn = () => {
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassWord] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [success, setSuccess] = useState(null);

  const from = location.state?.from?.pathname || '/'
  console.log('state in the location', location.state);

  const handleSignIn = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setErrorMessage(null);
      setSuccess(null);
      if(password.length > 6){
        setErrorMessage('Password should have at least 6 character');
        return;
      }else if(!/[A-Z]/.test(password)){
        setErrorMessage('Password should have at least one uppercase');
        return;
      }

      signIn(email, password)
      .then(result =>{
        const loggedInUser = result.user;
        console.log(loggedInUser);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from, {replace: true});
        const user = {email};
        setSuccess('Created message Successfully');
  
        axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
        .then(res => {
          if(res.data.success){
            navigate(location?.state ? location.state : '/');
          }
        })
      })

      .catch(error =>{
        console.error(error)
        setErrorMessage(error.message);
      });
  }

  return (
    <div>
      <Helmet>
        <title>SURVEYPOLLING | SIGN IN</title>
      </Helmet>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold uppercase italic text-orange-600">Sign In</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="password"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <span className="absolute text-2xl top-[170px] right-10" onClick={()=>setShowPassWord(!showPassword)}>
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
                  <button className="btn btn-primary">Login</button>
                </div>
                <p className='text-center'><small>New Here? <Link to='/signup' className='text-blue-500 font-bold'>Create an account</Link></small></p>
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

export default SignIn;
