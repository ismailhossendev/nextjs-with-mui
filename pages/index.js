import { useState } from "react";
import Step1 from "../components/form/Step1";
import Step2 from "../components/form/Step2";
import Step3 from "../components/form/Step3";

export default function Home() {
  const [step, setStep] = useState(0);
  return (
    <div className="grid lg:grid-cols-2">
      <div>
        <img className='w-full h-full object-cover' src="https://i.ibb.co/2Yfzkv4/image.png" alt="" />
      </div>
      <div className="">
        {step === 0 && <Step1 setStep={setStep} />}
        {step === 1 && <Step2 setStep={setStep} />}
        {step === 2 && < Step3 setStep={setStep} />}
      </div>
    </div >
  )
}
