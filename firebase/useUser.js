import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { initFirebase } from '../firebase/initFirebase'
import { getAuth } from "firebase/auth";
import {
    removeUserCookie,
    setUserCookie,
    getUserFromCookie,
} from '../firebase/userCookies'
import { mapUserData } from '../firebase/mapUserData'

initFirebase()

const UseUser = () => {
    const [user, setUser] = useState()
    const router = useRouter()
    const auth = getAuth()

    const logout = async () => {
        try {
            await auth.signOut();
            removeUserCookie();
            router.push("/login");
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        // Firebase updates the id token every hour, this
        // makes sure the react state and the cookie are
        // both kept up to date
        const cancelAuthListener = auth.onIdTokenChanged((user) => {
            if (user) {
                const userData = mapUserData(user)
                setUserCookie(userData)
                setUser(userData)
            } else {
                removeUserCookie()
                setUser()
            }
        })

        const userFromCookie = getUserFromCookie()

        if (!userFromCookie) {
            router.push('/')
            return
        }
        setUser(userFromCookie)

        return () => {
            cancelAuthListener()
        }
    }, [])

    return { user, logout }
}

export default UseUser;