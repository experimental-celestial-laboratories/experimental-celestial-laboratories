import Head from "next/head";

export default function Layout({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
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
        <title>{title ? `XCL - ${title}` : "XCL"}</title>
        <meta name="description" content="XCL homepage" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main
        className="bg-cover bg-center"
        style={{ backgroundImage: `url("${randomBg}")` }}
      >
        {children}
      </main>
    </>
  );
}
