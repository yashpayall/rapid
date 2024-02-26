import { CrmaProjectsData, tabelData } from "../common/Helper";
import { GallaryIcons, SettingIcons } from "../common/Icons";
import Pagination from "../common/Pagination";
import AllcustomerActivemember from "../yash/AllcustomerActivemember";
import Allcustomeraddclient from "../yash/Allcustomeraddclient";
import CrmSettingsProject from "./CrmSettingsProject";

const CrmTableData = () => {
  return (
    <>
      <div>
        <div className="mt-[52px] mb-[32px]">
          <Allcustomeraddclient />
        </div>
        <div className="shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.10),0px_2px_4px_-2px_rgba(0,0,0,0.10)] rounded-xl">
          <div>
            <CrmSettingsProject />
          </div>
          <div className="overflow-x-auto px-3 scrollbar-hide">
            <table className="max-w-[1244px] w-full bg-white mx-auto">
              <thead className="bg-white py-2">
                <tr className=" flex h-[34px] items-center text-[#B4B9C9] font-Manrope text-[14px] border-b-[1px] border-[#B4B9C9]">
                  <th className="text-left p-[8px_12px] w-[64px]">
                    <GallaryIcons />
                  </th>
                  <th className="p-[8px_12px]  text-[#B4B9C9] text-[14px] max-sm:w-[300px] w-[497px] text-left font-bold font-Manrope leading-[120%]">
                    Name
                  </th>
                  <th className="p-[8px_12px]  text-[#B4B9C9] text-[14px] w-[139px] text-left font-bold font-Manrope leading-[120%]">
                    Area (m square)
                  </th>
                  <th className="p-[8px_12px]  text-[#B4B9C9] text-[14px] w-[220px] text-left font-bold font-Manrope leading-[120%]">
                    Appointment Date
                  </th>
                  <th className="p-[8px_12px]  text-[#B4B9C9] text-[14px] w-[100px] text-left font-bold font-Manrope leading-[120%] ">
                    Price
                  </th>
                  <th className="p-[8px_12px]  text-[#B4B9C9] text-[14px] w-[120px] text-left font-bold font-Manrope leading-[120%] ">
                    Status
                  </th>
                  <th className="p-[8px_12px]  text-[#B4B9C9] text-[14px] w-[56px] text-left font-bold font-Manrope leading-[120%] ">
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody>
                {CrmaProjectsData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#E1E4ED] lg:gap-0 h-[49px] bg-white flex items-center">
                    <td className="p-[16px_12px] w-[64px]">
                      <img src={item.img} alt="" />
                    </td>
                    <td className="text-left p-[16px_12px] max-sm:w-[300px] w-[497px] text-white font-manrope text-[20px] font-medium">
                      <p className="text-[#353E5C] font-Manrope text-[14px] leading-7 font-normal">
                        {item.name}
                      </p>
                    </td>
                    <td className="w-[139px] p-[16px_12px] lg:max-w-[138px] lg:w-full text-[#6D758F] font-Manrope text-[12px] leading-7 font-normal">
                      {item.area}
                    </td>
                    <td className="text-left w-[220px] p-[16px_12px]  text-[#6D758F] font-Manrope text-[14px] leading-7 font-normal">
                      {item.date}
                    </td>
                    <td className="p-[16px_12px] w-[100px] text-[#6D758F] font-Manrope text-[14px] font-normal">
                      {item.price}
                    </td>
                    <td className="w-[120px] p-[16px_12px]">
                      <button
                        style={{
                          color: item.color,
                          background: item.bgcolor,
                          width: item.width,
                        }}
                        type="submit"
                        className="w-[108px] h-[25px] rounded bg-[#FFECEF] hover:scale-105 duration-300 text-[#63DE77] text-[14px] font-bold leading-[18px] font-Manrope">
                        {item.status}
                      </button>
                    </td>
                    <td className="flex cursor-pointer hover:scale-110 p-[16px_12px] justify-center w-[56px]">
                      {item.editicon}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default CrmTableData;
