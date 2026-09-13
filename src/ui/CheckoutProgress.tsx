import { Check } from "lucide-react";

interface CheckoutProgressProps {
  currentStep: number;
}

const steps = ["Cart", "Payment", "Place Order"];

function CheckoutProgress({ currentStep }: CheckoutProgressProps) {
  return (
    <div className="mx-auto w-full max-w-[720px] px-4 py-5 sm:px-6 sm:py-6">
      <div className="flex">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isComplete = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          const hasNextStep = index < steps.length - 1;

          return (
            <div
              key={step}
              className="relative flex flex-1 flex-col items-center"
            >
              {hasNextStep && (
                <span
                  className={`absolute left-1/2 top-4 -right-[50%] h-0.5 sm:top-6 ${
                    stepNumber < currentStep ? "bg-emerald-600" : "bg-slate-300"
                  }`}
                />
              )}

              <span
                className={`relative z-10 grid h-8 w-8 place-items-center rounded-full text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-lg ${
                  isComplete || isCurrent ? "bg-emerald-600" : "bg-slate-400"
                }`}
              >
                {isComplete ? (
                  <Check size={18} strokeWidth={3} className="sm:hidden" />
                ) : (
                  stepNumber
                )}
                {isComplete && (
                  <Check size={24} strokeWidth={3} className="hidden sm:block" />
                )}
              </span>

              <span
                className={`mt-2 text-center text-xs sm:whitespace-nowrap sm:text-base ${
                  isCurrent || isComplete
                    ? "font-bold text-slate-900"
                    : "font-medium text-slate-500"
                }`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CheckoutProgress;
