import {React, useState} from 'react'
import Sidebar from '@/Components/Sidebar'

export default function DashboardLayout({children}){
    const [mountedAt] = useState(new Date().toLocaleTimeString());
    return(
        <div className="flex">
            <Sidebar/>
            <main className="flex-1">
                <header className="shadow p-4 bg-white">Topbar (mounted at: {mountedAt})</header>
                <section className="p-4">{children}</section>
            </main>
        </div>
    )
}