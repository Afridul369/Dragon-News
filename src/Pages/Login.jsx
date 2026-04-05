import { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import toast from 'react-hot-toast';

const Login = () => {
  const {signIn,resetPass} = use(AuthContext)
  const [error,setError] = useState()
  const emailRef =  useRef()
  const navigate = useNavigate()
  const location = useLocation()
  // console.log(location)
  const handleLogin =(e)=>{
      e.preventDefault()
      const email = e.target.email.value
      const password = e.target.password.value
      // console.log(email,password)
      signIn(email,password)
      .then(result=>{
          const user = result.user
          // console.log(user)
          navigate(`${location.state ? location.state : '/'}`)
      })
      .catch(error=>{
        setError(error.message)
      })
    }
    // Reset Pass
    const handleResetPass =()=>{
      const email = emailRef.current.value
      // console.log(email)
      setError('')
      resetPass(email).then(()=>{
        toast.success('Password Reset Email Send')
      }).catch((error)=> {
        toast.error(error.message)
      })
    }
  return (
    <>
    <div className="py-20">
      <div className="flex justify-center ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-10 px-5">
          <h1 className="font-semibold text-3xl flex justify-center ">Login your account</h1>
          <span className="border-t border-gray-300 mt-8"></span>
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset space-y-1">
            <label className="label">Email</label>
            <input required type="email" ref={emailRef} name="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input required type="password"  name="password" className="input" placeholder="Password" />
            <div onClick={handleResetPass}>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4 bg-base-300 border-none">Login</button>
          </form>
          <p className="text-center mt-2">Dont’t Have An Account ? 
            <span className="text-secondary"><Link to={'/auth/register'}>Register</Link></span></p>
            {
              error && <p className="text-red-500">{error}</p>
            }
        </div>
      </div>
    </div>
    </div>
  </>
  );
};

export default Login;
