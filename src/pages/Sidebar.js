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
  { title: 'ตารางสอน', src: 'Chat', icon: <BsChatLeftText /> , link: '/', },
  { title: 'แบบฟอร์มข้อมูลรายวิชา', src: 'User', icon: <MdAccountCircle /> , link: '/form',},
 
  { title: 'Logout', src: 'Logout', icon: <MdLogout /> },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className="h-row flex items-end justify-end">
      <div
        className={` ${
          open ? 'w-42 px-2 ' : 'w-0 '
        } lg:static bg-red-900 h-screen relative duration-500`}
      >
        <div className="justify-center mt-3">
          <h1
            className={`text-white font-medium text-2xl text-center duration-200 ${
              !open && 'invisible'
            }`}
          >
            LOGO
          </h1>
        </div>
        <ul className="pt-7">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-4 cursor-pointer hover:bg-slate-50 text-zinc-300 text-sm items-center gap-x-4 ${
                Menu.gap ? 'mt-20' : 'mt-4'
              }`}
            >
              {Menu.icon ? Menu.icon : <MdOutlineDashboard />}
              {Menu.link ? (
                <Link to={Menu.link} className="flex-1">
                  {Menu.title}
                </Link>
              ) : (
                <span className="flex-1">{Menu.title}</span>
              )}
              {Menu.subMenus && (
                <BsChevronDown
                  onClick={() => setSubMenuOpen(!subMenuOpen)}
                  className={`${subMenuOpen && 'rotate-180'}`}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
