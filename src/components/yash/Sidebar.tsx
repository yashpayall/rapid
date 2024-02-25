import { CustomerRelation } from "../common/Helper";
import {
  ArrowleftIcons,
  CustomerrelationIcons,
  CustomerrelationIcons2,
  DashbordIcons,
  LogoutIcons,
} from "../common/Icons";

interface LayoutProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<LayoutProps> = ({ active, setActive }) => {
  return (
    <>
      {active && (
        <div className="w-full h-full absolute z-[40] left-0 right-0 bottom-0"></div>
      )}
      <div
        className={` lg:max-w-[331px] max-lg:absolute top-0 lg:top-0 h-full lg:min-h-full lg:max-h-full
    3xl:max-w-[331px] px-[24px] w-full z-[999] bg-white transition-all duration-300 ease-in-out bg-primary pt-[25px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10),0px_4px_6px_-1px_rgba(0,0,0,0.10)]
    ${
      active
        ? "left-0 transition duration-500 ease-in-out !max-w-[90px] w-full "
        : "left-[-195%] transition duration-500 ease-in-out"
    }`}>
        <div
          className={`w-full flex gap-4 items-center transition duration-500 ease-in-out ${
            active ? "gap-0" : "gap-2"
          }`}>
          <div
            className={`group cursor-pointer hover:bg-[#F4ECFF] p-2 rounded-lg ${
              active ? "block" : "hidden"
            }`}>
            <CustomerrelationIcons2 />
          </div>
          <button
            type="button"
            className={`max-w-[235px] w-full rounded-lg h-[48px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-[#5858E8] border-[2px] border-[#5858E8] hover:bg-transparent hover:text-[#5858E8] text-white text-[16px] font-bold cursor-pointer flex hover:scale-95 font-Manrope duration-200 group justify-center items-center gap-2 ${
              active ? "hidden" : "block"
            }`}>
            <CustomerrelationIcons />
            Customer Relations
          </button>
          <span
            onClick={() => setActive(!active)}
            className={`duration-500 cursor-pointer bg-white rounded-[30%] ${
              active ? "p-[6px_0px_6px_6px] rotate-180" : "p-[0px]"
            }`}>
            <ArrowleftIcons />
          </span>
        </div>
        <div className="mt-6 h-[1px] bg-[#E9EBF2] max-w-[283px] w-full"></div>
        <div className="flex flex-col  h-full justify-between pb-[120px] mt-6">
          <div className="flex flex-col gap-3 ">
            {CustomerRelation.map((item, index) => (
              <div key={index} className="flex items-center group gap-3">
                <a
                  href=""
                  className={`w-full gap-1  py-3 items-center justify-between rounded-[6px] hover:bg-[#F4ECFF] flex ${
                    active ? "px-2" : "px-4"
                  }`}>
                  <div className="flex gap-[10px] items-center">
                    {item.icon}
                    <h1
                      className={`text-[#6D758F] font-Manrope text-[14px] font-bold group-hover:text-[#A565FF] ${
                        active ? "hidden" : "block"
                      }`}>
                      {item.name}
                    </h1>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className="flex items-center group gap-3">
            <button
              className={`w-full gap-1  py-3 items-center justify-between rounded-[6px] hover:bg-[#F4ECFF] flex ${
                active ? "px-2" : "px-4"
              }`}>
              <div className="flex gap-[10px] items-center">
                <LogoutIcons />
                <h1
                  className={`text-[#6D758F] font-Manrope text-[14px] font-bold group-hover:text-[#A565FF] ${
                    active ? "hidden" : "block"
                  }`}>
                  Logout
                </h1>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
