import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { DCPage } from '../heroes/pages/DCPage'
import { MarverPage } from '../heroes/pages/MarverPage'

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/marvel' element={<MarverPage/>} />
                <Route path='/dc' element={<DCPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/' element={<Navigate to="/login" />} />
            </Routes>
        </>
    )
}
