'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b-2 border-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Geometric Accent */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              {/* Hexagon background */}
              <div className="w-12 h-12 bg-orange-600 transform rotate-45 group-hover:rotate-90 transition-transform duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-black text-xl transform -rotate-0 group-hover:scale-110 transition-transform duration-300">FF</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-black text-white tracking-tight">
                FIT<span className="text-orange-600">FORCE</span>
              </h1>
              <div className="h-1 w-0 group-hover:w-full bg-yellow-400 transition-all duration-300"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { name: 'SERVICES', href: '#services', icon: '💪' },
              { name: 'PRICING', href: '#pricing', icon: '🎯' },
              { name: 'CONTACT', href: '#contact', icon: '⚡' }
            ].map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-6 py-3 text-white font-bold tracking-wide group overflow-hidden"
              >
                {/* Animated background on hover */}
                <span className="absolute inset-0 bg-orange-600 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative flex items-center space-x-2">
                  <span className="text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">{link.icon}</span>
                  <span className="group-hover:text-yellow-400 transition-colors duration-300">{link.name}</span>
                </span>
                {/* Progress bar underneath */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
            
            {/* CTA Button with geometric accent */}
            <button className="ml-4 relative px-8 py-3 bg-orange-600 text-white font-black tracking-wide overflow-hidden group">
              <span className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative text-white group-hover:text-slate-900 transition-colors duration-300">
                START NOW
              </span>
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-blue-600 transform translate-x-1 -translate-y-1"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-600 transform -translate-x-1 translate-y-1"></div>
            </button>
          </div>

          {/* Mobile Hamburger - Gym Equipment Inspired */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-12 h-12 flex flex-col items-center justify-center space-y-1.5 group"
          >
            <span className={`w-8 h-1 bg-orange-600 transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`w-8 h-1 bg-yellow-400 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-8 h-1 bg-orange-600 transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu with slide animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2">
            {[
              { name: 'SERVICES', href: '#services', icon: '💪' },
              { name: 'PRICING', href: '#pricing', icon: '🎯' },
              { name: 'CONTACT', href: '#contact', icon: '⚡' }
            ].map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 text-white font-bold tracking-wide bg-slate-800 hover:bg-orange-600 transition-colors duration-300 border-l-4 border-transparent hover:border-yellow-400"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-xl">{link.icon}</span>
                <span>{link.name}</span>
              </a>
            ))}
            <button className="w-full px-4 py-4 bg-orange-600 text-white font-black tracking-wide hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300">
              START NOW
            </button>
          </div>
        </div>
      </div>

      {/* Decorative bottom accent line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
    </nav>
  );
}
