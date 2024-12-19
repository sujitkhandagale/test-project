import React from "react";
import Layout from "@/components/layout/layout";
import Header from "@/components/layout/header/header";
import HomePoster from "@/components/ home/heros/home-poster/HomePoster";
import HomeProducts from "@/components/ home/heros/ home-products/HomeProducts";
import LastMinuteGift from "@/components/ home/heros/last-minute-gift/LastMinuteGift";

function Index() {
  return (
    <Layout>
      <HomePoster />
      <HomeProducts />
      <LastMinuteGift />
    </Layout>
  );
}

export default Index;
