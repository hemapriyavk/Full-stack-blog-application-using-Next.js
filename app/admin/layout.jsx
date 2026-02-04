import { ToastContainer } from "react-toastify";
import Image from "next/image";
import { assets } from "@/Assets/assets";
import Sidebar from "@/Components/AdminComponents/Sidebar";
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
  return (
    <>
      <div className="flex bg-slate-100">
        <ToastContainer theme="dark" />
        <Sidebar />
        <div className="flex flex-col w-full">
            <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-slate-200">
                <h3 className="font-medium"> Admin Panel</h3>
                <Image src={assets?.profile_icon} width={40} alt="profile-icon" />
            </div>
            {children}
        </div>
      </div>
    </>
  );
}
