import Head from "next/head";

export default function Hello({ data }) {
  console.log({ data });
  return <p>{data.quote}</p>;
}
export async function getServerSideProps(context) {
  const res = await fetch("https://animechan.vercel.app/api/random");
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}
