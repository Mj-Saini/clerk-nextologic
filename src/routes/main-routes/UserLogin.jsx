
import { Route, Routes } from 'react-router-dom'
import SignInUser from '../../components/SignInUser'
import SignUpUser from '../../components/common/SignUpUser'
import VerifyEmailUser from '../../components/VerifyEmailUser'
import DashBoard from '../../pages/main-web/DashBoard'
import DashboardTable from '../../components/DashBoardTable'
import LandingPage from '../../pages/main-web/LandingPage'

const UserLogin = () => {
  return (
    <div>
        <Routes>

          <Route path='/' element={<LandingPage />} />
        <Route path="/dashboard" element={<DashBoard />}>
          <Route index element={<DashboardTable />} />
        </Route>
        <Route path="/sign-in" element={<SignInUser />} />
        <Route path="/sign-up" element={<SignUpUser />} >
        <Route path="verify-email-address" element={<VerifyEmailUser />} />
        </Route>
        </Routes>
    </div>
  )
}

export default UserLogin