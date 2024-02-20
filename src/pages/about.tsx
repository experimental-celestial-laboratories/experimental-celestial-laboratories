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
              At XCL, we pioneer the convergence of innovation and imagination
              within SwichCraft. Driven by a passion for technological
              excellence, we are committed to pushing the boundaries of what is
              achievable with the given technologies of SwitchCraft. Our
              dedicated team of experts harnesses the power of creativity to
              deliver cutting-edge solutions tailored to the unique needs of our
              clients.
            </PageContentBox>
          </div>
          <div className="flex flex-col items-center gap-2"></div>
        </div>
      </div>
    </div>
  );
}
