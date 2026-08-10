'use client'

import Link from 'next/link'
import { Shield, Package, LayoutDashboard, ArrowRight } from 'lucide-react'

export default function PortalLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white flex flex-col">
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-amber-400" />
          <span className="font-semibold tracking-wide">Rua Sadiq Portal</span>
        </div>
        <Link
          href="/login"
          className="text-sm px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition"
        >
          Sign in
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-2xl text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Package className="h-3.5 w-3.5" />
            Product Management System
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Manage your catalogue with
            <span className="block text-amber-400">speed & control</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            Create, edit, and delete products. Upload images, update prices and details — all from a
            single secure dashboard built for Rua Sadiq Trading.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 transition shadow-lg shadow-amber-500/20"
            >
              <LayoutDashboard className="h-4 w-4" />
              Go to Dashboard
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>

      <footer className="text-center text-xs text-slate-500 py-6 border-t border-white/5">
        Rua Sadiq Trading · Admin Portal
      </footer>
    </div>
  )
}
