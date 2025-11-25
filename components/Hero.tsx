'use client';

import { useState } from 'react';
import Image from 'next/image';

type FitnessLevel = 'beginner' | 'intermediate' | 'advanced';

export default function Hero() {
  const [fitnessLevel, setFitnessLevel] = useState<FitnessLevel>('intermediate');

  const levelContent = {
    beginner: {
      title: 'START YOUR TRANSFORMATION',
      subtitle: 'Build Foundation • Learn Proper Form • Gain Confidence',
      cta: 'BEGIN JOURNEY',
      image: 'photo-1571019614242-c5c5dee9f50b',
      stats: { weeks: '0-12', focus: 'Foundation', intensity: '40%' },
      badge: '🌱 ROOKIE',
      color: 'blue-600'
    },
    intermediate: {
      title: 'UNLEASH YOUR POTENTIAL',
      subtitle: 'Build Muscle • Increase Endurance • Push Limits',
      cta: 'LEVEL UP',
      image: 'photo-1534438327276-14e5300c3a48',
      stats: { weeks: '12-24', focus: 'Strength', intensity: '70%' },
      badge: '💪 WARRIOR',
      color: 'orange-600'
    },
    advanced: {
      title: 'DOMINATE YOUR GOALS',
      subtitle: 'Peak Performance • Elite Training • Champion Mindset',
      cta: 'GO ELITE',
      image: 'photo-1583454110551-21f2fa2afe61',
      stats: { weeks: '24+', focus: 'Mastery', intensity: '95%' },
      badge: '🔥 CHAMPION',
      color: 'yellow-400'
    }
  };

  const currentLevel = levelContent[fitnessLevel];
  const progressPercentage = fitnessLevel === 'beginner' ? 33 : fitnessLevel === 'intermediate' ? 66 : 100;

  return (
    <section className="relative min-h-screen bg-slate-900 overflow-hidden pt-20">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-orange-600 transform rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-4 border-yellow-400 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 border-4 border-blue-600 transform -rotate-12"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-orange-600 transform rotate-45"></div>
      </div>

      {/* Dynamic Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={`https://images.unsplash.com/${currentLevel.image}?w=1920&q=80`}
          alt="Fitness transformation"
          fill
          className="object-cover transition-opacity duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-180px)]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Fitness Level Badge */}
            <div className="inline-flex items-center space-x-2 bg-slate-800/80 backdrop-blur-sm px-6 py-3 border-l-4 border-orange-600">
              <span className="text-2xl">{currentLevel.badge}</span>
              <span className="text-white font-bold tracking-wider">YOUR LEVEL</span>
            </div>

            {/* Main Heading with Animated Underline */}
            <div>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight">
                {currentLevel.title.split(' ').map((word, index) => (
                  <span
                    key={index}
                    className={`inline-block ${index === currentLevel.title.split(' ').length - 1 ? `text-${currentLevel.color}` : ''} hover:scale-105 transition-transform duration-300 cursor-default`}
                  >
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <div className={`h-2 w-32 bg-${currentLevel.color} mt-4 animate-pulse`}></div>
            </div>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 font-semibold tracking-wide">
              {currentLevel.subtitle}
            </p>

            {/* Stats Grid - Game-like UI */}
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(currentLevel.stats).map(([key, value]) => (
                <div key={key} className="bg-slate-800/60 backdrop-blur-sm p-4 border-2 border-slate-700 hover:border-orange-600 transition-all duration-300 group">
                  <div className="text-orange-600 text-sm font-bold uppercase tracking-wider mb-1">{key}</div>
                  <div className="text-white text-2xl font-black group-hover:text-yellow-400 transition-colors duration-300">{value}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="relative px-10 py-5 bg-orange-600 text-white font-black text-lg tracking-wider overflow-hidden group">
                <span className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="relative flex items-center space-x-2 group-hover:text-slate-900 transition-colors duration-300">
                  <span>{currentLevel.cta}</span>
                  <span className="text-2xl">→</span>
                </span>
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 bg-blue-600 transform -translate-x-1 -translate-y-1"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-blue-600 transform translate-x-1 translate-y-1"></div>
              </button>

              <button className="px-10 py-5 bg-transparent border-3 border-white text-white font-black text-lg tracking-wider hover:bg-white hover:text-slate-900 transition-all duration-300">
                FREE TRIAL
              </button>
            </div>
          </div>

          {/* Right Content - Interactive Level Selector */}
          <div className="space-y-8">
            {/* Level Selector Card */}
            <div className="bg-slate-800/80 backdrop-blur-lg p-8 border-2 border-orange-600 shadow-2xl">
              <h3 className="text-2xl font-black text-white mb-6 flex items-center space-x-3">
                <span className="text-3xl">🎯</span>
                <span>SELECT YOUR FITNESS LEVEL</span>
              </h3>

              {/* Interactive Level Buttons */}
              <div className="space-y-4 mb-8">
                {(['beginner', 'intermediate', 'advanced'] as FitnessLevel[]).map((level) => (
                  <button
                    key={level}
                    onClick={() => setFitnessLevel(level)}
                    className={`w-full p-5 text-left font-bold text-lg tracking-wide transition-all duration-300 border-l-8 ${
                      fitnessLevel === level
                        ? `bg-${levelContent[level].color} border-yellow-400 text-white scale-105 shadow-lg`
                        : 'bg-slate-700/50 border-slate-600 text-gray-300 hover:bg-slate-700 hover:border-orange-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{levelContent[level].badge}</span>
                        <span className="uppercase">{level}</span>
                      </div>
                      {fitnessLevel === level && (
                        <span className="text-2xl animate-bounce">✓</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Progress Bar - Visual Journey */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm font-bold text-gray-400">
                  <span>YOUR PROGRESS</span>
                  <span className="text-orange-600">{progressPercentage}%</span>
                </div>
                <div className="relative h-6 bg-slate-900 overflow-hidden">
                  {/* Progress fill */}
                  <div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 via-orange-600 to-yellow-400 transition-all duration-700`}
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                  {/* Animated stripes */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                  {/* Markers */}
                  <div className="absolute inset-0 flex items-center justify-between px-2">
                    <span className="text-white text-xs font-bold">START</span>
                    <span className="text-white text-xs font-bold">ELITE</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs font-bold text-center">
                  <div className={fitnessLevel === 'beginner' ? 'text-blue-400' : 'text-gray-600'}>BEGINNER</div>
                  <div className={fitnessLevel === 'intermediate' ? 'text-orange-400' : 'text-gray-600'}>INTERMEDIATE</div>
                  <div className={fitnessLevel === 'advanced' ? 'text-yellow-400' : 'text-gray-600'}>ADVANCED</div>
                </div>
              </div>
            </div>

            {/* Achievement Unlock Preview */}
            <div className="bg-gradient-to-br from-orange-600 to-yellow-400 p-1">
              <div className="bg-slate-900 p-6">
                <div className="flex items-center space-x-4">
                  <div className="text-5xl animate-pulse">🏆</div>
                  <div>
                    <div className="text-yellow-400 font-black text-sm tracking-wider">UNLOCK ACHIEVEMENT</div>
                    <div className="text-white font-bold text-lg">Join 10,000+ Members Transforming</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-orange-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
