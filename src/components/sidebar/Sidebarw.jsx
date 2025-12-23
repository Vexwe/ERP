import { HiChartPie, HiViewBoards, HiInbox, HiUser, HiShoppingBag, HiArrowSmRight, HiTable } from "react-icons/hi";
import { BiBuoy } from "react-icons/bi";

export function Sidebarw({ closeSidebar }) {
  return (
    <aside className="w-64 h-full bg-[#814243] shadow-xl border-r border-gray-200 p-4 fixed top-0 left-0 z-50">

      {/* Botão fechar */}
      {closeSidebar && (
        <button
          onClick={closeSidebar}
          className="absolute top-3 right-3 text-white hover:text-black"
        >
          ✕
        </button>
      )}

      {/* Título / Logo */}
      <h2 className="text-xl font-semibold text-white mb-6 pl-2">Menu</h2>

      {/* Lista */}
      <nav className="flex flex-col gap-1">

        {/* Grupo 1 */}
        <div className="mb-4">
          <SidebarItem icon={<HiChartPie />} text="Dashboard" />
          <SidebarItem icon={<HiViewBoards />} text="Kanban" />
          <SidebarItem icon={<HiInbox />} text="Inbox" />
          <SidebarItem icon={<HiUser />} text="Users" />
          <SidebarItem icon={<HiShoppingBag />} text="Products" />
          <SidebarItem icon={<HiArrowSmRight />} text="Sign In" />
          <SidebarItem icon={<HiTable />} text="Sign Up" />
        </div>

        {/* Grupo 2 */}
        <div className="pt-2 border-t border-gray-200">
          <SidebarItem icon={<HiChartPie />} text="Upgrade to Pro" />
          <SidebarItem icon={<HiViewBoards />} text="Documentation" />
          <SidebarItem icon={<BiBuoy />} text="Help" />
        </div>

      </nav>
      
    </aside>
    
  );
}

/* Componente de item individual */
function SidebarItem({ icon, text }) {
  return (
    <a
      href="#"
      className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-gray-100 hover:text-black transition select-none"
    >
      <span className="text-xl">{icon}</span>
      <span className="text-base">{text}</span>
    </a>
  );
}
