"use client";
import { Component, type ReactNode } from "react";

export class ResourceErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (this.state.failed) return <main className="min-h-screen bg-mission-mist px-6 py-24 text-center"><h1 className="text-3xl font-black text-mission-ink">The Knowledge Hub is loading again.</h1><p className="mx-auto mt-4 max-w-xl text-slate-600">Please refresh once more. Your guides are still available.</p><a href="/resources" className="mt-8 inline-flex rounded-xl bg-mission-gold px-6 py-3 font-extrabold text-mission-ink">Reload Knowledge Hub</a></main>;
    return this.props.children;
  }
}
