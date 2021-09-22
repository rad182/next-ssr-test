import Head from "next/head";

export default function Hello({ data }) {
  console.log({ data });
  return (
    <>
      <Head>
        <title>{data.anime}</title>
        <meta property="og:title" content={data.quote} key="title" />
      </Head>
      <p>{data.quote}</p>
    </>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch("https://animechan.vercel.app/api/random");
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}
