import React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface SignUpHeaderProps {
  currentStep: number;
}
const SignUpHeader = ({ currentStep }: SignUpHeaderProps) => {
  let color1,
    color2,
    color3,
    color4,
    color5,
    svg1,
    svg2,
    svg3,
    svg4,
    svg5,
    divBgColor1,
    divBgColor2,
    divBgColor3,
    divBgColor4,
    borderColor1,
    borderColor2,
    borderColor3,
    borderColor4,
    borderColor5;

  if (currentStep === 1) {
    color1 = "text-[#F2571A]";
    color2 = "text-gray-500";
    color3 = "text-gray-500";
    color4 = "text-gray-500";
    color5 = "text-gray-500";

    svg1 = "fill-[#F2571A]";
    svg2 = "fill-gray-500";
    svg3 = "fill-gray-500";
    svg4 = "fill-gray-500";
    svg5 = "fill-gray-500";

    borderColor1 = "border-[#F2571A]";
    borderColor2 = "border-gray-500";
    borderColor3 = "border-gray-500";
    borderColor4 = "border-gray-500";
    borderColor5 = "border-gray-500";

    divBgColor1 = "bg-gray-500";
    divBgColor2 = "bg-gray-500";
    divBgColor3 = "bg-gray-500";
    divBgColor4 = "bg-gray-500";
  } else if (currentStep === 2) {
    color1 = "text-[#F2571A]";
    color2 = "text-gray-500";
    color3 = "text-gray-500";
    color4 = "text-gray-500";
    color5 = "text-gray-500";

    svg1 = "fill-[#F2571A]";
    svg2 = "fill-gray-500";
    svg3 = "fill-gray-500";
    svg4 = "fill-gray-500";
    svg5 = "fill-gray-500";

    borderColor1 = "border-[#F2571A]";
    borderColor2 = "border-gray-500";
    borderColor3 = "border-gray-500";
    borderColor4 = "border-gray-500";
    borderColor5 = "border-gray-500";

    divBgColor1 = "bg-gray-500";
    divBgColor2 = "bg-gray-500";
    divBgColor3 = "bg-gray-500";
    divBgColor4 = "bg-gray-500";
  } else if (currentStep === 3) {
    color1 = "text-[#F2571A]";
    color2 = "text-gray-500";
    color3 = "text-gray-500";
    color4 = "text-gray-500";
    color5 = "text-gray-500";

    svg1 = "fill-[#F2571A]";
    svg2 = "fill-gray-500";
    svg3 = "fill-gray-500";
    svg4 = "fill-gray-500";
    svg5 = "fill-gray-500";

    borderColor1 = "border-[#F2571A]";
    borderColor2 = "border-gray-500";
    borderColor3 = "border-gray-500";
    borderColor4 = "border-gray-500";
    borderColor5 = "border-gray-500";

    divBgColor1 = "bg-gray-500";
    divBgColor2 = "bg-gray-500";
    divBgColor3 = "bg-gray-500";
    divBgColor4 = "bg-gray-500";
  } else if (currentStep === 4) {
    color1 = "text-[#F2571A]";
    color2 = "text-gray-500";
    color3 = "text-gray-500";
    color4 = "text-gray-500";
    color5 = "text-gray-500";

    svg1 = "fill-[#F2571A]";
    svg2 = "fill-gray-500";
    svg3 = "fill-gray-500";
    svg4 = "fill-gray-500";
    svg5 = "fill-gray-500";

    borderColor1 = "border-[#F2571A]";
    borderColor2 = "border-gray-500";
    borderColor3 = "border-gray-500";
    borderColor4 = "border-gray-500";
    borderColor5 = "border-gray-500";

    divBgColor1 = "bg-gray-500";
    divBgColor2 = "bg-gray-500";
    divBgColor3 = "bg-gray-500";
    divBgColor4 = "bg-gray-500";
  } else if (currentStep === 5) {
    color1 = "text-[#F2571A]";
    color2 = "text-gray-500";
    color3 = "text-gray-500";
    color4 = "text-gray-500";
    color5 = "text-gray-500";

    svg1 = "fill-[#F2571A]";
    svg2 = "fill-gray-500";
    svg3 = "fill-gray-500";
    svg4 = "fill-gray-500";
    svg5 = "fill-gray-500";

    borderColor1 = "border-[#F2571A]";
    borderColor2 = "border-gray-500";
    borderColor3 = "border-gray-500";
    borderColor4 = "border-gray-500";
    borderColor5 = "border-gray-500";

    divBgColor1 = "bg-gray-500";
    divBgColor2 = "bg-gray-500";
    divBgColor3 = "bg-gray-500";
    divBgColor4 = "bg-gray-500";
  } else {
    color1 = "text-[#F2571A]";
    color2 = "text-gray-500";
    color3 = "text-gray-500";
    color4 = "text-gray-500";
    color5 = "text-gray-500";

    svg1 = "fill-[#F2571A]";
    svg2 = "fill-gray-500";
    svg3 = "fill-gray-500";
    svg4 = "fill-gray-500";
    svg5 = "fill-gray-500";

    borderColor1 = "border-[#F2571A]";
    borderColor2 = "border-gray-500";
    borderColor3 = "border-gray-500";
    borderColor4 = "border-gray-500";
    borderColor5 = "border-gray-500";

    divBgColor1 = "bg-gray-500";
    divBgColor2 = "bg-gray-500";
    divBgColor3 = "bg-gray-500";
    divBgColor4 = "bg-gray-500";
  }
  return (
    <div>
      <div className="sm:flex gap-2 justify-center items-center relative ">
        <div className="max-w-[90%] mx-auto  sm:hidden absolute start-0 top-2">
          <button>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 11H2"
                stroke="#24265D"
                strokeWidth="2.57143"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 20L2 11L11 2"
                stroke="#24265D"
                strokeWidth="2.57143"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center 2xl:pb-5 sm:hidden"></div>
        <h4
          className="font-poppins md:font-poppins font-semibold
        3xl:text-[27px] leading-6 sm:leading-[35px] text-[20px]  2xl:text-[24px]  text-secondary text-center mt-5 sm:mt-0 flex items-center justify-center gap-4"
        >
          <span className=" "> {/* <ProfileIcon /> */}</span>
          About You
        </h4>
      </div>
      <div className="flex items-center justify-center   flex-nowrap   mt-7 2xl:mt-12">
        <div className="flex flex-col items-center justify-center  relative">
          <div
            className={`border-[4px] ${borderColor1} rounded-full
          h-10 w-10 flex items-center justify-center`}
          >
            {/* <CompanydetailsIcon svg1={svg1} /> */}
          </div>
          <h2
            className={`font-raleway absolute -bottom-9 leading-0 top-12 xs:top-none md:top-auto xs:whitespace-nowrap sm:w-[137px] font-semibold text-[10px] md:text-[13px] line-clamp-2  xl:text-[16px] text-center
          ${color1} xs:leading-[35px]`}
          >
            About You
          </h2>
        </div>
        <div
          className={`block w-[50px] xs:w-[77px] md:w-[96px] h-[3px] sm:h-[4px] 
          rounded-[5px] ${divBgColor1}`}
        ></div>
        <div className="flex items-center justify-center flex-col relative">
          <div
            className={`border-[4px] ${borderColor2} rounded-full
          h-10 w-10 flex items-center justify-center`}
          >
            {/* <LogindetailsIcon svg2={svg2} /> */}
          </div>
          <h2
            className={`font-raleway absolute -bottom-9 leading-0 top-12 xs:top-none md:top-auto xs:whitespace-nowrap sm:w-[141px] font-semibold text-[10px] md:text-[13px] line-clamp-2  xl:text-[16px] text-center
           xs:leading-[35px] ${color2} `}
          >
            Create Workspace
          </h2>
        </div>
        <div
          className={`block w-[50px] xs:w-[77px] md:w-[96px] h-[3px] sm:h-[4px] 
          rounded-[5px] ${divBgColor2}`}
        ></div>
        <div className="flex flex-col items-center justify-center relative">
          <div
            className={`border-[4px] ${borderColor3} rounded-full
           h-10 w-10 flex items-center justify-center`}
          >
            {/* <CatagorydetailsIcon svg3={svg3} /> */}
          </div>
          <h2
            className={`font-raleway absolute -bottom-9 leading-0 top-12 xs:top-none md:top-auto xs:whitespace-nowrap sm:w-[137px] font-semibold text-[10px] md:text-[13px] line-clamp-2  xl:text-[16px] text-center
          ${color3} xs:leading-[35px]`}
          >
            Your Goal
          </h2>
        </div>
        <div
          className={`block w-[50px] xs:w-[77px] md:w-[96px] h-[3px] sm:h-[4px] 
          rounded-[5px] ${divBgColor3}`}
        ></div>
        <div className="flex items-center justify-center flex-col relative">
          <div
            className={`border-[4px] ${borderColor4} rounded-full
          h-10 w-10 flex items-center justify-center`}
          >
            {/* <LogindetailsIcon svg2={svg2} /> */}
          </div>
          <h2
            className={`font-raleway absolute -bottom-9 leading-0 top-12 xs:top-none md:top-auto xs:whitespace-nowrap sm:w-[137px] font-semibold text-[10px] md:text-[13px] line-clamp-2  xl:text-[16px] text-center
           xs:leading-[35px] ${color4} `}
          >
            Invite Friend
          </h2>
        </div>
        <div
          className={`block w-[50px] xs:w-[77px] md:w-[96px] h-[3px] sm:h-[4px] 
          rounded-[5px] ${divBgColor4}`}
        ></div>
        <div className="flex flex-col items-center justify-center relative">
          <div
            className={`border-[4px] ${borderColor5} rounded-full
           h-10 w-10 flex items-center justify-center`}
          >
            {/* <CatagorydetailsIcon svg3={svg3} /> */}
          </div>
          <h2
            className={`font-raleway absolute -bottom-9 leading-0 top-12 xs:top-none md:top-auto xs:whitespace-nowrap sm:w-[143px] font-semibold text-[10px] md:text-[13px] line-clamp-2  xl:text-[16px] text-center
          ${color5} xs:leading-[35px]`}
          >
            Start Your Journey
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SignUpHeader;
