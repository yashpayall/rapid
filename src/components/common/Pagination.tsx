import { ArrowDownIcons } from "./Icons";

const Pagination = () => {
  return (
    <>
      <div className="max-w-[1196px] w-full mx-auto bg-white flex max-sm:flex-col gap-2 items-center justify-between">
        <p className="text-[#B4B9C9] font-Manrope text-[14px] font-normal">
          Showing data 1 to 8 of 256K entries
        </p>
        <div className="flex gap-3 max-sm:gap-2 items-center justify-center">
          <div className="w-[36px] cursor-pointer h-[36px] flex justify-center items-center rounded-md border-[1px] border-[#E1E4ED]">
            <div className="rotate-[80deg]">
              <ArrowDownIcons />
            </div>
          </div>
          <div className="w-[36px] h-[36px] flex justify-center items-center rounded-md border-[1px] border-[#E1E4ED] text-white cursor-pointer duration-200 bg-[#8C39FF]">
            1
          </div>
          <div className="w-[36px] h-[36px] flex justify-center items-center rounded-md border-[1px] border-[#E1E4ED] text-[#E1E4ED] cursor-pointer duration-200 hover:bg-[#8C39FF] hover:text-white">
            2
          </div>
          <div className="w-[36px] h-[36px] flex justify-center items-center rounded-md border-[1px] border-[#E1E4ED] text-[#E1E4ED] cursor-pointer duration-200 hover:bg-[#8C39FF] hover:text-white">
            3
          </div>
          <div className="w-[36px] h-[36px] flex justify-center items-center rounded-md border-[1px] border-[#E1E4ED] text-[#E1E4ED] cursor-pointer duration-200 hover:bg-[#8C39FF] hover:text-white">
            4
          </div>
          <div className="w-[36px] h-[36px] flex justify-center items-center rounded-md border-[1px] border-[#E1E4ED] text-[#E1E4ED] cursor-pointer duration-200 hover:bg-[#8C39FF] hover:text-white">
            99
          </div>
          <div className="w-[36px] cursor-pointer h-[36px] flex justify-center items-center rounded-md border-[1px] border-[#E1E4ED]">
            <div className="rotate-[270deg]">
              <ArrowDownIcons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
