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
import Pamflet from './pages/dahsboard/Pamflet/index.jsx'
import InputCalonSantri from './pages/dahsboard/CalonSantri/InputCalonSantri/index.jsx'
import InputUstadUstadzah from './pages/dahsboard/UstadUstadzah/InputUstadUstadzah/index.jsx'
import InputBerita from './pages/dahsboard/Berita/InputBerita/index.jsx'
import { UseLoaderNews } from './contexts/useLoaderNews.js'
import { UseLoaderAuth } from './contexts/useLoaderAuth.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { UseLoaderUstad } from './contexts/useLoaderUstad.js'
import { UseLoaderStudent } from './contexts/useLoaderStudent.js'
import BeritaDetail from './pages/dahsboard/Berita/BeritaDetail/index.jsx'
import Success from './pages/Success.jsx'
import { UseLoaderAlumni } from './contexts/useLoaderAlumni.js'
import InputAlumni from './pages/dahsboard/Alumni/InputAlumni/index.jsx'
import { UseLoaderPamflet } from './contexts/useLoaderPamflet.js'
import InputPamflet from './pages/dahsboard/Pamflet/InputPamflet/index.jsx'


Modal.setAppElement('#root')
const router = createBrowserRouter([
  {
    path: "/",
    loader: () => {
      return UseLoaderNews.read();
    },
    element: <Home />,
  },
  {
    path: "/profile",

    element: <Profile />,
  },
  {
    path: "/psb",
    loader: async () => {

      // return pamflet 
      return await UseLoaderPamflet.read();

    },
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
    loader: async () => {

      // cek auth 
      const auth = await UseLoaderAuth.cek();

      if (!auth.success) return auth

      const news = await UseLoaderNews.read();


      return news;
    },
    element: <HomeAdmin />,
  },
  {
    path: "/admin/profile",
    loader: async () => {

      try {
        // 🔹 1. Cek Auth terlebih dahulu
        const auth = await UseLoaderAuth.cek();

        if (!auth.success) {
          return auth; // Jika gagal auth, langsung return
        }

        // 🔹 2. Ambil data ustad setelah auth valid
        const dataUstads = await UseLoaderUstad.read();
        const dataAlumni = await UseLoaderAlumni.read();

        // 🔹 3. Return gabungan datanya
        return {
          dataUstads,
          dataAlumni,
        };

      } catch (error) {
        console.log("Error di loader:", error);
        return {
          success: false,
          message: "Terjadi kesalahan saat memuat data"
        };
      }
    },
    element: <Profile />,
  },
  {
    path: "/admin/psb",
    loader: async () => {
      // cek auth 
      const auth = await UseLoaderAuth.cek();

      if (!auth.success) return auth

      // return pamflet 
      return await UseLoaderPamflet.read();

    },
    element: <Psb />,
  },
  {
    path: "/admin/faq",
    loader: async () => {
      // cek auth 
      const auth = await UseLoaderAuth.cek();

      if (!auth.success) return auth

    },
    element: <Faq />,
  },
  {
    path: "/admin/kemahadan",
    loader: async () => {
      // cek auth 
      const auth = await UseLoaderAuth.cek();

      if (!auth.success) return auth

    },
    element: <Kemahadan />,
  },
  {
    path: "/admin/formulir",
    loader: async () => {
      // cek auth 
      const auth = await UseLoaderAuth.cek();

      if (!auth.success) return auth

    },
    element: <Formulir />,
  },
  {
    path: "/admin/calon-santri",
    loader: async () => {
      // cek auth 
      const auth = await UseLoaderAuth.cek();

      if (!auth.success) return auth
      return await UseLoaderStudent.read();
    },
    element: <CalonSantri />,
  },
  {
    path: "/admin/calon-santri/add",
    loader: async () => {
      // cek auth 
      const auth = await UseLoaderAuth.cek();

      if (!auth.success) return auth

    },
    element: <InputCalonSantri />,
  },
  {
    path: "/admin/calon-santri/update/:id",
    loader: async ({ params }) => {
      // cek auth 
      const auth = await UseLoaderAuth.cek();

      if (!auth.success) return auth
      return await UseLoaderStudent.detail(params.id);
    },
    element: <InputCalonSantri />,
  },

  // ustad ustadzah
  {
    path: "/admin/ustad-ustadzah",
    loader: async () => {
      // cek auth 
      const auth = await UseLoaderAuth.cek();

      if (!auth.success) return auth
      return UseLoaderUstad.read();
    },
    element: <UstadUstadzah />,
  },
  {
    path: "/admin/ustad-ustadzah/add",
    loader: async () => {
      // cek auth 
      const auth = await UseLoaderAuth.cek();

      if (!auth.success) return auth
    },
    element: <InputUstadUstadzah />,
  },
  {
    path: "/admin/ustad-ustadzah/update/:id",
    loader: async ({ params }) => {
      // cek auth 
      const auth = await UseLoaderAuth.cek();

      if (!auth.success) return auth
      return await UseLoaderUstad.detail(params.id);
    },
    element: <InputUstadUstadzah />,
  },
  {
    path: "/admin/alumni",
    loader: async () => {
      // cek auth 
      const auth = await UseLoaderAuth.cek();

      if (!auth.success) return auth

      return UseLoaderAlumni.read();
    },
    element: <Alumni />,
  },
  {
    path: "/admin/alumni/add",
    loader: async () => {
      // cek auth 
      const auth = await UseLoaderAuth.cek();

      if (!auth.success) return auth
    },
    element: <InputAlumni />,
  },
  {
    path: "/admin/alumni/update/:id",
    loader: async ({ params }) => {
      // cek auth 
      const auth = await UseLoaderAuth.cek();

      if (!auth.success) return auth


      return await UseLoaderAlumni.detail(params.id);
    },
    element: <InputAlumni />,
  },
  {
    path: '/admin/berita',
    loader: async () => {
      // cek auth 
      const auth = await UseLoaderAuth.cek();

      if (!auth.success) return auth
      return UseLoaderNews.read();
    },
    element: <Berita />
  },
  {
    path: '/admin/berita/add',
    loader: async () => {
      // cek auth 
      const auth = await UseLoaderAuth.cek();

      if (!auth.success) return auth
    },
    element: <InputBerita />
  },
  {
    path: '/admin/berita/update/:id',
    loader: async ({ params }) => {
      // cek auth 
      const auth = await UseLoaderAuth.cek();

      if (!auth.success) return auth
      return await UseLoaderNews.detail(params.id);
    },
    element: <InputBerita />
  },


  // berita
  {
    path: '/berita-detail/:id',
    loader: async ({ params }) => {
      return await UseLoaderNews.detail(params.id);
    },
    element: <BeritaDetail />
  },

  {
    path: '/admin/pamflet',
    loader: async () => {
      // cek auth 
      const auth = await UseLoaderAuth.cek();

      if (!auth.success) return auth

      // return pamflet
      return await UseLoaderPamflet.read();
    },
    element: <Pamflet />
  },
  {
    path: '/admin/pamflet/add',
    loader: async () => {
      // cek auth 
      const auth = await UseLoaderAuth.cek();

      if (!auth.success) return auth

    },
    element: <InputPamflet />
  },
  {
    path: '/admin/pamflet/update/:id',

    loader: async ({ params }) => {
      // cek auth 
      const auth = await UseLoaderAuth.cek();

      if (!auth.success) return auth


      return await UseLoaderPamflet.detail(params.id);
    },
    element: <InputPamflet />
  },

  // success
  {
    path: '/success',
    element: <Success />
  }


]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
