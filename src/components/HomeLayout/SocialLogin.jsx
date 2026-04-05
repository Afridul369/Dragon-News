import { use } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../../Provider/AuthProvider'
import toast from 'react-hot-toast'

const SocialLogin = () => {
  const {googleSignIn,googleGithub} = use(AuthContext)
  const handleGoogleSignIn=()=>{
      googleSignIn()
      .then(()=>{
        toast.success('Your Are Logged In Via Google..');
      })
      .catch(error=>{
        toast.error(error.message);
      })
  }
  const handleGithub=()=>{
      googleGithub()
      .then(()=>{
        toast.success('Your Are Logged In Via Github..');
      })
      .catch(error=>{
        toast.error(error.message);
      })
  }
  return (
    <div>
        <h1 className='font-bold'>Login With</h1>
        <button onClick={handleGoogleSignIn} className='btn btn-outline btn-secondary w-full mt-4'> <FcGoogle size={24}/>Login With Google</button>
        <button onClick={handleGithub} className='btn btn-outline btn-primary w-full mt-4'><FaGithub size={24}/> Login With Github</button>
      
    </div>
  )
}

export default SocialLogin
