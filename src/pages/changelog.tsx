import { NavigationBar } from "../components/nav/NavigationBar";
import { PageContentBox } from "~/components/PageContentBox";
import { CornerLogo } from "~/components/CornerLogo";
import { Changelog as ChangelogComponent } from "~/components/Changelog";

export default function Changelog() {
  return (
    <div className="bg-black/60">
      <div className="flex min-h-screen flex-col items-center justify-center bg-orange-800/40">
        <CornerLogo />
        <div className="absolute right-0 top-0">
          <NavigationBar />
        </div>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:gap-8">
            <PageContentBox title="Changelog">
              <ChangelogComponent />
            </PageContentBox>
          </div>
          <div className="flex flex-col items-center gap-2"></div>
        </div>
      </div>
    </div>
  );
}
