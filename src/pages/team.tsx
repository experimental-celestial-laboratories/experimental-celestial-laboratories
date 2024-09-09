import { NavigationBar } from "~/components/nav/NavigationBar";
import { PageContentBox } from "~/components/PageContentBox";
import { EmployeeList } from "~/components/employee/EmployeeList";
import { CornerLogo } from "~/components/CornerLogo";

export default function Team() {
  return (
    <div className="bg-black/60">
      <div className="flex min-h-screen flex-col items-center justify-center bg-orange-800/40">
        <CornerLogo />
        <div className="absolute right-0 top-0">
          <NavigationBar />
        </div>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <PageContentBox title="Employees">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <EmployeeList />
            </div>
          </PageContentBox>
        </div>
      </div>
    </div>
  );
}
