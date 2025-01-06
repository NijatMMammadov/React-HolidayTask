import React from 'react'
import AdminNav from '../../Components/Admin/AdminNav'
import AdminFooter from '../../Components/Admin/AdminFooter'
import { Outlet } from "react-router"

function AdminRoot() {
    return (
        <>
            <AdminNav></AdminNav>
                <Outlet/>
            <AdminFooter></AdminFooter>
        </>
    )
}

export default AdminRoot
