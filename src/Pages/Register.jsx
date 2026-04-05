import { use, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../Provider/AuthProvider'

const Register = () => {

    const {signUp,setUser,updateUser} = use(AuthContext)
    const [error , setError] =  useState('')
    const [success , setSuccess] =  useState(false)
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        const name = e.target.name.value
        if (name.length < 5) {
            setError('Your Name Must Be More Than 5 Character')
            return
        }else{
          setError('')
        }      
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        const terms = e.target.terms.checked
        if (terms === false) {
            setError('Please Accept Ours Terms & Conditions First')
            return
        }
        // validate password
        const charactertest = /^.{8,}$/
        const numbertest = /(?=.*[0-9])/
        const lowercasetest = /(?=.*[a-z])/
        const uppercasetest = /(?=.*[A-Z])/

        if (charactertest.test(password) === false) {
            setError('Password Must be more than 8 Characters')
            return
        }
        if (numbertest.test(password) === false) {
            setError('Password Must be include Number')
            return
        }
        if (lowercasetest.test(password) === false) {
            setError('Password Must be include Lowercase letter')
            return
        }
        if (uppercasetest.test(password) === false) {
            setError('Password Must be include Uppercase letter')
            return
        }
        // console.log(name, photo, email, password)
        signUp(email,password)
        .then(result=>{
            const user = result.user
            // console.log(user)
            updateUser({displayName:name, photoURL:photo}).then(()=>{
              setSuccess(true)
              setUser({...user,displayName:name, photoURL:photo})
              navigate('/')
            }).catch(error=>{setError(error)})
        })
        .catch((error)=>{
            // const errorCode = error.code;
            setError(error.message);
        })
    }
  return (
    <div className="py-20">
      <div className="flex justify-center ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-10 px-5">
          <h1 className="font-semibold text-3xl flex justify-center ">Register your account</h1>
          <span className="border-t border-gray-300 mt-8"></span>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="fieldset space-y-1">
            <label className="label">Your Name</label>
            <input type="text" name='name' className="input" placeholder="Name" />          
            <label className="label">Photo URL</label>
            <input type="text" name='photo' className="input" placeholder="Photo URL" />
            <label className="label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" />
            <label className="label">
                <input type="checkbox" name='terms' className="checkbox" />
                Accept Term & Conditions
            </label>
            {
              error && <p className='text-red-500'>{error}</p>
            }
            {
              success && <p className='text-green-500'>You Are successfully Registered</p>
            }
            <button type='submit' className="btn btn-neutral mt-4 bg-base-300 border-none">Register</button>
          </form>
          <p className="text-center mt-2">Dont’t Have An Account ? 
            <span className="text-secondary"><Link to={'/auth/login'}>Login</Link></span></p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Register
