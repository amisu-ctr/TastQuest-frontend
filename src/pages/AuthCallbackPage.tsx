import {useAuth0} from '@auth0/auth0-react'
import { useEffect, useRef } from 'react';
import { useCreateMyUser } from '../api/MyUserApi';
import { useNavigate } from 'react-router-dom';

const AuthCallbackPage = () => {
    const navigate = useNavigate()
    const {user} = useAuth0();
    const {createUser} = useCreateMyUser();

    // Stores a state value for whenever a state changes it does not
    // trigger a the component to rerender
    const hasCreatedUser = useRef(false)

    //explained at 2:48
    useEffect(() => {
        if(user?.sub && user?.email && !hasCreatedUser.current) {
            createUser({auth0Id: user.sub, email: user.email})
            hasCreatedUser.current = true
          }
          navigate("/")
    }, [createUser, navigate, user])

    return <>Loading...</>
}

export default AuthCallbackPage