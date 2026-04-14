"use client";

import { useActionState } from "react";
import { loginAction } from "@/actions/auth";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction as any, null);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#000000] font-sans">
      <div className="w-full max-w-sm p-8 bg-[#111111] rounded-xl border border-[var(--color-parchment)]/10 shadow-2xl">
        
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 mb-4 relative">
            {/* simple crest placeholder icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-parchment)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full opacity-70">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h1 className="text-[var(--color-parchment)] text-2xl font-serif text-center">Admin Portal</h1>
          <p className="text-[var(--color-parchment)]/50 text-xs mt-2 uppercase tracking-widest">Authentication Required</p>
        </div>

        <form action={formAction} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-[var(--color-parchment)]/70 text-xs uppercase tracking-wider font-bold">Password</label>
            <input 
              type="password" 
              name="password"
              placeholder="••••••••"
              required
              className="w-full bg-[#000000] border border-[var(--color-parchment)]/20 rounded p-3 text-[var(--color-parchment)] outline-none focus:border-[var(--color-parchment)]/50 transition-colors"
            />
          </div>

          {(state as any)?.error && (
            <p className="text-red-400 text-xs italic">{(state as any).error}</p>
          )}

          <button 
            type="submit" 
            disabled={isPending}
            className="mt-4 w-full bg-[var(--color-parchment)] text-[#000000] font-bold uppercase tracking-widest text-xs py-4 rounded hover:bg-[var(--color-parchment)]/90 transition-colors disabled:opacity-50"
          >
            {isPending ? "Entering..." : "Enter"}
          </button>
        </form>

      </div>
    </div>
  );
}
