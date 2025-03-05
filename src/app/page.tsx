"use client"

import { useState } from "react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("annually");

  const pricingPlans = [
    { name: "Free", monthly: 0, annually: 0, features: ["Upto 10 users", "Fully available vendor list", "Up to 20 consultant hotlist", "Single team"], button: "Get Started" },
    { name: "Basic", monthly: 39, annually: 39 * 12 * 0.85, features: ["Upto 10 users", "Fully available vendor list", "Up to 20 consultant hotlist", "Single team"], button: "Get Started" },
    { name: "Pro", monthly: 59, annually: 59 * 12 * 0.85, features: ["Upto 100 users", "Advanced insights", "Priority support", "Up to 10 teams"], button: "Get Started", highlight: true },
    { name: "Enterprise", monthly: 129, annually: 129 * 12, features: ["Upto 10 users", "Fully available vendor list", "Up to 20 consultant hotlist", "Single team"], button: "Contact Our Sales" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <div className="text-lg font-bold">Logo</div>
        <ul className="flex space-x-6">
          <li>About</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
        <div className="flex space-x-3">
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100">Login</button>
          <button className="bg-black text-white px-4 py-2 rounded">Get Started</button>
        </div>
      </nav>

      {/* Hero Section with constrained width to match pricing cards */}
      <div className="mt-10 flex justify-center">
        <div className="max-w-6xl w-full mx-6">
          <header className="text-center bg-gray-100 py-16 px-6 rounded-lg">
            <h1 className="text-6xl font-semibold">
              Supercharge your <br />
              workflows
            </h1>
            <p className="text-gray-500 mt-4">Perfectly tailored for every stage of your company.</p>
            <p className="text-gray-500">Get started today, no credit card needed.</p>
            <div className="flex mt-10 justify-center mt-6 space-x-4">
              <button className={`px-4 py-2 border ${billingCycle === "monthly" ? "bg-black text-white" : "bg-white text-black"}`} onClick={() => setBillingCycle("monthly")}>Billed Monthly</button>
              <button className={`px-4 py-2 border ${billingCycle === "annually" ? "bg-black text-white" : "bg-white text-black"}`} onClick={() => setBillingCycle("annually")}>Billed Annually</button>
            </div>
          </header>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid mt-24 grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {pricingPlans.map((plan, index) => (
          <div key={index} className={`p-6 border rounded-lg ${plan.highlight ? "bg-black text-white" : "bg-white shadow"}`}>
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="text-3xl font-bold mt-2">${billingCycle === "monthly" ? plan.monthly : plan.annually.toFixed(0)}</p>
            <p className="text-gray-500">per user/month, billed {billingCycle}</p>
            <ul className="mt-4 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className={`mt-4 w-full py-2 rounded ${plan.highlight ? "bg-white text-black" : "bg-black text-white"}`}>{plan.button}</button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center py-10">
        <p className="text-gray-500">Trusted by leading companies:</p>
        <div className="flex justify-center space-x-8 mt-4">
          <img src="/coinbase.png" alt="Coinbase" className="h-8" />
          <img src="/stripe.png" alt="Stripe" className="h-8" />
          <img src="/paypal.png" alt="PayPal" className="h-8" />
        </div>
      </footer>
    </div>
  );
};

export default Pricing;