import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { useState, useContext } from "react";
import { FaEyeSlash, FaEye } from 'react-icons/fa';

const SignUp = () => {
  const {createUser} = useContext(AuthContext);
  const [showPassword, setShowPassWord] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [success, setSuccess] = useState(null);

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

      createUser(email, password)
      .then(result => {
        console.log(result.user);
        setSuccess('Created message Successfully');
      })
      .catch(error =>{
        console.error(error);
        setErrorMessage(error.message)
      })
  }

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col">
            <div className="text-center">
              <h1 className="text-5xl font-bold">Sign Up</h1>
              
            </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

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
                <p className='text-center'><small>New Here? <Link to='/signIn' className='text-blue-500 font-bold'>Go to SignIn</Link></small></p>
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
