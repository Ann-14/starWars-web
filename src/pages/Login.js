
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
   
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        try {
            setLoading(true)
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/HomePage')
        } catch (error) {
            setError('failed to login')
            console.log(error.message)

        }
        setLoading(false)
    }
    return (
        <>
            <div className="max-w-lg mx-auto my-20 border  p-8 rounded-xl shadow shadow-slate-300 text-slate-200">
                <h1 className="text-4xl font-medium">Login</h1>
                <p className="text-slate-200 mt-2">Hi, Welcome back 👋</p>
                {error &&
                    <>
                        <div>
                            <div className="max-w-xs bg-red-500 text-sm text-black rounded-md shadow-lg  mb-3 ml-3" role="alert">
                                <div className="flex p-4">
                                    {error}

                                    <div className="ml-auto">
                                        <button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-md text-white/[.5] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-800 focus:ring-red-500 transition-all text-sm dark:focus:ring-offset-red-500 dark:focus:ring-red-700">
                                            <span className="sr-only">Close</span>
                                            <svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }
                <div className="my-5">
                    <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg  text-slate-200 hover:border-yellow-500 hover:shadow transition duration-150">
                        <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6 text-slate-200" alt="" /> <span>Login with Google</span>
                    </button>
                </div>
                <form action="" className="my-10" onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-5">
                        <label htmlFor="email">
                            <p className="font-medium  pb-2 text-slate-200">Email address</p>
                            <input id="email" name="email" type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow text-black" placeholder="Enter email address" onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label htmlFor="password">
                            <p className="font-medium  text-slate-200 pb-2">Password</p>
                            <input id="password" name="password" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow text-black" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        <div className="flex flex-row justify-between">
                            <div>
                                <label htmlFor="remember" className="">
                                    <input type="checkbox" id="remember" className="w-4 h-4 border-slate-200 focus:bg-indigo-600 mr-2" />
                                    Remember me
                                </label>
                            </div>
                            <div>
                                <Link to='/forgot-password' className='hover:underline'>Forgot password?</Link>
                            </div>
                        </div>
                        <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center" disabled={loading} type='submit'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            <span>Login</span>
                        </button>

                        <p className="text-center">  Need an account? <Link to='/signup' className='underline'>Sign up</Link></p>
                    </div>
                </form>
            </div>

        </>
    )
}