'use client'

import { 
  Dashboard as DashboardIcon, 
  Timeline, 
  Speed,
  Search as SearchIcon,
  Close as CloseIcon,
  SwapHoriz,
  Cloud,
  Memory,
  DeviceHub
} from '@mui/icons-material'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white">
      {/* Sticky Header/Navigation */}
      <header className="fixed top-0 w-full backdrop-blur-md bg-slate-900/60 border-b border-slate-800/50 z-50">
        <div className="container mx-auto px-4">
          {/* Main Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-4 relative">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center">
                <span className="text-xl font-bold text-white">S</span>
              </div>
              <div>
                <span className="text-2xl font-semibold bg-gradient-to-r from-violet-400 to-indigo-400 text-transparent bg-clip-text">
                  senseVue
                </span>
                
              </div>
            </Link>

            {/* Center Navigation - Optional */}
            <nav className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
              <Link href="/features" className="text-slate-300 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-slate-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/docs" className="text-slate-300 hover:text-white transition-colors">
                Documentation
              </Link>
              <Link href="/blog" className="text-slate-300 hover:text-white transition-colors">
                Blog
              </Link>
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Search Bar with Toggle */}
              <div className="relative flex items-center">
                {isSearchOpen ? (
                  <div className="flex items-center backdrop-blur-md bg-slate-800/40 rounded-xl border border-slate-700/50 
                  animate-slideIn absolute right-0 top-1/2 -translate-y-1/2 z-10">
                    <input
                      type="text"
                      placeholder="Search documentation, features..."
                      className="w-[200px] lg:w-[300px] px-4 py-2.5 bg-transparent outline-none text-slate-300 
                      placeholder-slate-500 text-sm"
                      autoFocus
                      onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
                    />
                    <button 
                      className="px-4 border-l border-slate-700/50 hover:text-slate-200" 
                      onClick={() => setIsSearchOpen(false)}
                    >
                      <CloseIcon className="text-slate-400 h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => setIsSearchOpen(true)}
                    className="p-2.5 hover:bg-slate-800/40 rounded-xl transition-colors"
                  >
                    <SearchIcon className="text-slate-400 h-5 w-5" />
                  </button>
                )}
              </div>

              {/* Auth Buttons */}
              <div className="flex items-center gap-3">
                <Link 
                  href="/signup"
                  className="whitespace-nowrap px-5 py-2.5 bg-gradient-to-r from-violet-500 to-indigo-500 
                  text-white font-medium rounded-xl hover:from-violet-600 hover:to-indigo-600 transition-all duration-200 
                  shadow-lg shadow-indigo-500/25 text-sm border border-violet-400/20"
                >
                  Get Started
                </Link>
                <Link 
                  href="/login"
                  className="whitespace-nowrap text-slate-300 hover:text-white px-3 py-2.5 
                  transition-colors text-sm font-medium"
                >
                  Log in
                </Link>
                <Link 
                  href="/demo"
                  className="whitespace-nowrap px-5 py-2.5 backdrop-blur-md bg-slate-800/40 
                  border border-slate-700/50 text-white rounded-xl hover:bg-slate-700/40 transition-all 
                  duration-200 text-sm font-medium"
                >
                  Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12">
            {/* Left Content */}
            <div className="flex-1 pt-8 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
                <span className="bg-gradient-to-r from-violet-400 to-indigo-400 text-transparent bg-clip-text">
                  IoT Sensor
                  <br />
                  Monitoring,
                </span>
                <br />
                Real-time,
                <br />
                Customizable.
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl text-slate-400">Start Free with 100GB</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                Monitor up to 20+ of IoT sensors in real-time. Get instant alerts, 
                analyze trends, and make data-driven decisions with our powerful 
                visualization platform. Perfect for any type of project that requires monitoring sensors
                in real-time.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link 
                  href="/signup"
                  className="px-6 py-3 bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-medium rounded-lg 
                  hover:from-violet-600 hover:to-indigo-600 transition-all duration-200 shadow-lg shadow-indigo-500/25"
                >
                  Get Started Free
                </Link>
                <Link 
                  href="/demo"
                  className="px-6 py-3 backdrop-blur-md bg-slate-800/40 border border-slate-700/50 text-white rounded-lg 
                  hover:bg-slate-700/40 transition-all duration-200"
                >
                  Get Demo
                </Link>
              </div>
              
              {/* Badges */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-8">
                <div className="flex items-center gap-2 text-slate-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm sm:text-base">20+ Sensors in Single Project</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
                  <span className="text-sm sm:text-base">Real-time Updates</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                  <span className="text-sm sm:text-base">Zero Latency</span>
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="flex-1 w-full lg:w-auto">
              <div className="relative max-w-[600px] mx-auto">
                {/* Main Chart */}
                <div className="transform rotate-[-5deg] translate-y-4 translate-x-4 sm:translate-x-8">
                  <div className="backdrop-blur-md bg-slate-800/40 p-2 sm:p-4 rounded-xl border border-slate-700/50 shadow-xl">
        <Image
                      src="/chart1.png"
                      alt="Chart Preview"
                      width={600}
                      height={300}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
                
                {/* Stats Card */}
                <div className="absolute top-10 sm:top-20 right-0 transform rotate-[5deg]">
                  <div className="backdrop-blur-md bg-slate-800/40 p-3 sm:p-6 rounded-xl border border-slate-700/50 shadow-xl">
                    <div className="flex items-center gap-2">
                      <div className="w-2 sm:w-3 h-2 sm:h-3 bg-violet-400 rounded-full"></div>
                      <span className="text-xl sm:text-2xl font-bold text-white">204,597</span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400">Active Users</div>
                  </div>
                </div>

                {/* Area Chart */}
                <div className="transform -rotate-[8deg] -translate-y-[10px] sm:-translate-y-[20px]">
                  <div className="backdrop-blur-md bg-slate-800/40 p-2 sm:p-4 rounded-xl border border-slate-700/50 shadow-xl">
            <Image
                      src="/chart2.png"
                      alt="Area Chart"
                      width={500}
                      height={250}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section dengan background yang berbeda */}
      <div className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-800/50">
        <div className="container mx-auto px-4 py-20">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            Key Features
          </h3>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Everything you need to monitor your IoT sensors in real-time, all in one place.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard 
              icon={<DashboardIcon className="text-3xl sm:text-4xl" />}
              title="Customizable Dashboards"
              description="Create and customize your monitoring dashboards with drag-and-drop widgets"
            />
            <FeatureCard 
              icon={<Timeline className="text-3xl sm:text-4xl" />}
              title="Real-time Monitoring"
              description="View your sensor data in real-time with automatic updates via MQTT protocol"
            />
            <FeatureCard 
              icon={<Speed className="text-3xl sm:text-4xl" />}
              title="Multiple Visualizations"
              description="Choose from various visualization types including charts, gauges, and numeric displays"
            />
          </div>
        </div>
      </div>

      {/* Communication Methods Section */}
      <div className="py-24 bg-gradient-to-b from-slate-900/50 to-[#0F172A]">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            Multiple Communication Protocols
          </h3>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            Choose the best protocol for your IoT sensors. We support various communication methods to ensure reliability and flexibility.
          </p>

          {/* MQTT Protocol */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-violet-500/10 px-4 py-2 rounded-full">
                <DeviceHub className="text-violet-400" />
                <span className="text-violet-400 font-semibold">MQTT Protocol</span>
              </div>
              <h4 className="text-2xl font-bold text-white">
                Real-time Data with MQTT
              </h4>
              <p className="text-slate-400">
                Perfect for real-time IoT applications. MQTT&apos;s publish-subscribe model enables efficient 
                data transmission with minimal overhead, ideal for resource-constrained devices.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                  <span>Lightweight publish-subscribe messaging</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                  <span>Quality of Service (QoS) levels</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                  <span>Bi-directional communication</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="backdrop-blur-md bg-slate-800/40 p-6 rounded-xl border border-slate-700/50">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <Memory className="text-violet-400 text-3xl" />
                    <div>
                      <div className="text-white font-semibold">IoT Sensor</div>
                      <div className="text-slate-400 text-sm">Publisher</div>
                    </div>
                  </div>
                  <SwapHoriz className="text-slate-400 text-3xl" />
                  <div className="flex items-center gap-4">
                    <Cloud className="text-violet-400 text-3xl" />
                    <div>
                      <div className="text-white font-semibold">MQTT Broker</div>
                      <div className="text-slate-400 text-sm">Message Broker</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="bg-slate-900/50 p-3 rounded-lg">
                    <span className="text-emerald-400">{`// Publishing sensor data`}</span>
                    <br />
                    <span className="text-violet-400">mqtt</span>
                    <span className="text-slate-300">.publish(</span>
                    <span className="text-amber-400">&apos;sensors/temp&apos;</span>
                    <span className="text-slate-300">, </span>
                    <span className="text-emerald-400">&apos;{`{"value": 25.4}`}&apos;</span>
                    <span className="text-slate-300">)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* REST API */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="order-2 lg:order-1 relative">
              <div className="backdrop-blur-md bg-slate-800/40 p-6 rounded-xl border border-slate-700/50">
                <div className="space-y-3 font-mono text-sm">
                  <div className="bg-slate-900/50 p-3 rounded-lg">
                    <span className="text-emerald-400">{`// HTTP POST Request`}</span>
                    <br />
                    <span className="text-violet-400">POST</span>
                    <span className="text-slate-300"> /api/sensors/data</span>
                    <br />
                    <span className="text-slate-400">Content-Type: application/json</span>
                    <br />
                    <span className="text-emerald-400">
                      {`{
  "sensorId": "temp-001",
  "value": 25.4,
  "timestamp": "2024-01-20T..."
}`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-3 bg-indigo-500/10 px-4 py-2 rounded-full">
                <DeviceHub className="text-indigo-400" />
                <span className="text-indigo-400 font-semibold">REST API</span>
              </div>
              <h4 className="text-2xl font-bold text-white">
                HTTP REST API Integration
              </h4>
              <p className="text-slate-400">
                Traditional HTTP-based communication suitable for non-real-time data collection 
                and configuration management. Simple to implement and widely supported.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                  <span>Standard HTTP methods (GET, POST, PUT, DELETE)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                  <span>JSON payload format</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                  <span>Authentication & authorization</span>
                </div>
              </div>
            </div>
          </div>

          {/* WebSocket */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-emerald-500/10 px-4 py-2 rounded-full">
                <DeviceHub className="text-emerald-400" />
                <span className="text-emerald-400 font-semibold">WebSocket</span>
              </div>
              <h4 className="text-2xl font-bold text-white">
                Bi-directional WebSocket Connection
              </h4>
              <p className="text-slate-400">
                Full-duplex communication channel over a single TCP connection. Ideal for 
                real-time applications requiring continuous data exchange.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                  <span>Persistent connection</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                  <span>Low-latency data transfer</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                  <span>Real-time events and notifications</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="backdrop-blur-md bg-slate-800/40 p-6 rounded-xl border border-slate-700/50">
                <div className="space-y-3 font-mono text-sm">
                  <div className="bg-slate-900/50 p-3 rounded-lg">
                    <span className="text-emerald-400">{`// WebSocket connection`}</span>
                    <br />
                    <span className="text-violet-400">const</span>
                    <span className="text-slate-300"> ws = </span>
                    <span className="text-violet-400">new</span>
                    <span className="text-slate-300"> WebSocket(</span>
                    <span className="text-amber-400">&apos;ws://api/sensors&apos;</span>
                    <span className="text-slate-300">)</span>
                    <br /><br />
                    <span className="text-emerald-400">{`// Real-time data handling`}</span>
                    <br />
                    <span className="text-slate-300">ws.onmessage = (</span>
                    <span className="text-violet-400">event</span>
                    <span className="text-slate-300">) &gt; {'{'}</span>
                    <br />
                    <span className="text-slate-300">&nbsp;&nbsp;console.log(event.data)</span>
                    <br />
                    <span className="text-slate-300">{`}`}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How to Use Section */}
      <div className="py-24 bg-gradient-to-b from-[#0F172A] to-slate-900/50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            How to Use SenseVue
          </h3>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            Create your custom dashboard in minutes with our intuitive drag-and-drop interface.
            Monitor your IoT sensors exactly the way you want.
          </p>

          {/* Video Tutorial Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Video Preview */}
            <div className="relative aspect-video rounded-xl overflow-hidden 
            backdrop-blur-md bg-slate-800/40 border border-slate-700/50">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-slate-400">
                  {/* Placeholder for video - akan diganti dengan video tutorial */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-violet-500/20 flex items-center justify-center">
                      <svg 
                        className="w-8 h-8 text-violet-400" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
                        />
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                    </div>
                    <span className="text-sm">Video Tutorial Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-500/20 
                flex items-center justify-center text-violet-400 font-semibold">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Create Your Dashboard
                  </h4>
                  <p className="text-slate-400">
                    Start by creating a new dashboard. Choose from our pre-built templates 
                    or start from scratch.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-500/20 
                flex items-center justify-center text-violet-400 font-semibold">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Add Widgets
                  </h4>
                  <p className="text-slate-400">
                    Drag and drop widgets from our extensive collection. Choose from charts, 
                    gauges, statistics, and more.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-500/20 
                flex items-center justify-center text-violet-400 font-semibold">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Connect Your Sensors
                  </h4>
                  <p className="text-slate-400">
                    Configure your widgets to display data from your IoT sensors using MQTT, 
                    REST API, or WebSocket protocols.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-500/20 
                flex items-center justify-center text-violet-400 font-semibold">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Monitor in Real-time
                  </h4>
                  <p className="text-slate-400">
                    Watch your dashboard come to life with real-time updates from your sensors. 
                    Set up alerts and notifications for important events.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Link 
              href="/signup"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 
              to-indigo-500 text-white font-medium rounded-lg hover:from-violet-600 hover:to-indigo-600 
              transition-all duration-200 shadow-lg shadow-indigo-500/25"
            >
              Start Building Your Dashboard
              <svg 
                className="w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-slate-900/90 border-t border-slate-800/50 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-12">
            {/* Company */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">S</span>
                </div>
                <span className="text-2xl font-semibold bg-gradient-to-r from-violet-400 to-indigo-400 text-transparent bg-clip-text">
                  QMY-senseVue
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Real-time IoT sensor monitoring platform for modern applications.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/features" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="/integrations" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/docs" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">
                    Community Forum
                  </Link>
                </li>
                <li>
                  <Link href="/status" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">
                    Status
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social & Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex gap-4 mb-6">
                <a 
                  href="https://github.com/0xHilmy" 
          target="_blank"
          rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-violet-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
        </a>
        <a
                  href="https://twitter.com" 
          target="_blank"
          rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-violet-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
        </a>
        <a
                  href="https://linkedin.com" 
          target="_blank"
          rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-violet-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors"
              >
                <span>Contact Sales</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 mt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2 text-sm text-slate-400">
                <Link href="/terms" className="hover:text-violet-400 transition-colors">Terms</Link>
                <Link href="/privacy" className="hover:text-violet-400 transition-colors">Privacy</Link>
                <Link href="/cookies" className="hover:text-violet-400 transition-colors">Cookies</Link>
                <Link href="/security" className="hover:text-violet-400 transition-colors">Security</Link>
              </div>
              <p className="text-sm text-slate-500">
                © 2024 0xHilmy. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode
  title: string
  description: string 
}) {
  return (
    <div className="bg-slate-800/40 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-slate-700/50 text-center 
    flex flex-col items-center gap-4 hover:bg-slate-700/40 transition-all duration-200">
      <div className="p-3 sm:p-4 rounded-full bg-slate-700/50 text-violet-400">
        {icon}
      </div>
      <h4 className="text-lg sm:text-xl font-bold text-white">
        {title}
      </h4>
      <p className="text-sm sm:text-base text-slate-400">
        {description}
      </p>
    </div>
  )
}
