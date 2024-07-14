
import { MultiLevelSidebar } from "../ui/MultiLevelSidebar"

import { Outlet } from "react-router-dom"

const SidebarLayout = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4">
    <div className=" col-span-1">
      <MultiLevelSidebar />
    </div>
    <div className="col-span-1 md:col-span-3 p-8 h-auto">
   <Outlet/>
    </div>
  </section>
  )
}

export default SidebarLayout