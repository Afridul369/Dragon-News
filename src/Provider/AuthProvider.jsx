import { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
  import app from '../firebase/firebase.init';

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // console.log(user)
    const signUp = (email,password)=>{
      setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email,password)=>{
      setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
      return signOut(auth)
    }
    const updateUser = (updatedObject)=>{
      return updateProfile(auth.currentUser,updatedObject)
    }
    useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser)
          setLoading(false)
      })
      return ()=> {
        unSubscribe()
      }
    },[])

    const authdata = {
        user,
        setUser,
        signUp,
        signIn,
        logOut,
        loading,
        setLoading,
        updateUser
    }
  return <AuthContext value={authdata}>
    {children}
  </AuthContext>

}

export default AuthProvider
