import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { Logo } from "../components/Logo";
import { NavigationBar } from "~/components/NavigationBar";
import { PageContentBox } from "~/components/PageContentBox";
import { EmployeeList } from "~/components/EmployeeList";

export default function Team() {
  const bgs = [
    "/bg/webp/bg1.webp",
    "/bg/webp/bg2.webp",
    "/bg/webp/bg3.webp",
    "/bg/webp/bg4.webp",
    "/bg/webp/bg5.webp",
    "/bg/webp/bg6.webp",
    "/bg/webp/bg7.webp",
    "/bg/webp/bg8.webp",
    "/bg/webp/bg9.webp",
  ];

  const randomBg = bgs[Math.floor(Math.random() * bgs.length)] as string;

  return (
    <>
      <Head>
        <title>XCL</title>
        <meta name="description" content="XCL's team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#993800] to-[#250e00]"> */}
      <main
        className="bg-cover bg-center"
        style={{ backgroundImage: `url("${randomBg}")` }}
      >
        <div className="bg-black/60">
          <div className="flex min-h-screen flex-col items-center justify-center bg-orange-800/40">
            <Link className="absolute left-0 top-0" href="/">
              <Logo />
            </Link>
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
      </main>
    </>
  );
}
