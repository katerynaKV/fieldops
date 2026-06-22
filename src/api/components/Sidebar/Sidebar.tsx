import { Link, NavLink } from 'react-router';
import './Sidebar.css';
import { BellRing, Cog, LayoutDashboard } from 'lucide-react';
import SidebarItem from './SidebarItem';

const links = [
  {
    icon: <LayoutDashboard />,
    label: 'Dashboard',
    to: '/',
  },
  {
    icon: <Cog />,
    label: 'Assets',
    to: '/assets',
  },
  {
    icon: <BellRing />,
    label: 'Alerts',
    to: '/alerts',
  },
];

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="flex gap-4 p-5 border-b border-border-default">
        <Link to="/">
          <img src="/fieldops-icon.png" alt="logo" height={50} width={50} />
        </Link>
        <div className="flex flex-col">
          <h3 className="text-xl font-medium">FieldOps</h3>
          <span className="text-text-faint">DATAOPS PLATFORM</span>
        </div>
      </div>

      <div className="flex flex-col px-3 py-6 gap-2">
        <h5 className="text-sm text-text-faint">MAIN</h5>

        {links.map(({ icon, label, to }) => (
          <NavLink key={to} to={to}>
            {({ isActive }) => (
              <SidebarItem icon={icon} label={label} isActive={isActive} />
            )}
          </NavLink>
        ))}
      </div>

      <div className="flex gap-4 p-5 mt-auto border-t border-border-default">
        <span className="flex justify-center items-center bg-purple-400 font-bold w-12 h-12 rounded-full">
          JD
        </span>

        <div className="flex flex-col">
          <span className="font-medium">J. Davies</span>
          <span className="text-text-faint text-sm">Field Engineer</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
