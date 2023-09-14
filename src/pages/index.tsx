import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { api } from "~/utils/api";
import { Logo } from "../components/Logo";
import { LinkButton } from "../components/LinkButton";
import { NavigationBar } from "../components/NavigationBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>XCL</title>
        <meta name="description" content="XCL homepage" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      {/* <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#993800] to-[#250e00]"> */}
      <main className="bg-[url(/bg.png)] bg-cover bg-center">
        <div className="bg-black/60">
          <div className="flex min-h-screen flex-col items-center justify-center bg-orange-800/40">
            <div className="absolute right-0 top-0">
              <NavigationBar />
            </div>
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
              <Logo />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:gap-8">
                <LinkButton
                  href="https://git.hri7566.info/xcl"
                  title="Git →"
                  text="Learn more about XCL."
                />
              </div>
              <div className="flex flex-col items-center gap-2"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
