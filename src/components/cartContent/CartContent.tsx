import { useState } from "react";
import StepIndicator from "./stepIndicator/StepIndicator";
import FirstStep from "./stepIndicator/FirstStep";
import SecondStep from "./stepIndicator/SecondStep";
import { useCartStore } from "../../store/cartStore/cartStore";
import useAuth from "../../hooks/useAuth";
import DoesntLoggedIn from "../errors/doesntLoggedIn/DoesntLoggedIn";
import Confirmation from "./stepIndicator/Confirmation";
function CartContent() {
  // === useSate for step indecator ===
  const [step, setStep] = useState<number>(1);

  const {items} = useCartStore()
  const changeStep = (num: number) => {
    setStep(num);
  };

  const {isLogin} = useAuth()
  return (
    <div>
     {
      isLogin ? (
        <div>
          <StepIndicator step={step} setStep={setStep} />
        {/* === first step === */}
        {step === 1 && (
          <section>
            <FirstStep />
            <div className="w-[80%] mx-auto">
           {
            items.length > 0 ?(   <button
              onClick={() => changeStep(2)}
              className="my-3 p-2 bg-pink-300 text-white rounded cursor-pointer 
      active:scale-90 transition"
            >
              Next Step
            </button>): ('')
           }
            </div>
          </section>
        )}
  
        {step === 2 && (
          <section>
            <SecondStep setStep={setStep} />
            <div className="w-[80%] mx-auto">
              <button
                onClick={() => changeStep(1)}
                className="my-3 p-2 bg-pink-300 text-white rounded cursor-pointer 
        active:scale-90 transition mx-3"
              >
                Previuse Step
              </button>
            </div>
          </section>
        )} </div>
      ) : (<DoesntLoggedIn />)
     }
     {
      step === 3 && (
        <Confirmation />
      )
     }
    </div>
  );
}

export default CartContent;
