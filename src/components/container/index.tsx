import { ReactNode } from "react";
export function Container({ children }: { children: ReactNode }) {
  return <div className="w-full max-w-7xl mx-auto m-8 px-4 bg-slate-50 rounded-xl">{children}</div>;
}