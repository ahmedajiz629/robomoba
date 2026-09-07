import type { ReactNode } from "react";
import Navbar from "./Navbar";
import { Site, Main, Footer } from "./ui";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Site>
      <Navbar />
      <Main>{children}</Main>
      <Footer>
        <strong>Robotics MOBA</strong>
        <span>Internal concept · Preliminary specification</span>
      </Footer>
    </Site>
  );
}
