"use client";
import { ReactNode } from "react";

export function Section({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <section id={id} className="py-12 md:py-16">
      {children}
    </section>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-6 text-2xl font-bold tracking-tight md:mb-8 md:text-3xl">
      {children}
    </h2>
  );
}
