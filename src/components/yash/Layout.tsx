import React, { useState } from "react";
import Sidebar from "./Sidebar";
interface LayoutProps {
  children: string;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="overflow-hidden h-screen flex w-full mx-auto bg-[#F7F7F7]">
      <Sidebar active={active} setActive={setActive} />
      <div className="max-w-[1556px] 4xl:max-w-full lg:min-h-full  lg:max-h-full overflow-hidden scrollbar flex flex-col w-full ">
        <div className=" flex flex-col rbc-div  lg:overflow-hidden overflow-auto  lg:grow lg:pl-3 3xl:pl-5">
          <div className=" lg:block hidden top-0 left-0"></div>
          <div className="grow flex flex-col overflow-auto  h-full pt-[10px] pb-[30px] ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
