
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/common/Sidebar';

const DashBoard = () => {
  
  return (
    <>
         <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full flex">
     
       <div className='w-1/5'>
       <Sidebar/>
       </div>
        {/* Main Content */}
        <div className="w-4/5 px-6">
        <Outlet/>
        </div>
      </div>
    </div>
    </>
  )
}

export default DashBoard