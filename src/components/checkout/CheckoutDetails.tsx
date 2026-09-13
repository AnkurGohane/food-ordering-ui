import { Briefcase, Clock3, CreditCard, Home, Landmark, MapPin, MessageSquare, Plus, WalletCards } from "lucide-react";
import { useState } from "react";
import AddressCard from "../../ui-kit/AddressCard";
import PaymentOption from "../../ui-kit/PaymentOption";

function CheckoutDetails() {
  const [selectedAddress, setSelectedAddress] = useState("home");
  const [deliveryTime, setDeliveryTime] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [deliveryInstructions, setDeliveryInstructions] = useState("");

  return (
    <div className="min-w-0 space-y-3">
      <section className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <h2 className="flex items-center gap-2 font-bold text-slate-900 sm:gap-3">
            <MapPin size={21} className="shrink-0 text-emerald-600" />
            Delivery Address
          </h2>
          <button
            type="button"
            className="cursor-pointer text-sm font-medium text-emerald-600 hover:text-emerald-700"
          >
            Change
          </button>
        </div>

        <div className="mt-4 space-y-2">
          <AddressCard
            label="Home"
            address="Apartment 101, Green Valley Society, Central Avenue"
            contact="Customer Name | +91 00000 00000"
            icon={Home}
            isDefault
            isSelected={selectedAddress === "home"}
            onSelect={() => setSelectedAddress("home")}
          />
          <AddressCard
            label="Work"
            address="Office 5, Business Park, Tech District"
            contact="Customer Name | +91 00000 00000"
            icon={Briefcase}
            isSelected={selectedAddress === "work"}
            onSelect={() => setSelectedAddress("work")}
          />
        </div>

        <button
          type="button"
          className="mt-3 flex cursor-pointer items-center gap-2 rounded-lg bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
        >
          <Plus size={16} />
          Add New Address
        </button>

        <div className="mt-4 border-t border-slate-100 pt-4">
          <h3 className="flex flex-wrap items-center gap-2 font-bold text-slate-900 sm:gap-3">
            <MessageSquare size={20} className="shrink-0" />
            Delivery Instructions
            <span className="font-normal text-slate-500">(Optional)</span>
          </h3>
          <textarea
            value={deliveryInstructions}
            onChange={(event) => setDeliveryInstructions(event.target.value)}
            maxLength={100}
            placeholder="E.g. Ring the bell, leave at door, etc."
            rows={2}
            className="mt-3 w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          />
          <p className="text-right text-xs text-slate-500">
            {deliveryInstructions.length}/100
          </p>
        </div>

        <div className="mt-3">
          <h3 className="flex items-center gap-3 font-bold text-slate-900">
            <Clock3 size={21} />
            Delivery Time
          </h3>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setDeliveryTime("standard")}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 text-left ${
                deliveryTime === "standard"
                  ? "border-emerald-500 bg-emerald-50"
                  : "border-slate-200"
              }`}
            >
              <span
                className={`mt-1 h-4 w-4 shrink-0 rounded-full border-2 p-0.5 ${
                  deliveryTime === "standard" ? "border-emerald-600" : "border-slate-300"
                }`}
              >
                <span
                  className={`block h-full w-full rounded-full ${
                    deliveryTime === "standard" ? "bg-emerald-600" : ""
                  }`}
                />
              </span>
              <span>
                <span className="block text-sm font-semibold text-slate-900">
                  Standard Delivery
                </span>
                <span className="text-xs font-medium text-emerald-700">
                  25 – 35 mins &nbsp; Free
                </span>
              </span>
            </button>
            <button
              type="button"
              onClick={() => setDeliveryTime("schedule")}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 text-left ${
                deliveryTime === "schedule"
                  ? "border-emerald-500 bg-emerald-50"
                  : "border-slate-200"
              }`}
            >
              <span
                className={`mt-1 h-4 w-4 shrink-0 rounded-full border-2 p-0.5 ${
                  deliveryTime === "schedule" ? "border-emerald-600" : "border-slate-300"
                }`}
              >
                <span
                  className={`block h-full w-full rounded-full ${
                    deliveryTime === "schedule" ? "bg-emerald-600" : ""
                  }`}
                />
              </span>
              <span>
                <span className="block text-sm font-semibold text-slate-900">
                  Schedule for later
                </span>
                <span className="text-xs text-slate-500">Choose date & time</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
        <h2 className="flex items-center gap-3 font-bold text-slate-900">
          <CreditCard size={21} />
          Payment Method
        </h2>
        <div className="mt-4 space-y-2">
          <PaymentOption
            label="UPI"
            detail="GPay · PhonePe · Paytm"
            icon={WalletCards}
            isSelected={paymentMethod === "upi"}
            onSelect={() => setPaymentMethod("upi")}
          />
          <PaymentOption
            label="Credit / Debit Card"
            icon={CreditCard}
            isSelected={paymentMethod === "card"}
            onSelect={() => setPaymentMethod("card")}
          />
          <PaymentOption
            label="Net Banking"
            icon={Landmark}
            isSelected={paymentMethod === "netbanking"}
            onSelect={() => setPaymentMethod("netbanking")}
          />
          <PaymentOption
            label="Cash on Delivery"
            detail="Pay with cash"
            icon={WalletCards}
            isSelected={paymentMethod === "cod"}
            onSelect={() => setPaymentMethod("cod")}
          />
        </div>
      </section>
    </div>
  );
}

export default CheckoutDetails;
