import React from 'react';
import {useAuth} from "../../context/AuthContext";
import {Bell, User, Menu} from 'lucide-react'


const Header = ({ toggleSidebar}) => {
    const{user} = useAuth();
  return (
    <header className="sticky top-0 z-40 w-full h-16 bg-white/95 backdrop-blur-xl border-b border-emerald-100 shadow-sm">
     <div className="flex items-center justify-between h-full px-4 md:px-6">

     {/* Mobile  Menu Button */}
     <button
     onClick={toggleSidebar}
    className="inline-flex lg:hidden items-center justify-center w-10 h-10 ..."
     aria-label="Toggle sidebar"
     >
        <Menu size={23} />
        </button>

        <div className="hidden md:block"></div>

        <div className="flex items-center gap-2 md:gap-3">
            <button className="relative inline-flex items-center justify-center w-10 h-10 text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-all duration-200 group">
                <Bell size={20} strokeWidth={2} className="group-hover:scale-110 transition-transform duration-200" />

                <span className="absolute top-2 right-2 w-2 h-2 bg-emerald-500 rounded-full ring-2 ring-white"></span>
                </button>

                {/*USER PROFILE */}
                <div className="flex items-center gap-2 md:gap-3 pl-2 md:pl-3 border-l border-slate-200">
                    <div className="flex items-center gap-2 md:gap-3 px-2 md:px-3 py-1.5 rounded-xl hover:bg-emerald-50/70 transition-all duration-200 cursor-pointer group">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-sm shadow-emerald-500/20 group-hover:shadow-md group-hover:shadow-emerald-500/30 transition-all duration-200">
                      <User size={18} strokeWidth={2.5} />
                      </div>
                    <div>
                    <p className="text-sm font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors">
                        {user?.username || 'User'}
                    </p>
                    <p className="text-xs text-slate-900">
                        {user?.email || 'sidratulnahin@gmail.com'}
                    </p>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </header>

        )
};

export default Header
