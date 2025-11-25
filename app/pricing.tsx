"use client";

import Image from "next/image";
import { useState } from "react";

export default function Pricing() {
  const [selectedTier, setSelectedTier] = useState(1);
  const [hoveredAbility, setHoveredAbility] = useState<string | null>(null);

  const tiers = [
    {
      level: 0,
      name: "ROOKIE",
      subtitle: "Foundation Builder",
      price: "FREE",
      priceDetail: "Trial Week",
      xpBar: 25,
      color: "blue-600",
      glowColor: "blue-400",
      abilities: [
        { name: "Gym Access", unlocked: true, icon: "🏋️" },
        { name: "Basic Equipment", unlocked: true, icon: "💪" },
        { name: "Locker Access", unlocked: true, icon: "🔐" },
        { name: "Group Classes", unlocked: false, icon: "👥" },
        { name: "Personal Training", unlocked: false, icon: "🎯" },
        { name: "Nutrition Plan", unlocked: false, icon: "🥗" },
      ],
      badge: "STARTER",
      popular: false,
    },
    {
      level: 1,
      name: "ATHLETE",
      subtitle: "Power Unleashed",
      price: "$29",
      priceDetail: "per month",
      xpBar: 75,
      color: "orange-600",
      glowColor: "orange-400",
      abilities: [
        { name: "24/7 Gym Access", unlocked: true, icon: "🏋️" },
        { name: "All Equipment Zones", unlocked: true, icon: "💪" },
        { name: "Premium Lockers", unlocked: true, icon: "🔐" },
        { name: "Unlimited Classes", unlocked: true, icon: "👥" },
        { name: "Monthly PT Session", unlocked: true, icon: "🎯" },
        { name: "Custom Nutrition Plan", unlocked: true, icon: "🥗" },
        { name: "Recovery Zone", unlocked: true, icon: "🧘" },
        { name: "Progress Tracking App", unlocked: true, icon: "📊" },
      ],
      badge: "BEST VALUE",
      popular: true,
    },
    {
      level: 2,
      name: "CHAMPION",
      subtitle: "Elite Mastery",
      price: "$99",
      priceDetail: "per month",
      xpBar: 100,
      color: "yellow-400",
      glowColor: "yellow-300",
      abilities: [
        { name: "VIP 24/7 Access", unlocked: true, icon: "🏋️" },
        { name: "All Equipment + Private Area", unlocked: true, icon: "💪" },
        { name: "Executive Locker", unlocked: true, icon: "🔐" },
        { name: "Priority Class Booking", unlocked: true, icon: "👥" },
        { name: "Weekly PT Sessions", unlocked: true, icon: "🎯" },
        { name: "Personalized Meal Prep", unlocked: true, icon: "🥗" },
        { name: "Spa & Recovery Suite", unlocked: true, icon: "🧘" },
        { name: "AI Performance Analytics", unlocked: true, icon: "📊" },
        { name: "Guest Passes (5/month)", unlocked: true, icon: "🎟️" },
        { name: "Supplement Discount", unlocked: true, icon: "💊" },
      ],
      badge: "PREMIUM",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-24 overflow-hidden">
      {/* Geometric Background Pattern - Weight Plate Inspired */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border-4 border-white"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            <div className="absolute inset-4 rounded-full border-2 border-white"></div>
          </div>
        ))}
      </div>

      {/* Hexagon Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - RPG Style */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 bg-orange-600 text-white px-6 py-2 rounded-full font-bold text-sm transform -rotate-1">
              <span className="text-yellow-400">⚡</span>
              <span>CHOOSE YOUR TRAINING LEVEL</span>
              <span className="text-yellow-400">⚡</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
            UNLOCK YOUR
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-600">
              POTENTIAL
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto font-medium">
            Each tier unlocks new abilities and services. Level up your fitness journey with RPG-style progression.
          </p>
        </div>

        {/* Tier Selection Pills */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {tiers.map((tier, index) => (
            <button
              key={index}
              onClick={() => setSelectedTier(index)}
              className={`px-6 py-3 rounded-lg font-bold text-sm transition-all transform hover:scale-105 ${
                selectedTier === index
                  ? `bg-${tier.color} text-white shadow-lg shadow-${tier.glowColor}/50`
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{tier.badge === "STARTER" ? "🥉" : tier.badge === "BEST VALUE" ? "🥈" : "🥇"}</span>
                <span>LVL {tier.level} - {tier.name}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Pricing Cards - Skill Tree Layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-500 ${
                selectedTier === index ? "scale-105" : "scale-95 opacity-60"
              } ${tier.popular ? "md:-mt-8" : ""}`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full font-black text-xs shadow-lg animate-pulse">
                    ⭐ {tier.badge} ⭐
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border-4 transition-all duration-300 overflow-hidden ${
                  tier.popular
                    ? "border-orange-500 shadow-2xl shadow-orange-500/30"
                    : "border-slate-700 hover:border-slate-600"
                }`}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${tier.color}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                {/* Level Badge */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`text-${tier.color} font-black text-sm tracking-wider`}>
                      LEVEL {tier.level}
                    </div>
                    <div className={`w-12 h-12 rounded-lg bg-${tier.color} flex items-center justify-center text-2xl transform rotate-6 shadow-lg`}>
                      {tier.badge === "STARTER" ? "🔰" : tier.badge === "BEST VALUE" ? "⚡" : "👑"}
                    </div>
                  </div>

                  {/* Tier Name */}
                  <h3 className="text-4xl font-black text-white mb-2">{tier.name}</h3>
                  <p className="text-slate-400 font-medium mb-6">{tier.subtitle}</p>

                  {/* XP Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-xs font-bold text-slate-400 mb-2">
                      <span>POWER LEVEL</span>
                      <span>{tier.xpBar}%</span>
                    </div>
                    <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-${tier.color} to-${tier.glowColor} transition-all duration-1000 relative`}
                        style={{ width: `${tier.xpBar}%` }}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-8 pb-8 border-b-2 border-slate-700">
                    <div className="flex items-end gap-2">
                      <span className={`text-6xl font-black text-${tier.color}`}>{tier.price}</span>
                      <span className="text-slate-400 font-medium mb-2">{tier.priceDetail}</span>
                    </div>
                  </div>

                  {/* Abilities - Skill Tree */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-black text-slate-400 tracking-wider mb-4">UNLOCKED ABILITIES</div>
                    {tier.abilities.map((ability, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                          ability.unlocked
                            ? "bg-slate-800/50 hover:bg-slate-700/50"
                            : "bg-slate-900/30 opacity-40"
                        }`}
                        onMouseEnter={() => setHoveredAbility(`${index}-${idx}`)}
                        onMouseLeave={() => setHoveredAbility(null)}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center text-lg ${
                            ability.unlocked
                              ? `bg-${tier.color} shadow-lg`
                              : "bg-slate-800"
                          }`}
                        >
                          {ability.unlocked ? ability.icon : "🔒"}
                        </div>
                        <span
                          className={`font-bold text-sm ${
                            ability.unlocked ? "text-white" : "text-slate-600"
                          }`}
                        >
                          {ability.name}
                        </span>
                        {ability.unlocked && hoveredAbility === `${index}-${idx}` && (
                          <span className="ml-auto text-green-400 text-xs font-black">✓ ACTIVE</span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  {tier.popular ? (
                    <button
                      onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
                      className="w-full bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-black py-5 rounded-xl hover:from-orange-500 hover:to-yellow-400 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-orange-500/50 text-lg"
                    >
                      <div className="flex items-center justify-center gap-3">
                        <span>⚡</span>
                        <span>START TRAINING NOW</span>
                        <span>⚡</span>
                      </div>
                    </button>
                  ) : (
                    <button className="w-full bg-slate-700 text-white font-bold py-5 rounded-xl hover:bg-slate-600 transition-all">
                      {tier.level === 0 ? "Start Free Trial" : "Contact for Elite"}
                    </button>
                  )}
                </div>

                {/* Corner Decorations */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${tier.color} opacity-5 rounded-bl-full`}></div>
                <div className={`absolute bottom-0 left-0 w-24 h-24 bg-${tier.color} opacity-5 rounded-tr-full`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Value Props - Achievement Style */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {[
            { icon: "🎯", title: "NO COMMITMENT", desc: "Cancel anytime", color: "orange" },
            { icon: "💪", title: "INSTANT ACCESS", desc: "Start today", color: "blue" },
            { icon: "🏆", title: "PROVEN RESULTS", desc: "2,847+ transformations", color: "yellow" },
            { icon: "🔥", title: "MONEY BACK", desc: "30-day guarantee", color: "orange" },
          ].map((prop, idx) => (
            <div
              key={idx}
              className="bg-slate-900/50 backdrop-blur-sm border-2 border-slate-800 rounded-xl p-6 hover:border-orange-600 transition-all group hover:scale-105"
            >
              <div className={`text-5xl mb-3 transform group-hover:scale-110 transition-transform`}>
                {prop.icon}
              </div>
              <div className="text-white font-black text-lg mb-1">{prop.title}</div>
              <div className="text-slate-400 text-sm font-medium">{prop.desc}</div>
            </div>
          ))}
        </div>

        {/* Final CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20">
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </div>
          <div className="relative z-10">
            <div className="text-white font-black text-4xl md:text-5xl mb-4">
              READY TO LEVEL UP?
            </div>
            <p className="text-white/90 text-xl mb-8 font-medium">
              Join 2,847+ members who transformed their lives at FitForce
            </p>
            <button
              onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
              className="bg-slate-900 text-white font-black px-12 py-6 rounded-xl hover:bg-slate-800 transition-all transform hover:scale-105 shadow-2xl text-xl"
            >
              <div className="flex items-center gap-3">
                <span>🚀</span>
                <span>START FOR $29/MONTH</span>
                <span>🚀</span>
              </div>
            </button>
            <p className="text-white/70 text-sm mt-4 font-medium">No setup fee • Cancel anytime • First class free</p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex justify-center items-center gap-8 flex-wrap text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-xl">✓</span>
            <span className="font-bold">Secure Payment</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-xl">✓</span>
            <span className="font-bold">Equipment Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-xl">✓</span>
            <span className="font-bold">Certified Trainers</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-xl">✓</span>
            <span className="font-bold">24/7 Support</span>
          </div>
        </div>
      </div>

      {/* Bottom Geometric Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-600 via-yellow-400 to-orange-600"></div>
    </section>
  );
}
