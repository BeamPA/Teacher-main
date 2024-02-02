import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdOutlineDashboard,
  MdAccountCircle,
  MdOutlineSettings,
  MdLogout,
} from 'react-icons/md';
import {
  BsChevronDown,
  BsChatLeftText,
  BsCalendarCheck,
} from 'react-icons/bs';

const Menus = [
  { title: 'หน้าหลัก', src: 'Chart_fill', link: '/', icon: <MdOutlineDashboard /> },
  { title: 'ตารางสอน', src: 'Chat', icon: <BsChatLeftText />, link: '/home' },
  { title: 'แบบฟอร์มข้อมูลรายวิชา', src: 'User', icon: <MdAccountCircle />, link: '/form' },
];

const Menuslogout = [
  { title: 'ออกจากระบบ', src: 'Logout', icon: <MdLogout />, link: '/logout' },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className={`${
        open ? 'w-60 h-screen px-2' : 'w-0'
      } lg:static bg-red-900 h-screen relative duration-500`}
    >
      <div className="justify-center mt-3 w-60">
        <h1
          className={`text-white font-medium font-IBM text-2xl text-center duration-200 ${
            !open && 'invisible'
          }`}
        >
          <div className="flex justify-center items-center">
            {open ? (
              <MdAccountCircle className="text-6xl" />
            ) : (
              <Link to={Menus[0].link} className="text-white font-IBM flex items-center rounded-md p-4 cursor-pointer text-zinc-300 text-sm gap-x-4 hover:bg-slate-50 hover:text-red-900">
                {Menus[0].icon}
              </Link>
            )}
          </div>
        </h1>
      </div>
      {open && (
        <ul className="pt-7">
          {Menus.map((menu, index) => (
            <li key={index}>
              <Link
                to={menu.link}
                className="text-white font-IBM flex items-center rounded-md p-4 cursor-pointer text-zinc-300 text-sm gap-x-4 hover:bg-slate-50 hover:text-red-900"
              >
                {menu.icon}
                {menu.title}
              </Link>
            </li>
          ))}
          <div className='bg-red-900 h-80'></div>
            <li>
              <Link
                to={Menuslogout[0].link}
                className="text-white font-IBM flex items-center rounded-md p-4 cursor-pointer text-zinc-300 text-sm gap-x-4 hover:bg-slate-50 hover:text-red-900"
              >
                {Menuslogout[0].icon}
                {Menuslogout[0].title}
              </Link>
            </li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
