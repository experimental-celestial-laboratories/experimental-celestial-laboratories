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
              We love screwing people over apparently. What do we even do? We
              fight in DMs over stupid shit that should&apos;ve been done in
              fucking July. Now we&apos;re screwed.
            </PageContentBox>

            <PageContentBox title="Our Problem">
              Here at XCL, we do absolutely nothing with our assets and bankrupt
              people we buy. Sorry about Femcorp. Emma fucking hates us now and
              I can&apos;t keep Khorne&apos;s mouth shut. Sorry about the mess.
              It&apos;s going to take forever to clean.
            </PageContentBox>
          </div>
          <div className="flex flex-col items-center gap-2"></div>
        </div>
      </div>
    </div>
  );
}
