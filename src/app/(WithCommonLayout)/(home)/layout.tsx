import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return <div className="bg-[#18191a] min-h-screen">{children}</div>;
}
