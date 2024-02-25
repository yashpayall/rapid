import React, { useState } from "react";
import SignUpHeader from "./SignUpHeader";

const SignUpAllTabs = () => {
  const [currentStep, setCurrentStep] = useState(4);

  return (
    <div className="px-3 lg:px-0">
      <SignUpHeader currentStep={currentStep} />
      {currentStep === 1 && "first tabs"}
      {currentStep === 2 && "second tabs"}
      {currentStep === 3 && "third tabs"}
      {currentStep === 4 && "4 tabs"}
      {currentStep === 5 && "5 tabs"}
    </div>
  );
};

export default SignUpAllTabs;
