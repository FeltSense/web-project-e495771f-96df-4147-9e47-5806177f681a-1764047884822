'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Dumbbell, 
  Users, 
  Clock, 
  Trophy, 
  Zap, 
  Target,
  Calendar,
  CheckCircle2,
  Star,
  TrendingUp,
  Award,
  Activity
} from 'lucide-react';

export default function Services() {
  const [activeZone, setActiveZone] = useState<string | null>(null);
  const [selectedTrainer, setSelectedTrainer] = useState<number | null>(null);

  const gymZones = [
    {
      id: 'cardio',
      name: 'Cardio Zone',
      icon: Activity,
      availability: '85% Available',
      nextClass: 'HIIT Blast - 3:00 PM',
      capacity: '12/15 spots',
      image: 'https://images.unsplash.com/photo-1538805091671-e2e6d14f0c93?w=800&h=600&fit=crop',
      color: 'orange',
      position: 'col-span-2 row-span-2'
    },
    {
      id: 'weights',
      name: 'Strength Training',
      icon: Dumbbell,
      availability: '92% Available',
      nextClass: 'Power Lifting - 4:30 PM',
      capacity: '8/10 spots',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
      color: 'blue',
      position: 'col-span-2 row-span-3'
    },
    {
      id: 'studio',
      name: 'Group Classes',
      icon: Users,
      availability: '67% Available',
      nextClass: 'Yoga Flow - 2:30 PM',
      capacity: '18/25 spots',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop',
      color: 'yellow',
      position: 'col-span-3 row-span-2'
    },
    {
      id: 'functional',
      name: 'Functional Training',
      icon: Target,
      availability: '100% Available',
      nextClass: 'CrossFit WOD - 5:00 PM',
      capacity: '6/12 spots',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
      color: 'orange',
      position: 'col-span-2 row-span-2'
    }
  ];

  const trainers = [
    {
      id: 1,
      name: 'Marcus Steel',
      specialty: 'Strength & Conditioning',
      certifications: ['NASM-CPT', 'CrossFit L2', 'Sports Nutrition'],
      experience: '8 Years',
      clients: 247,
      rating: 4.9,
      image: 'https://i.pravatar.cc/400?img=12',
      achievement: 'Top Trainer 2024'
    },
    {
      id: 2,
      name: 'Aria Chen',
      specialty: 'HIIT & Weight Loss',
      certifications: ['ACE-CPT', 'Nutrition Coach', 'TRX Certified'],
      experience: '6 Years',
      clients: 312,
      rating: 5.0,
      image: 'https://i.pravatar.cc/400?img=45',
      achievement: 'Most Transformations'
    },
    {
      id: 3,
      name: 'Jake Rivera',
      specialty: 'Athletic Performance',
      certifications: ['CSCS', 'FMS Level 2', 'Olympic Lifting'],
      experience: '10 Years',
      clients: 189,
      rating: 4.8,
      image: 'https://i.pravatar.cc/400?img=33',
      achievement: 'Elite Specialist'
    }
  ];

  const transformations = [
    {
      name: 'Sarah M.',
      duration: '6 Months',
      weightLoss: '45 lbs',
      strengthGain: '+120%',
      before: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop',
      after: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&h=500&fit=crop',
      achievements: ['Marathon Finisher', 'Deadlift 225lbs', '5K Personal Best'],
      level: 92
    },
    {
      name: 'David K.',
      duration: '4 Months',
      weightLoss: '32 lbs',
      strengthGain: '+85%',
      before: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop',
      after: 'https://images.unsplash.com/photo-1583454155184-1a2d8c3b8e90?w=400&h=500&fit=crop',
      achievements: ['Body Recomp Master', 'Consistency King', '100 Class Streak'],
      level: 87
    }
  ];

  const membershipTiers = [
    {
      level: 1,
      name: 'Warrior',
      price: 49,
      xp: '0-1000 XP',
      perks: ['Gym Access 24/7', '2 Group Classes/Week', 'Locker Access', 'Member App'],
      color: 'from-gray-600 to-gray-800',
      badge: '🥉'
    },
    {
      level: 2,
      name: 'Champion',
      price: 79,
      xp: '1001-5000 XP',
      perks: ['All Warrior Perks', 'Unlimited Classes', '1 PT Session/Month', 'Nutrition Guide', 'Priority Booking'],
      color: 'from-blue-600 to-blue-800',
      badge: '🥈',
      popular: true
    },
    {
      level: 3,
      name: 'Legend',
      price: 129,
      xp: '5000+ XP',
      perks: ['All Champion Perks', '4 PT Sessions/Month', 'Custom Meal Plan', 'Recovery Zone Access', 'Guest Passes (4/mo)', 'Exclusive Events'],
      color: 'from-orange-600 to-orange-800',
      badge: '🥇'
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-orange-600 rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full border-4 border-yellow-400"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border-4 border-blue-600 rotate-12"></div>
        <div className="absolute top-1/2 right-10 w-28 h-28 border-4 border-orange-600 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with Energy Bar */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-orange-600/20 rounded-full border-2 border-orange-600">
            <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
            <span className="text-yellow-400 font-bold tracking-wider">LIVE GYM FLOOR</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-1 h-4 ${i < 4 ? 'bg-orange-600' : 'bg-gray-700'} rounded-full`}></div>
              ))}
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-400">TRAINING GROUND</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Navigate your fitness journey like a champion. Real-time availability, expert guidance, achievement unlocked.
          </p>
        </div>

        {/* Bento Grid - Gym Floor Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16 max-w-7xl mx-auto">
          {gymZones.map((zone) => {
            const IconComponent = zone.icon;
            const isActive = activeZone === zone.id;
            
            return (
              <div
                key={zone.id}
                className={`${zone.position} relative group cursor-pointer overflow-hidden rounded-2xl`}
                onMouseEnter={() => setActiveZone(zone.id)}
                onMouseLeave={() => setActiveZone(null)}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={zone.image}
                    alt={zone.name}
                    fill
                    className={`object-cover transition-transform duration-700 ${isActive ? 'scale-110' : 'scale-100'}`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    zone.color === 'orange' ? 'from-orange-900/95 via-orange-900/70 to-transparent' :
                    zone.color === 'blue' ? 'from-blue-900/95 via-blue-900/70 to-transparent' :
                    'from-yellow-900/95 via-yellow-900/70 to-transparent'
                  }`}></div>
                </div>

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-between min-h-[280px]">
                  {/* Top Section */}
                  <div>
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 ${
                      zone.color === 'orange' ? 'bg-orange-600' :
                      zone.color === 'blue' ? 'bg-blue-600' :
                      'bg-yellow-400 text-gray-900'
                    } ${zone.color !== 'yellow' && 'text-white'}`}>
                      <IconComponent className="w-5 h-5" />
                      <span className="font-bold text-sm">{zone.availability}</span>
                    </div>
                    <h3 className="text-3xl font-black text-white mb-2">{zone.name}</h3>
                  </div>

                  {/* Hover Details */}
                  <div className={`transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-yellow-400" />
                        <span className="text-white font-semibold text-sm">{zone.nextClass}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm">{zone.capacity}</span>
                        <button className={`px-4 py-1 rounded-full text-xs font-bold ${
                          zone.color === 'orange' ? 'bg-orange-600 hover:bg-orange-500' :
                          zone.color === 'blue' ? 'bg-blue-600 hover:bg-blue-500' :
                          'bg-yellow-400 hover:bg-yellow-300 text-gray-900'
                        } text-white transition-colors`}>
                          BOOK NOW
                        </button>
                      </div>
                      {/* Progress Bar */}
                      <div className="mt-3 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${
                            zone.color === 'orange' ? 'bg-orange-600' :
                            zone.color === 'blue' ? 'bg-blue-600' :
                            'bg-yellow-400'
                          }`}
                          style={{ width: zone.availability }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${
                  zone.color === 'orange' ? 'bg-orange-600' :
                  zone.color === 'blue' ? 'bg-blue-600' :
                  'bg-yellow-400'
                } opacity-20 rounded-bl-full`}></div>
              </div>
            );
          })}
        </div>

        {/* Trainer Spotlight */}
        <div className="mb-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-full">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-bold">ELITE TRAINERS</span>
            </div>
            <div className="flex-1 h-1 bg-gradient-to-r from-blue-600 to-transparent rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trainers.map((trainer) => {
              const isSelected = selectedTrainer === trainer.id;
              
              return (
                <div
                  key={trainer.id}
                  className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-2 cursor-pointer transition-all duration-300 ${
                    isSelected ? 'border-orange-600 scale-105' : 'border-gray-700 hover:border-blue-600'
                  }`}
                  onClick={() => setSelectedTrainer(isSelected ? null : trainer.id)}
                >
                  {/* Achievement Badge */}
                  <div className="absolute top-4 right-4 z-10 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Trophy className="w-3 h-3" />
                    {trainer.achievement}
                  </div>

                  {/* Trainer Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={trainer.image}
                      alt={trainer.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                    
                    {/* Stats Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-2xl font-black text-white mb-1">{trainer.name}</h4>
                      <p className="text-orange-400 font-semibold mb-2">{trainer.specialty}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-blue-400" />
                          <span className="text-white font-bold">{trainer.clients}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="text-white font-bold">{trainer.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-green-400" />
                          <span className="text-white font-bold">{trainer.experience}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {trainer.certifications.map((cert, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-600/20 border border-blue-600 text-blue-400 rounded-full text-xs font-semibold">
                          {cert}
                        </span>
                      ))}
                    </div>
                    <button className="w-full py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4" />
                      BOOK SESSION
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Transformation Achievements */}
        <div className="mb-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-orange-600 rounded-full">
              <TrendingUp className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-bold">ACHIEVEMENT UNLOCKED</span>
            </div>
            <div className="flex-1 h-1 bg-gradient-to-r from-orange-600 to-transparent rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformations.map((transformation, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-2 border-gray-700 hover:border-orange-600 transition-all duration-300">
                <div className="grid grid-cols-2 gap-0">
                  {/* Before Image */}
                  <div className="relative h-80">
                    <Image
                      src={transformation.before}
                      alt="Before"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-gray-900/90 px-3 py-1 rounded-full text-white text-xs font-bold">
                      BEFORE
                    </div>
                  </div>
                  {/* After Image */}
                  <div className="relative h-80">
                    <Image
                      src={transformation.after}
                      alt="After"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-orange-600 px-3 py-1 rounded-full text-white text-xs font-bold">
                      AFTER
                    </div>
                  </div>
                </div>

                {/* Stats Section */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-2xl font-black text-white">{transformation.name}</h4>
                    <span className="text-gray-400 font-semibold">{transformation.duration}</span>
                  </div>

                  {/* Progress Level */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Transformation Level</span>
                      <span className="text-xl font-black text-orange-600">{transformation.level}</span>
                    </div>
                    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-orange-600 to-yellow-400 rounded-full relative"
                        style={{ width: `${transformation.level}%` }}
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-600/20 border border-blue-600 rounded-xl p-3 text-center">
                      <div className="text-3xl font-black text-blue-400">{transformation.weightLoss}</div>
                      <div className="text-xs text-gray-400 font-semibold">Weight Lost</div>
                    </div>
                    <div className="bg-orange-600/20 border border-orange-600 rounded-xl p-3 text-center">
                      <div className="text-3xl font-black text-orange-400">{transformation.strengthGain}</div>
                      <div className="text-xs text-gray-400 font-semibold">Strength Gain</div>
                    </div>
                  </div>

                  {/* Achievement Badges */}
                  <div className="space-y-2">
                    {transformation.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-2 bg-gray-800/50 rounded-lg px-3 py-2">
                        <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                        <span className="text-white text-sm font-semibold">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RPG-Style Membership Tiers */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/20 border-2 border-yellow-400 rounded-full mb-4">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-bold">CHOOSE YOUR PATH</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
              LEVEL UP YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-400">MEMBERSHIP</span>
            </h3>
            <p className="text-gray-400 text-lg">Earn XP with every workout. Unlock exclusive perks as you progress.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {membershipTiers.map((tier) => (
              <div
                key={tier.level}
                className={`relative bg-gradient-to-br ${tier.color} rounded-2xl p-8 border-2 ${
                  tier.popular ? 'border-yellow-400 scale-105' : 'border-gray-700'
                } transition-all duration-300 hover:scale-105`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-black">
                    ⚡ MOST POPULAR
                  </div>
                )}

                {/* Level Badge */}
                <div className="text-6xl mb-4 text-center">{tier.badge}</div>
                
                <div className="text-center mb-6">
                  <div className="text-sm text-gray-300 mb-2">LEVEL {tier.level}</div>
                  <h4 className="text-3xl font-black text-white mb-2">{tier.name}</h4>
                  <div className="text-sm text-gray-300 mb-4">{tier.xp}</div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-black text-white">${tier.price}</span>
                    <span className="text-gray-300">/month</span>
                  </div>
                </div>

                {/* Perks List */}
                <div className="space-y-3 mb-6">
                  {tier.perks.map((perk, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white text-sm">{perk}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full py-4 bg-white text-gray-900 font-black rounded-xl hover:bg-yellow-400 transition-colors">
                  START LEVEL {tier.level}
                </button>

                {/* Geometric Accent */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-tl-full"></div>
              </div>
            ))}
          </div>

          {/* XP Explanation */}
          <div className="mt-8 text-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold">1 Workout = 10 XP</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-white font-semibold">1 Class = 15 XP</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-orange-400" />
                <span className="text-white font-semibold">Achievement = 50 XP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
