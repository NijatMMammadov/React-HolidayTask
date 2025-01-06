import React from 'react'
import { Outlet } from "react-router"

import UserFooter from '../../Components/User/UserFooter'
import UserNavbar from '../../Components/User/UserNavbar'


function UserRoot() {
    return (
        <>
            <UserNavbar></UserNavbar>
                <Outlet />
            <UserFooter></UserFooter>
        </>
    )
}

export default UserRoot