"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [selectedGoal, setSelectedGoal] = useState<string>('');
  const [fitnessLevel, setFitnessLevel] = useState<string>('');
  const [matchedTrainer, setMatchedTrainer] = useState<any>(null);

  const fitnessGoals = [
    { id: 'strength', label: 'Build Strength', icon: '💪', color: 'from-orange-500 to-red-600', trainer: 'Marcus Steel' },
    { id: 'cardio', label: 'Cardio Endurance', icon: '🏃', color: 'from-blue-500 to-cyan-600', trainer: 'Sarah Sprint' },
    { id: 'weight', label: 'Weight Loss', icon: '🔥', color: 'from-yellow-500 to-orange-600', trainer: 'Alex Burn' },
    { id: 'muscle', label: 'Muscle Gain', icon: '🏋️', color: 'from-purple-500 to-pink-600', trainer: 'Diana Power' },
    { id: 'flexibility', label: 'Flexibility', icon: '🧘', color: 'from-green-500 to-teal-600', trainer: 'Zen Master Lee' },
    { id: 'athletic', label: 'Athletic Performance', icon: '⚡', color: 'from-red-500 to-orange-600', trainer: 'Coach Thunder' },
  ];

  const experienceLevels = [
    { id: 'beginner', label: 'Beginner', xp: '0-500 XP', bar: 25 },
    { id: 'intermediate', label: 'Intermediate', xp: '500-2000 XP', bar: 50 },
    { id: 'advanced', label: 'Advanced', xp: '2000-5000 XP', bar: 75 },
    { id: 'elite', label: 'Elite', xp: '5000+ XP', bar: 100 },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const formObject: any = {};
    formData.forEach((value, key) => { formObject[key] = value; });
    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_data: formObject,
          form_id: 'contact_form',
          project_id: 'e495771f-96df-4147-9e47-5806177f681a',
          founder_id: '',
          submitted_at: new Date().toISOString()
        })
      });
      if (!response.ok) throw new Error('Failed');
      
      // Match trainer based on goal
      const goal = fitnessGoals.find(g => g.id === selectedGoal);
      if (goal) {
        setMatchedTrainer({
          name: goal.trainer,
          specialty: goal.label,
          avatar: `https://i.pravatar.cc/150?img=${fitnessGoals.indexOf(goal) + 10}`
        });
      }
      
      setStatus('success');
    } catch (error) { 
      setStatus('error'); 
    }
  };

  const handleGoalSelect = (goalId: string) => {
    setSelectedGoal(goalId);
  };

  const handleLevelSelect = (levelId: string) => {
    setFitnessLevel(levelId);
  };

  return (
    <section id="contact" className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20 overflow-hidden">
      {/* Geometric Background Pattern - Weight Plate Inspired */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-8 border-orange-600"></div>
        <div className="absolute top-20 left-20 w-48 h-48 rounded-full border-4 border-yellow-400"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full border-8 border-blue-600"></div>
        <div className="absolute bottom-32 right-32 w-56 h-56 rounded-full border-4 border-orange-600"></div>
        
        {/* Barbell Silhouette */}
        <div className="absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-20"></div>
        <div className="absolute top-1/2 left-10 w-8 h-24 bg-orange-600 opacity-20 -translate-y-1/2 rounded"></div>
        <div className="absolute top-1/2 right-10 w-8 h-24 bg-orange-600 opacity-20 -translate-y-1/2 rounded"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with Progress Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-full mb-4 font-bold uppercase text-sm tracking-wider transform -rotate-2 shadow-lg">
            <span className="text-yellow-400">⚡</span>
            <span>Fitness Assessment</span>
            <span className="text-yellow-400">⚡</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
            START YOUR
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-yellow-400 to-orange-600 animate-pulse">
              TRANSFORMATION
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Complete your fitness profile and get matched with the perfect trainer for your goals
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - Assessment Form */}
            <div className="bg-slate-800 rounded-2xl p-8 border-4 border-blue-600 shadow-2xl relative overflow-hidden">
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-600 to-yellow-400 opacity-20 rounded-bl-full"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {/* Step 1: Fitness Goals */}
                <div>
                  <label className="block text-white font-bold mb-3 text-lg flex items-center gap-2">
                    <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                    SELECT YOUR PRIMARY GOAL
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {fitnessGoals.map((goal) => (
                      <button
                        key={goal.id}
                        type="button"
                        onClick={() => handleGoalSelect(goal.id)}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                          selectedGoal === goal.id
                            ? `bg-gradient-to-br ${goal.color} border-yellow-400 shadow-lg shadow-orange-600/50`
                            : 'bg-slate-700 border-slate-600 hover:border-orange-600'
                        }`}
                      >
                        <div className="text-3xl mb-1">{goal.icon}</div>
                        <div className="text-white font-bold text-sm">{goal.label}</div>
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="goal" value={selectedGoal} />
                </div>

                {/* Step 2: Experience Level */}
                <div>
                  <label className="block text-white font-bold mb-3 text-lg flex items-center gap-2">
                    <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                    CHOOSE YOUR EXPERIENCE LEVEL
                  </label>
                  <div className="space-y-3">
                    {experienceLevels.map((level) => (
                      <button
                        key={level.id}
                        type="button"
                        onClick={() => handleLevelSelect(level.id)}
                        className={`w-full p-4 rounded-xl border-2 transition-all duration-300 ${
                          fitnessLevel === level.id
                            ? 'bg-gradient-to-r from-orange-600 to-yellow-400 border-yellow-400 shadow-lg'
                            : 'bg-slate-700 border-slate-600 hover:border-blue-600'
                        }`}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-bold">{level.label}</span>
                          <span className="text-yellow-400 text-sm font-mono">{level.xp}</span>
                        </div>
                        <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-yellow-400 to-orange-600 h-full transition-all duration-500"
                            style={{ width: `${level.bar}%` }}
                          ></div>
                        </div>
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="experience" value={fitnessLevel} />
                </div>

                {/* Step 3: Contact Info */}
                <div className="border-t-2 border-slate-700 pt-6">
                  <label className="block text-white font-bold mb-3 text-lg flex items-center gap-2">
                    <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                    YOUR CONTACT DETAILS
                  </label>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-blue-300 mb-2 font-semibold text-sm uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600/50 transition-all"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block text-blue-300 mb-2 font-semibold text-sm uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600/50 transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-blue-300 mb-2 font-semibold text-sm uppercase tracking-wide">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600/50 transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div>
                      <label className="block text-blue-300 mb-2 font-semibold text-sm uppercase tracking-wide">
                        Additional Notes / Questions
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600/50 transition-all resize-none"
                        placeholder="Tell us about your fitness journey, any injuries, or specific questions..."
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading' || !selectedGoal || !fitnessLevel}
                  className="w-full bg-gradient-to-r from-orange-600 to-yellow-400 text-white font-black py-4 rounded-xl uppercase tracking-wider text-lg hover:shadow-2xl hover:shadow-orange-600/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border-4 border-yellow-400"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      PROCESSING...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      🚀 BEGIN TRANSFORMATION
                    </span>
                  )}
                </button>

                {/* Status Messages */}
                {status === 'error' && (
                  <div className="bg-red-600 text-white p-4 rounded-xl border-2 border-red-400 font-bold text-center">
                    ❌ Submission failed. Please try again!
                  </div>
                )}
              </form>
            </div>

            {/* Right Side - Trainer Match & Info */}
            <div className="space-y-6">
              {/* Success Message with Trainer Match */}
              {status === 'success' && matchedTrainer ? (
                <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 border-4 border-yellow-400 shadow-2xl animate-pulse">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-3xl font-black text-white mb-2">ASSESSMENT COMPLETE!</h3>
                    <p className="text-green-100 text-lg mb-6">You've been matched with a trainer!</p>
                    
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border-2 border-white/30">
                      <div className="relative w-32 h-32 mx-auto mb-4">
                        <Image
                          src={matchedTrainer.avatar}
                          alt={matchedTrainer.name}
                          width={128}
                          height={128}
                          className="rounded-full border-4 border-yellow-400 shadow-xl"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl border-4 border-white">
                          ⚡
                        </div>
                      </div>
                      <h4 className="text-2xl font-black text-white mb-1">{matchedTrainer.name}</h4>
                      <p className="text-yellow-400 font-bold">{matchedTrainer.specialty} Specialist</p>
                    </div>

                    <div className="mt-6 text-white font-bold">
                      We'll contact you within 24 hours to schedule your first session!
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* Motivation Card */}
                  <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-8 border-4 border-yellow-400 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 text-9xl opacity-10">💪</div>
                    <h3 className="text-3xl font-black text-white mb-4 relative z-10">WHY FITFORCE?</h3>
                    <div className="space-y-4 relative z-10">
                      <div className="flex items-start gap-3">
                        <div className="bg-yellow-400 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center font-black flex-shrink-0">✓</div>
                        <p className="text-white font-bold">Personalized training programs matched to YOUR goals</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-yellow-400 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center font-black flex-shrink-0">✓</div>
                        <p className="text-white font-bold">Expert trainers with proven transformation records</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-yellow-400 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center font-black flex-shrink-0">✓</div>
                        <p className="text-white font-bold">24/7 access to state-of-the-art equipment</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-yellow-400 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center font-black flex-shrink-0">✓</div>
                        <p className="text-white font-bold">Community support that keeps you accountable</p>
                      </div>
                    </div>
                  </div>

                  {/* Stats Dashboard */}
                  <div className="bg-slate-800 rounded-2xl p-8 border-4 border-blue-600 shadow-2xl">
                    <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
                      <span className="text-yellow-400">📊</span>
                      LIVE GYM ACTIVITY
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-xl border-2 border-blue-400">
                        <div className="text-4xl font-black text-white mb-1">127</div>
                        <div className="text-blue-200 text-sm font-bold uppercase">Active Members</div>
                        <div className="mt-2 w-full bg-blue-900 rounded-full h-2">
                          <div className="bg-yellow-400 h-full rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-4 rounded-xl border-2 border-orange-400">
                        <div className="text-4xl font-black text-white mb-1">34</div>
                        <div className="text-orange-200 text-sm font-bold uppercase">Classes Today</div>
                        <div className="mt-2 w-full bg-orange-900 rounded-full h-2">
                          <div className="bg-yellow-400 h-full rounded-full" style={{ width: '68%' }}></div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-green-600 to-green-700 p-4 rounded-xl border-2 border-green-400">
                        <div className="text-4xl font-black text-white mb-1">18K</div>
                        <div className="text-green-200 text-sm font-bold uppercase">Lbs Lifted Today</div>
                        <div className="mt-2 w-full bg-green-900 rounded-full h-2">
                          <div className="bg-yellow-400 h-full rounded-full" style={{ width: '92%' }}></div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-4 rounded-xl border-2 border-purple-400">
                        <div className="text-4xl font-black text-white mb-1">4.9</div>
                        <div className="text-purple-200 text-sm font-bold uppercase">Avg Rating</div>
                        <div className="flex gap-1 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-400">⭐</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Contact Info */}
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border-4 border-yellow-400 shadow-2xl">
                    <h4 className="text-xl font-black text-white mb-4 flex items-center gap-2">
                      <span className="text-orange-600">📞</span>
                      NEED IMMEDIATE HELP?
                    </h4>
                    <div className="space-y-3">
                      <a href="tel:+15551234567" className="flex items-center gap-3 text-blue-300 hover:text-orange-600 transition-colors font-bold">
                        <span className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center">📞</span>
                        <span>(555) 123-4567</span>
                      </a>
                      <a href="mailto:info@fitforce.gym" className="flex items-center gap-3 text-blue-300 hover:text-orange-600 transition-colors font-bold">
                        <span className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center">📧</span>
                        <span>info@fitforce.gym</span>
                      </a>
                      <div className="flex items-center gap-3 text-blue-300 font-bold">
                        <span className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center">📍</span>
                        <span>123 Strength Ave, Muscle City</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Achievement Banner */}
        <div className="mt-12 bg-gradient-to-r from-yellow-400 via-orange-600 to-yellow-400 rounded-2xl p-6 text-center border-4 border-white shadow-2xl transform -rotate-1">
          <p className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide">
            🏆 Join 10,000+ Members Who Unlocked Their Potential! 🏆
          </p>
        </div>
      </div>
    </section>
  );
}