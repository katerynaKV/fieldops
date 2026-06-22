import type { JSX } from 'react';
import { clsx } from 'clsx';
import './SidebarItem.css';

export type SidebarItemProps = {
  icon: JSX.Element;
  label: string;
  isActive: boolean;
};

const SidebarItem = ({ icon, label, isActive }: SidebarItemProps) => {
  return (
    <div className={clsx('SidebarItem', isActive && 'active')}>
      {icon}
      {label}
    </div>
  );
};

export default SidebarItem;
