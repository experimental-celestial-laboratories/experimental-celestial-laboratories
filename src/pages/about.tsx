import Link from "next/link";
import { Logo } from "../components/Logo";
import { NavigationBar } from "../components/NavigationBar";
import { PageContentBox } from "~/components/PageContentBox";
import { CornerLogo } from "~/components/CornerLogo";

export default function About() {
  return (
    <div className="bg-black/60">
      <div className="flex min-h-screen flex-col items-center justify-center bg-orange-800/40">
        <CornerLogo />
        <div className="absolute right-0 top-0">
          <NavigationBar />
        </div>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:gap-8">
            <PageContentBox title="Our Mission">
              Here at XCL, we strive to make the SwitchCraft 3 server as
              unbearable as possible. While these noobs at SpaceTech are feeding
              cookies to parrots, we build space stations not only for the
              astronauts, but also for the olympians and war heroes of our time.
            </PageContentBox>
          </div>
          <div className="flex flex-col items-center gap-2"></div>
        </div>
      </div>
    </div>
  );
}
