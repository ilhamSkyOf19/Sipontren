import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// css
import './index.css'
// pages
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import Psb from './pages/Psb.jsx'
import Faq from './pages/Faq.jsx'
import Kemahadan from './pages/Kemahadan.jsx'
import Formulir from './pages/Formulir.jsx'
import Login from './pages/Login.jsx'
import UpdateCalonSantri from './pages/dahsboard/CalonSantri/updateCalonSantri/index.jsx'
// module
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeAdmin from './pages/dahsboard/HomeAdmin.jsx'
import CalonSantri from './pages/dahsboard/CalonSantri/index.jsx'
import Modal from 'react-modal'


Modal.setAppElement('#root')
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/psb",
    element: <Psb />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/kemahadan",
    element: <Kemahadan />,
  },
  {
    path: "/formulir",
    element: <Formulir />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <HomeAdmin />,
  },
  {
    path: "/admin/profile",
    element: <Profile />,
  },
  {
    path: "/admin/psb",
    element: <Psb />,
  },
  {
    path: "/admin/faq",
    element: <Faq />,
  },
  {
    path: "/admin/kemahadan",
    element: <Kemahadan />,
  },
  {
    path: "/admin/formulir",
    element: <Formulir />,
  },
  {
    path: "/admin/calon-santri",
    element: <CalonSantri />,
  },
  {
    path: "/admin/calon-santri/update/:id",
    element: <UpdateCalonSantri />,
  },


]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
