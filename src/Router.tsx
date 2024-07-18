import { Routes, Route} from 'react-router-dom'
import { Login } from './pages/Login/Login'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout'
import { RegisterPoint } from './pages/RegisterPoint/RegisterPoint'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>

      <Route path='/' element={<DefaultLayout />}>
        <Route path="/home" element={<Dashboard />}/>
        <Route path="/point/register" element={<RegisterPoint />}/>
      </Route>
    </Routes>
  )
}