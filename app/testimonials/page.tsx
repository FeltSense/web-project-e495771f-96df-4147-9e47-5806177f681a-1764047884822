'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Achievement {
  icon: string;
  label: string;
  color: string;
}

interface TransformationStats {
  weightChange: string;
  strengthGain: string;
  monthsCommitted: number;
  workoutsCompleted: number;
}

interface Testimonial {
  id: number;
  name: string;
  age: number;
  level: string;
  avatar: string;
  beforeImage: string;
  afterImage: string;
  quote: string;
  story: string;
  stats: TransformationStats;
  achievements: Achievement[];
  progressPercentage: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marcus Chen",
    age: 34,
    level: "WARRIOR",
    avatar: "https://i.pravatar.cc/150?img=12",
    beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop",
    quote: "I walked in intimidated and walked out unstoppable.",
    story: "Former desk warrior turned deadlift champion. The FitForce community didn't just change my body—they rewired my entire mindset. Every rep became a rebellion against my old self.",
    stats: {
      weightChange: "-45 lbs",
      strengthGain: "+180 lbs",
      monthsCommitted: 14,
      workoutsCompleted: 287
    },
    achievements: [
      { icon: "🏆", label: "First 5K", color: "bg-yellow-400" },
      { icon: "💪", label: "300lb Club", color: "bg-orange-600" },
      { icon: "🔥", label: "90 Day Streak", color: "bg-red-500" }
    ],
    progressPercentage: 92
  },
  {
    id: 2,
    name: "Sarah Rodriguez",
    age: 28,
    level: "CHAMPION",
    avatar: "https://i.pravatar.cc/150?img=47",
    beforeImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=500&fit=crop",
    quote: "From avoiding mirrors to competing in CrossFit. That's my FitForce story.",
    story: "Post-pregnancy, I felt lost in my own skin. FitForce gave me more than a workout plan—they gave me a squad that celebrated every small victory like it was an Olympic gold.",
    stats: {
      weightChange: "-32 lbs",
      strengthGain: "+95 lbs",
      monthsCommitted: 11,
      workoutsCompleted: 243
    },
    achievements: [
      { icon: "⚡", label: "First Pull-Up", color: "bg-blue-600" },
      { icon: "🎯", label: "Goal Crusher", color: "bg-orange-600" },
      { icon: "👑", label: "Class Leader", color: "bg-yellow-400" }
    ],
    progressPercentage: 88
  },
  {
    id: 3,
    name: "David "Tank" Morrison",
    age: 42,
    level: "LEGEND",
    avatar: "https://i.pravatar.cc/150?img=33",
    beforeImage: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=500&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=400&h=500&fit=crop",
    quote: "At 42, I'm in better shape than I was at 22. Age is just a number at FitForce.",
    story: "Diagnosed with pre-diabetes, I had a choice: change or decline. FitForce made change feel like an adventure, not a punishment. Now I'm coaching others through their own transformations.",
    stats: {
      weightChange: "-67 lbs",
      strengthGain: "+215 lbs",
      monthsCommitted: 18,
      workoutsCompleted: 412
    },
    achievements: [
      { icon: "🔱", label: "Mentor Badge", color: "bg-blue-600" },
      { icon: "⚔️", label: "Iron Will", color: "bg-orange-600" },
      { icon: "🌟", label: "Life Changed", color: "bg-yellow-400" }
    ],
    progressPercentage: 100
  }
];

export default function TestimonialsPage() {
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const toggleFlip = (id: number) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <section id="testimonials" className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-20 px-4 relative overflow-hidden">
        {/* Geometric Background Patterns - Weight Plate Inspired */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 border-8 border-orange-600 rounded-full"></div>
          <div className="absolute top-40 left-32 w-48 h-48 border-8 border-blue-600 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 border-8 border-yellow-400 rounded-full"></div>
          <div className="absolute bottom-40 right-40 w-32 h-32 border-8 border-orange-600 rounded-full"></div>
        </div>

        {/* Diagonal Stripes - Gym Floor Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(249, 115, 22, 0.3) 50px, rgba(249, 115, 22, 0.3) 51px)'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-3 bg-orange-600/20 border-2 border-orange-600 px-6 py-2 rounded-full">
                <span className="text-2xl">🏆</span>
                <span className="text-orange-400 font-bold text-sm tracking-widest">TRANSFORMATION UNLOCKED</span>
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6">
              REAL PEOPLE.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-yellow-400 to-orange-600">
                REAL RESULTS.
              </span>
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Every achievement badge earned. Every milestone crushed. Every excuse destroyed.
              <br />
              <span className="text-yellow-400 font-bold">These are the legends we&apos;ve forged.</span>
            </p>
          </div>

          {/* Live Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto">
            {[
              { value: "942", label: "Total Transformations", icon: "⚡" },
              { value: "12.4K", label: "Workouts This Month", icon: "💪" },
              { value: "87%", label: "Goal Achievement Rate", icon: "🎯" },
              { value: "4.9★", label: "Member Rating", icon: "⭐" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-blue-600/30 rounded-xl p-4 text-center transform hover:scale-105 transition-transform">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-black text-orange-600 mb-1">{stat.value}</div>
                <div className="text-xs text-blue-300 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group relative h-[700px]"
                style={{ perspective: '1000px' }}
                onClick={() => toggleFlip(testimonial.id)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 cursor-pointer`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: flippedCards[testimonial.id] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* FRONT - Transformation Images */}
                  <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden' }}>
                    <div className="h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border-4 border-orange-600 overflow-hidden shadow-2xl">
                      {/* Level Badge */}
                      <div className="absolute top-4 right-4 z-20 bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-xs font-black tracking-wider shadow-lg">
                        {testimonial.level}
                      </div>

                      {/* Before/After Split Images */}
                      <div className="relative h-[400px] flex">
                        <div className="w-1/2 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/50 z-10"></div>
                          <Image
                            src={testimonial.beforeImage}
                            alt="Before transformation"
                            fill
                            className="object-cover grayscale"
                          />
                          <div className="absolute bottom-4 left-4 z-20 bg-slate-900/90 px-3 py-1 rounded-lg">
                            <span className="text-blue-300 text-xs font-bold">BEFORE</span>
                          </div>
                        </div>
                        <div className="w-1/2 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900/50 z-10"></div>
                          <Image
                            src={testimonial.afterImage}
                            alt="After transformation"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute bottom-4 right-4 z-20 bg-orange-600 px-3 py-1 rounded-lg">
                            <span className="text-white text-xs font-bold">AFTER</span>
                          </div>
                        </div>
                      </div>

                      {/* Stats Grid */}
                      <div className="p-6 space-y-4">
                        {/* Profile */}
                        <div className="flex items-center gap-4">
                          <div className="relative w-16 h-16 rounded-full border-4 border-orange-600 overflow-hidden">
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-black text-white">{testimonial.name}</h3>
                            <p className="text-blue-300 text-sm">Age {testimonial.age} • Member</p>
                          </div>
                        </div>

                        {/* Quote */}
                        <blockquote className="text-yellow-400 font-bold italic text-lg leading-tight">
                          &quot;{testimonial.quote}&quot;
                        </blockquote>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-slate-950/50 rounded-lg p-3 border border-orange-600/30">
                            <div className="text-orange-600 text-2xl font-black">{testimonial.stats.weightChange}</div>
                            <div className="text-blue-300 text-xs uppercase">Weight Change</div>
                          </div>
                          <div className="bg-slate-950/50 rounded-lg p-3 border border-blue-600/30">
                            <div className="text-blue-400 text-2xl font-black">{testimonial.stats.strengthGain}</div>
                            <div className="text-blue-300 text-xs uppercase">Strength Gain</div>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div>
                          <div className="flex justify-between text-xs text-blue-300 mb-2">
                            <span className="font-bold">TRANSFORMATION PROGRESS</span>
                            <span className="text-yellow-400 font-black">{testimonial.progressPercentage}%</span>
                          </div>
                          <div className="h-3 bg-slate-950 rounded-full overflow-hidden border border-blue-600/30">
                            <div
                              className="h-full bg-gradient-to-r from-orange-600 via-yellow-400 to-orange-600 rounded-full transition-all duration-1000"
                              style={{ width: `${testimonial.progressPercentage}%` }}
                            ></div>
                          </div>
                        </div>

                        {/* Click Indicator */}
                        <div className="text-center pt-2">
                          <span className="text-blue-400 text-xs font-bold animate-pulse">
                            👆 CLICK TO VIEW FULL STORY
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BACK - Full Story & Achievements */}
                  <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <div className="h-full bg-gradient-to-br from-blue-900 via-slate-900 to-orange-900 rounded-2xl border-4 border-yellow-400 overflow-hidden shadow-2xl p-6 flex flex-col">
                      {/* Header */}
                      <div className="text-center mb-4">
                        <div className="relative w-20 h-20 mx-auto mb-3 rounded-full border-4 border-yellow-400 overflow-hidden">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="text-2xl font-black text-white">{testimonial.name}&apos;s Journey</h3>
                        <div className="inline-block bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-xs font-black mt-2">
                          {testimonial.level} LEVEL UNLOCKED
                        </div>
                      </div>

                      {/* Full Story */}
                      <div className="bg-slate-950/50 rounded-xl p-4 mb-4 border border-yellow-400/30">
                        <p className="text-blue-100 text-sm leading-relaxed">
                          {testimonial.story}
                        </p>
                      </div>

                      {/* Achievement Badges */}
                      <div className="mb-4">
                        <h4 className="text-yellow-400 font-black text-xs uppercase tracking-wider mb-3">
                          🏅 Achievements Unlocked
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {testimonial.achievements.map((achievement, idx) => (
                            <div
                              key={idx}
                              className={`${achievement.color} rounded-lg px-3 py-2 flex items-center gap-2 shadow-lg transform hover:scale-110 transition-transform`}
                            >
                              <span className="text-xl">{achievement.icon}</span>
                              <span className="text-white text-xs font-bold">{achievement.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Detailed Stats */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-gradient-to-br from-orange-600/20 to-orange-600/5 rounded-lg p-3 border border-orange-600/50">
                          <div className="text-orange-400 text-xl font-black">{testimonial.stats.monthsCommitted}</div>
                          <div className="text-blue-200 text-xs">Months Committed</div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-600/20 to-blue-600/5 rounded-lg p-3 border border-blue-600/50">
                          <div className="text-blue-400 text-xl font-black">{testimonial.stats.workoutsCompleted}</div>
                          <div className="text-blue-200 text-xs">Workouts Done</div>
                        </div>
                      </div>

                      {/* XP Bar */}
                      <div className="bg-slate-950/50 rounded-xl p-4 border border-yellow-400/30">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">⚡</span>
                          <span className="text-yellow-400 font-black text-xs uppercase">Experience Points</span>
                        </div>
                        <div className="h-4 bg-slate-900 rounded-full overflow-hidden border-2 border-yellow-400/50">
                          <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-600 rounded-full animate-pulse"></div>
                        </div>
                        <div className="text-center text-white font-black text-xs mt-2">
                          LEVEL {testimonial.level} MAXED OUT
                        </div>
                      </div>

                      {/* Click Back Indicator */}
                      <div className="text-center mt-auto pt-4">
                        <span className="text-yellow-400 text-xs font-bold animate-pulse">
                          👆 CLICK TO FLIP BACK
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-orange-600 via-yellow-400 to-orange-600 rounded-2xl p-12 border-4 border-yellow-400 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              YOUR TRANSFORMATION STARTS NOW
            </h2>
            <p className="text-slate-800 text-xl font-bold mb-6 max-w-2xl mx-auto">
              Join the FitForce community and unlock your own achievement story. Every legend started as a beginner.
            </p>
            <button className="bg-slate-900 text-white px-12 py-5 rounded-full text-xl font-black uppercase tracking-wider hover:bg-blue-600 transform hover:scale-105 transition-all shadow-xl border-4 border-slate-900 hover:border-blue-600">
              🚀 Begin Your Journey
            </button>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </>
  );
}