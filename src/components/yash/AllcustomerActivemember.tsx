import { SearchIcons } from "../common/Icons";
import Newestbtndropdown from "./Newestbtndropdown";

const AllcustomerActivemember = () => {
  return (
    <>
      <div className="max-w-[1244px] w-full mx-auto p-6 flex max-md:flex-col gap-6 justify-between">
        <div>
          <h1 className="text-[#353E5C] text-[32px] font-normal leading-[120%] font-DMSans">
            All Customers
          </h1>
          <h1 className="text-[#63DE77] font-Manrope text-[16px] font-bold leading-[125%] pt-1">
            Active Members
          </h1>
        </div>
        <div className="flex max-sm:flex-wrap gap-6 max-sm:gap-2 items-center justify-center max-w-[444px] w-full">
          <div className="max-w-[280px] max-sm:max-w-[200px] max-sm:h-[30px] px-2 w-full h-[48px] flex justify-center items-center rounded-lg border-[1px] border-[#B4B9C9] bg-white">
            <SearchIcons />
            <input
              type="search"
              placeholder="Search"
              className="outline-none text-[16px] px-2 max-sm:text-[14px] font-normal placeholder:text-[#B4B9C9]"
            />
          </div>
          <div>
            <Newestbtndropdown />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllcustomerActivemember;
