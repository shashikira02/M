import { Outlet } from 'react-router-dom'
import { CssBaseline } from "@mui/material";
import Footer from "./components/Footer/Footer";
import DownloadApp from "./components/Sections/DownloadApp/DownloadApp";

// import './App.css'

export default function App() {
  return (
    <>
      <CssBaseline />
      <Outlet />
      <DownloadApp />
      <Footer />
    </>
  )
}