'use client';

import React, { useState, useEffect } from 'react';
import { Dumbbell, Users, Zap, TrendingUp, Award, Clock, Target, Flame } from 'lucide-react';

export default function Footer() {
  const [liveStats, setLiveStats] = useState({
    activeMembers: 47,
    classesInSession: 3,
    caloriesBurned: 128450,
    weeklyGoals: 89
  });

  // Simulate live updates for that active gym feel
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        activeMembers: Math.floor(40 + Math.random() * 25),
        classesInSession: Math.floor(2 + Math.random() * 4),
        caloriesBurned: prev.caloriesBurned + Math.floor(Math.random() * 500),
        weeklyGoals: Math.min(100, prev.weeklyGoals + Math.floor(Math.random() * 2))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const quickLinks = [
    { name: 'Classes', href: '#classes' },
    { name: 'Membership', href: '#membership' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Schedule', href: '#schedule' }
  ];

  const achievements = [
    { icon: Award, label: 'Members This Week', value: '342', color: 'text-yellow-400' },
    { icon: Flame, label: 'Active Streak', value: '156 Days', color: 'text-orange-600' },
    { icon: Target, label: 'Goals Completed', value: '1,247', color: 'text-blue-400' }
  ];

  return (
    <footer className="bg-slate-900 relative overflow-hidden">
      {/* Geometric background pattern - gym equipment silhouettes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-8 border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-8 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border-8 border-white rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-white transform rotate-45"></div>
        <div className="absolute bottom-40 right-40 w-16 h-16 bg-white transform rotate-12"></div>
      </div>

      {/* Live Activity Dashboard Bar */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-400 py-1">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-8 text-white text-sm font-bold overflow-hidden">
            <div className="flex items-center gap-2 animate-pulse">
              <Zap className="w-4 h-4" />
              <span>LIVE NOW</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>{liveStats.activeMembers} Members Active</span>
            </div>
            <div className="flex items-center gap-2">
              <Dumbbell className="w-4 h-4" />
              <span>{liveStats.classesInSession} Classes in Session</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Flame className="w-4 h-4" />
              <span>{liveStats.caloriesBurned.toLocaleString()} Calories Burned Today</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Stats Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Live Gym Stats Panel */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Dumbbell className="w-8 h-8 text-orange-600" />
              <div>
                <h3 className="text-2xl font-bold text-white">FitForce Gym</h3>
                <p className="text-blue-400 text-sm font-semibold">POWERED BY COMMUNITY ENERGY</p>
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-slate-800 border-2 border-slate-700 rounded-lg p-4 hover:border-orange-600 transition-all duration-300 group"
                >
                  <achievement.icon className={`w-6 h-6 ${achievement.color} mb-2 group-hover:scale-110 transition-transform`} />
                  <div className="text-2xl font-bold text-white mb-1">{achievement.value}</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide">{achievement.label}</div>
                </div>
              ))}
            </div>

            {/* Weekly Progress Bar */}
            <div className="bg-slate-800 border-2 border-slate-700 rounded-lg p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-yellow-400" />
                  <span className="text-white font-bold">Weekly Gym Energy</span>
                </div>
                <span className="text-orange-600 font-bold text-lg">{liveStats.weeklyGoals}%</span>
              </div>
              <div className="relative h-4 bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-400 transition-all duration-1000 ease-out"
                  style={{ width: `${liveStats.weeklyGoals}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
              <p className="text-slate-400 text-xs mt-2">Community goal: 500 workouts this week 🔥</p>
            </div>

            <p className="text-slate-400 mt-6 leading-relaxed">
              Transform your body, elevate your mind, and join a community that pushes limits. 
              At FitForce, every rep counts, every goal matters, and every member is a champion in the making.
            </p>
          </div>

          {/* Quick Links & Live Classes */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-orange-600" />
              Quick Access
            </h4>
            <ul className="space-y-3 mb-8">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-slate-300 hover:text-orange-600 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full group-hover:bg-orange-600 transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Live Classes Indicator */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-orange-600/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="relative">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></span>
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
                </div>
                <span className="text-white font-bold text-sm">LIVE CLASSES NOW</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">HIIT Training</span>
                  <span className="text-yellow-400 font-bold">23 mins left</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">Yoga Flow</span>
                  <span className="text-yellow-400 font-bold">45 mins left</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">Strength Pro</span>
                  <span className="text-yellow-400 font-bold">12 mins left</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Social & Copyright */}
        <div className="border-t-2 border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © 2024 FitForce Gym. All rights reserved. <span className="text-orange-600 font-bold">Level Up Your Life.</span>
            </div>
            
            {/* Social Links as Achievement Badges */}
            <div className="flex items-center gap-3">
              <span className="text-slate-500 text-xs uppercase tracking-wider mr-2">Join the Force:</span>
              {['Instagram', 'Facebook', 'Twitter', 'YouTube'].map((social, index) => (
                <a 
                  key={index}
                  href={`#${social.toLowerCase()}`}
                  className="w-10 h-10 bg-slate-800 border-2 border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:border-orange-600 hover:text-orange-600 transition-all duration-300 hover:scale-110 group relative"
                >
                  <span className="text-xs font-bold">{social[0]}</span>
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full text-[8px] text-slate-900 font-bold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    +
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Extra Motivation Strip */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-yellow-400 text-white px-6 py-2 rounded-full text-sm font-bold">
            <Zap className="w-4 h-4" />
            <span>YOUR NEXT LEVEL IS ONE WORKOUT AWAY</span>
            <Zap className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Animated Energy Pulse Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-600 to-transparent opacity-50">
        <div className="h-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
      </div>
    </footer>
  );
}