"use client"


import { useState } from "react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("annual");

  const plans = [
    { title: "Free", price: "$0", features: ["Upto 10 users", "Fully available vendor list", "Up to 20 consultant hotlist", "Single team"], button: "Get Started" },
    { title: "Basic", price: "$39", discount: "-15%", features: ["Upto 10 users", "Fully available vendor list", "Up to 20 consultant hotlist", "Single team"], button: "Get Started" },
    { title: "Pro", price: "$59", discount: "-15%", features: ["Upto 100 users", "Advanced insights", "Priority support", "Up to 10 teams"], button: "Get Started", highlight: true },
    { title: "Enterprise", price: "$129", features: ["Upto 10 users", "Fully available vendor list", "Up to 20 consultant hotlist", "Single team"], button: "Contact Our Sales" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold">Supercharge your workflows</h1>
      <p className="text-gray-600 text-center max-w-2xl mt-4">
        Perfectly tailored for every stage of your company. Get started today, no credit card needed.
      </p>
      <div className="mt-6 flex gap-2 border rounded-lg p-1 bg-white">
        <button onClick={() => setBillingCycle("monthly")} className={`px-4 py-2 rounded-lg ${billingCycle === "monthly" ? "bg-black text-white" : "text-black"}`}>Billed Monthly</button>
        <button onClick={() => setBillingCycle("annual")} className={`px-4 py-2 rounded-lg ${billingCycle === "annual" ? "bg-black text-white" : "text-black"}`}>Billed Annually</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
        {plans.map((plan, index) => (
          <div key={index} className={`p-6 border rounded-lg ${plan.highlight ? "bg-black text-white" : "bg-white text-black"}`}>
            <h3 className="text-xl font-semibold">{plan.title}</h3>
            <div className="flex items-center gap-2 text-2xl font-bold mt-2">
              {plan.price}
              {plan.discount && <span className="text-sm bg-gray-300 text-black px-2 rounded">{plan.discount}</span>}
            </div>
            <p className="text-gray-500 text-sm">per user/month, billed annually</p>
            <ul className="mt-4 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full mt-4 py-2 rounded-lg ${plan.highlight ? "bg-white text-black" : "bg-black text-white"}`}>{plan.button}</button>
          </div>
        ))}
      </div>
      <div className="flex gap-6 mt-10 text-gray-400">
        <span>coinbase</span>
        <span>Dropbox</span>
        <span>Google</span>
        <span>slack</span>
        <span>Square</span>
        <span>zoom</span>
      </div>
    </div>
  );
};

export default Pricing;
