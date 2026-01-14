'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Waitlist submission:', email)
    alert('Thank you! We\'ll be in touch soon.')
    setEmail('')
  }

  const capabilities = [
    {
      title: 'Natural Language Queries',
      description: 'Ask scientific questions in plain English. Subspace translates them into validated analyses across your datasets.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: 'Reusable Datasets',
      description: 'Transform raw data into analysis-ready outputs that can be trusted, shared, and built upon over time.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      title: 'Full Provenance',
      description: 'Every transformation, decision, and data lineage is preserved — so results can always be traced and verified.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: 'Unified Data Layer',
      description: 'Connect drives, cloud storage, and existing code. No migration required — Subspace works with what you have.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    }
  ]

  const steps = [
    {
      number: '01',
      title: 'Connect',
      description: 'Link your existing data sources — drives, cloud storage, databases, and code repositories.'
    },
    {
      number: '02',
      title: 'Ask',
      description: 'Pose scientific questions in natural language. Subspace identifies relevant data and proposes analyses.'
    },
    {
      number: '03',
      title: 'Generate',
      description: 'Receive validated, analysis-ready datasets with full provenance and transformation history.'
    }
  ]

  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-6 sm:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-indigo-400 text-sm sm:text-base font-medium tracking-widest uppercase mb-6 fade-in-up">
            Agentic Analysis Platform
          </p>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight fade-in-up-delay-1">
            Turn scientific questions into{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              reusable datasets
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed fade-in-up-delay-2">
            Subspace connects to your lab's existing data and code, letting you explore hypotheses and generate analysis-ready outputs through natural language — while preserving provenance so results can be trusted and reused.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up-delay-3">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="px-6 py-4 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 text-white placeholder-gray-500 w-full sm:w-80 transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-500 transition-all duration-300 whitespace-nowrap hover:shadow-lg hover:shadow-indigo-500/25"
              >
                Request Early Access
              </button>
            </form>
          </div>

          <div className="mt-16 fade-in-up-delay-4">
            <button
              onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-500 hover:text-gray-300 transition-colors duration-300 flex flex-col items-center gap-2 mx-auto"
            >
              <span className="text-sm">Learn more</span>
              <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-32 px-6 sm:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4">
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Research, accelerated
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Built for research labs that need rigorous, reproducible analysis without the overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="glow-card bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-2xl p-8 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 px-6 sm:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Three steps to insight
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-indigo-500/30 to-transparent" />
                )}
                <div className="relative">
                  <span className="text-6xl font-bold text-white/[0.03] absolute -top-4 -left-2">
                    {step.number}
                  </span>
                  <div className="relative pt-8">
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 sm:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glow-card bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.05] rounded-3xl p-12 sm:p-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to transform your research workflow?
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Join the waitlist for early access. We're working with select research labs to shape the future of scientific data analysis.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="px-6 py-4 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 text-white placeholder-gray-500 flex-1 transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 whitespace-nowrap"
              >
                Join Waitlist
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 sm:px-10 lg:px-16 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Subspace. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="mailto:hello@subspace.ai" className="text-gray-500 hover:text-white transition-colors text-sm">
              hello@subspace.ai
            </a>
            <a href="https://twitter.com/subspace" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-sm">
              Twitter
            </a>
            <a href="https://linkedin.com/company/subspace" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-sm">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
