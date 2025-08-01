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
// module
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeAdmin from './pages/dahsboard/HomeAdmin.jsx'
import CalonSantri from './pages/dahsboard/CalonSantri/index.jsx'
import Modal from 'react-modal'
import UstadUstadzah from './pages/dahsboard/UstadUstadzah'
import Alumni from './pages/dahsboard/Alumni/index.jsx'
import Berita from './pages/dahsboard/Berita/index.jsx'
import InputCalonSantri from './pages/dahsboard/CalonSantri/InputCalonSantri/index.jsx'
import InputUstadUstadzah from './pages/dahsboard/UstadUstadzah/InputUstadUstadzah/index.jsx'


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
    path: "/admin/calon-santri/add",
    element: <InputCalonSantri />,
  },
  {
    path: "/admin/calon-santri/update/:id",
    element: <InputCalonSantri />,
  },
  // ustad ustadzah
  {
    path: "/admin/ustad-ustadzah",
    element: <UstadUstadzah />,
  },
  {
    path: "/admin/ustad-ustadzah/add",
    element: <InputUstadUstadzah />,
  },
  {
    path: "/admin/ustad-ustadzah/update/:id",
    element: <InputUstadUstadzah />,
  },
  {
    path: "/admin/alumni",
    element: <Alumni />,
  },
  {
    path: '/admin/berita',
    element: <Berita />
  }


]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
