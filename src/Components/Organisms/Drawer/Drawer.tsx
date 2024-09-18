import { Navbar } from '../../Molecules/Navbar';
import { Sidebar } from '../../Molecules/Sidebar';

interface DrawerProps {
  children: React.ReactNode;
}

export default function Drawer({ children }: DrawerProps) {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <Navbar />

        <div className="flex  bg-gray-900 text-gray-100">
          <Sidebar className="hidden lg:block" />

          <div>{children}</div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <Sidebar className="menu bg-base-200 min-h-full w-80 p-4" />
      </div>
    </div>
  );
}
