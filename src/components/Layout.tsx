import type { ReactNode } from "react";
import Navbar from "./Navbar";
import { Site, Main, Footer } from "./ui";

type LayoutProps = {
  children: ReactNode;
  hero?: ReactNode;
};

export default function Layout({ children, hero }: LayoutProps) {
  return (
    <Site>
      <Navbar />
      {hero}
      <Main>{children}</Main>
      <Footer>
        <strong>Robotics MOBA</strong>
        <span>Internal concept · Preliminary specification</span>
      </Footer>
    </Site>
  );
}
