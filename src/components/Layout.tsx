import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CursorFollower } from "./wow/CursorFollower";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="theme-solaire min-h-screen flex flex-col relative bg-background">
      <CursorFollower />
      <Header />
      <main className="flex-1 relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
