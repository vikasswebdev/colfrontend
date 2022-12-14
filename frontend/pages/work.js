import React from "react";
import Layout from "../components/layout";
import { fetchAPI } from "../lib/api";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import myImage from "../public/apple-touch-icon.png";
import { getStrapiMedia } from "../lib/media";
import Link from "next/link";

const Work = ({ categories }) => {
  return (
    <>
      <Head>
        <title>Work</title>
      </Head>

      <Layout categories={categories}>
        <div>
          <h1>our work</h1>
          <div className={styles.container}>
            <div className={styles.containerItem}>
              {/* {work.data.length > 0 &&
                work.data.map((item) => (
                  <Image
                    src={getStrapiMedia(item.attributes.image)}
                    width={200}
                    height={200}
                  />
                ))} */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [categoriesRes] = await Promise.all([
    fetchAPI("/categories", { populate: "*" }),
  ]);

  return {
    props: {
      categories: categoriesRes.data,
    },
    revalidate: 1,
  };
}

export default Work;
