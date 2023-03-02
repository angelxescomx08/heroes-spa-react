
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth'
import { MarverPage, DCPage } from '../heroes'
import { Navbar } from '../ui'

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/marvel' element={<MarverPage />} />
                <Route path='/dc' element={<DCPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/' element={<Navigate to="/login" />} />
            </Routes>
        </>
    )
}
