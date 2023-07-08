import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { api } from "~/utils/api";

export default function Home() {
  return (
    <>
      <Head>
        <title>XCL</title>
        <meta name="description" content="XCL homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#993800] to-[#250e00]"> */}
      <main className="bg-[url(/bg.png)] bg-cover bg-center">
        <div className="bg-black/60">
          <div className="flex min-h-screen flex-col items-center justify-center bg-orange-800/40">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
              <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                <Image src="/xcl.png" alt="XCL" width={209} height={105} />
              </h1>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:gap-8">
                <Link
                  className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white shadow-lg backdrop-blur-sm transition-all hover:bg-white/20 hover:shadow-2xl hover:backdrop-blur"
                  href="https://github.com/experimental-celestial-laboratories"
                  target="_blank"
                >
                  <h3 className="text-2xl font-bold">GitHub →</h3>
                  <div className="text-lg">Learn more about XCL.</div>
                </Link>
              </div>
              <div className="flex flex-col items-center gap-2"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
