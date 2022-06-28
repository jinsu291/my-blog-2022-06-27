import { StaticImage } from "gatsby-plugin-image";
import React from "react"
import Layout from "../components/layout";

const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
        <h1>홈 페이지</h1>
        <StaticImage alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/dogpic.jpg"
        />
      </Layout>
  );
};

export default IndexPage
