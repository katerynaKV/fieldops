import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="flex gap-4 p-5 [border:var(--border-default)]">
        <img src="/fieldops-icon.png" alt="logo" height={50} width={50} />
        <div className="flex flex-col">
          <h3 className="text-xl font-medium">FieldOps</h3>
          <span className="text-text-faint">DATAOPS PLATFORM</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
