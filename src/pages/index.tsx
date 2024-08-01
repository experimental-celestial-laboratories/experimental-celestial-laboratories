import { Logo } from "../components/Logo";
import { LinkButton } from "../components/LinkButton";
import { NavigationBar } from "../components/nav/NavigationBar";

export default function Home() {
  return (
    <div className="bg-black/60">
      <div className="flex min-h-screen flex-col items-center justify-center bg-orange-800/40">
        <div className="absolute right-0 top-0">
          <NavigationBar />
        </div>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <Logo />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <LinkButton
              href="https://git.hri7566.info/xcl"
              title="Git →"
              text="Learn more about XCL's projects."
            />
            {/*
            <LinkButton
              href="https://xnl.hri7566.info"
              title="XNL →"
              text="Our most boundary-pushing effort."
            />
            */}
          </div>
          <div className="flex flex-col items-center gap-2"></div>
        </div>
      </div>
    </div>
  );
}
