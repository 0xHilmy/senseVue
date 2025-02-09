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
import SearchBox from './components/SearchBox'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white">
      {/* Sticky Header/Navigation */}
      <header className="fixed top-0 w-full backdrop-blur-md bg-slate-900/60 border-b border-slate-800/50 z-50">
        <div className="container mx-auto px-4">
          {/* Top Strip - Optional */}
          
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
                Perfect for real-time IoT applications. MQTT's publish-subscribe model enables efficient 
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
                    <span className="text-emerald-400">// Publishing sensor data</span>
                    <br />
                    <span className="text-violet-400">mqtt</span>
                    <span className="text-slate-300">.publish(</span>
                    <span className="text-amber-400">'sensors/temp'</span>
                    <span className="text-slate-300">, </span>
                    <span className="text-emerald-400">'{`{"value": 25.4}`}'</span>
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
                    <span className="text-emerald-400">// HTTP POST Request</span>
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
                    <span className="text-emerald-400">// WebSocket connection</span>
                    <br />
                    <span className="text-violet-400">const</span>
                    <span className="text-slate-300"> ws = </span>
                    <span className="text-violet-400">new</span>
                    <span className="text-slate-300"> WebSocket(</span>
                    <span className="text-amber-400">'ws://api/sensors'</span>
                    <span className="text-slate-300">)</span>
                    <br /><br />
                    <span className="text-emerald-400">// Real-time data handling</span>
                    <br />
                    <span className="text-slate-300">ws.onmessage = (</span>
                    <span className="text-violet-400">event</span>
                    <span className="text-slate-300">) => {`{`}</span>
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
