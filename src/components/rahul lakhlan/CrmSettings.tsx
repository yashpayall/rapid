import { GmaillogoIcons, SyncIcons } from "../common/Icons";

const CrmSettings = () => {
  return (
    <>
      <div className="max-w-[1244px] w-full mx-auto">
        <h1 className="text-[#19213D] max-xl:px-3 max-sm:text-[26px] font-DMSans text-[40px] font-bold leading-[120%] pt-[56px]">
          Welcome back, Andrew
        </h1>
        <div className=" bg-white rounded-xl shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.10),0px_2px_4px_-2px_rgba(0,0,0,0.10)] p-6 mt-8">
          <h1 className="text-[#353E5C] font-DMSans text-[32px] font-normal">
            All Customers
          </h1>
          <p className="text-[#6D758F] font-Manrope text-[14px] font-normal leading-[120%] pt-2">
            Manage your contact communication within RapidStart
          </p>
          <div className="flex flex-col">
            <label
              htmlFor="Email"
              className="text-[#353E5C] font-Manrope text-[14px] font-normal leading-[120%] mt-6">
              Email
            </label>
            <input
              type="email"
              className="max-w-[331px] w-full rounded-lg border-[1px] border-[#B4B9C9] h-[48px] placeholder:text-[#B4B9C9] font-Manrope font-normal leading-[125%] px-[24px] mt-1 outline-none"
            />
          </div>
          <div className="mt-[25px] flex max-sm:flex-col gap-4">
            <button
              type="submit"
              className="flex gap-2 max-sm:mx-auto justify-center items-center text-white max-w-[173px] w-full rounded-lg bg-[#8C39FF] h-[48px] border-[2px] border-[#8C39FF] hover:bg-transparent hover:text-[#8C39FF] duration-300 group">
              <SyncIcons />
              Sync emails
            </button>
            <button
              type="submit"
              className="flex max-sm:mx-auto gap-2 max-w-[213px] w-full justify-center items-center text-[#A565FF] font-Manrope text-[16px] font-bold leading-[125%]">
              <GmaillogoIcons />
              Connect to gmail
            </button>
          </div>
          <p className="text-[#6D758F] font-Manrope text-[14px] font-normal pt-6">
            By connecting your email, you agree to RapidStart’s{" "}
            <span className="text-[#8C39FF] font-bold">Privacy Policy</span>
            and{" "}
            <span className="text-[#8C39FF] font-bold">Terms of Service.</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default CrmSettings;
