import React from "react";
import Layout from "../components/layout";
import { fetchAPI } from "../lib/api";

const Services = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <div>
        <h1>our services</h1>
      </div>
    </Layout>
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

export default Services;
