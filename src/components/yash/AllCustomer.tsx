import { tabelData } from "../common/Helper";
import { SettingIcons } from "../common/Icons";
import Pagination from "../common/Pagination";
import AllcustomerActivemember from "./AllcustomerActivemember";
import Allcustomeraddclient from "./Allcustomeraddclient";

const AllCustomer = () => {
  return (
    <>
      <div className="">
        <div className="mt-[52px] mb-[32px]">
          <Allcustomeraddclient />
        </div>
        <div className="shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.10),0px_2px_4px_-2px_rgba(0,0,0,0.10)] rounded-xl">
          <div>
            <AllcustomerActivemember />
          </div>
          <div className="overflow-x-auto scrollbar-hide">
            <table className="max-w-[1244px] w-full bg-white mx-auto">
              <thead className="bg-white py-2">
                <tr className=" flex h-[34px] items-center text-[#B4B9C9] font-Manrope text-[14px] border-b-[1px] border-[#B4B9C9]">
                  <th className="text-left p-[8px_12px] max-sm:w-[150px] w-[240px] font-medium leading-[24px] ">
                    Customer Name
                  </th>
                  <th className="p-[8px_12px] max-sm:w-[150px] w-[200px] text-left font-medium leading-[24px] ">
                    Company
                  </th>
                  <th className="text-left p-[8px_12px] text-[14px] w-[138px] font-medium leading-[24px] ">
                    Phone Number
                  </th>
                  <th className="text-left p-[8px_12px] w-[220px] lg:w-[240px] font-normal leading-[18px] ">
                    Email
                  </th>
                  <th className="text-left p-[8px_12px] w-[124px] font-normal leading-[18px] ">
                    Source
                  </th>
                  <th className="text-left p-[8px_12px] w-[88px]  font-normal leading-[18px] ">
                    status
                  </th>
                  <th className="text-left p-[8px_12px] w-[116px]  font-normal leading-[18px] ">
                    Unread Email
                  </th>
                  <th>
                    <SettingIcons />
                  </th>
                </tr>
              </thead>
              <tbody>
                {tabelData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#E1E4ED] lg:gap-0 h-[49px] bg-white flex items-center">
                    <td className="text-left p-[16px_12px] max-sm:w-[150px] w-[240px] text-[#353E5C] font-Manrope text-[14px] leading-7 font-normal text-nowrap line-clamp-1">
                      {item.name}
                    </td>
                    <td className="text-left p-[16px_12px] max-sm:w-[150px] w-[200px] text-white font-manrope text-[20px] font-medium">
                      <p className="text-[#353E5C] font-Manrope text-[14px] leading-7 font-normal">
                        {item.company}
                      </p>
                    </td>
                    <td className="text-right w-[138px] p-[16px_12px] lg:max-w-[138px] lg:w-full text-[#353E5C] font-Manrope text-[12px] leading-7 font-normal">
                      {item.phoneno}
                    </td>
                    <td className="text-left w-[240px] p-[16px_12px] lg:max-w-[240px] lg:w-full text-[#353E5C] font-Manrope text-[14px] leading-7 font-normal">
                      {item.contact}
                    </td>
                    <td className=" p-[16px_12px] w-[124px] text-[#6D758F] font-Manrope text-[14px] font-normal">
                      {item.source}
                    </td>
                    <td className="text-left w-[88px] p-[16px_12px]">
                      <button
                        style={{
                          color: item.color,
                          background: item.bgcolor,
                          width: item.width,
                        }}
                        type="submit"
                        className="w-[60px] h-[25px] rounded bg-[#FFECEF] hover:scale-105 duration-300 text-[#63DE77] text-[14px] font-bold leading-[18px] font-Manrope">
                        {item.status}
                      </button>
                    </td>
                    <td className="flex cursor-pointer hover:scale-110 p-[16px_12px] justify-center w-[116px]">
                      {item.emailicon}
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

export default AllCustomer;
