import React, { useState } from 'react'
import { useRef } from 'react'
import {  Form, Card, Button, Alert } from 'react-bootstrap'
import { Link} from 'react-router-dom'
import { useAuth } from './AuthContext'


export const ForgotPassword = () => {
    const emailRef = useRef()

    const {resetPassword} = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    

    const handleSubmit = async (e) =>{
        e.preventDefault()
try {
    setMessage('')
    setError('')
    setLoading(true)
   await resetPassword(emailRef.current.value)
   setMessage('set your inbox for further instructions')

} catch (error) {
    setError('failed to reset password')
    console.log(error)
}

setLoading(false)
 }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Password Reset</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    {message && <Alert variant='success'>{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required />
                        </Form.Group>
                       
                        <Button disabled={loading} type='submit' className='w-100' >Reset Password</Button>
                    </Form>
                    <div className='w-100 text-center mt-3'>

        <Link to='/login'>Log in</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Need an account? <Link to='/signup'>Sign up</Link> 
            </div>
        </>
    )
}