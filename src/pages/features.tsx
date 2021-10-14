import type { NextPage } from "next";
import Banner from "../components/shared/Banner";
import Photographer from "../../public/assets/features/hero.jpg";
import FeaturesList from "../components/shared/Features";
import BetaInvite from "../components/shared/BetaInvite";
import Head from "next/head";

const Features: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Photosnap | Features</title>
      </Head>

      <Banner
        position='left'
        title='FEATURES'
        description='We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.'
        image={Photographer.src}
        blur={Photographer.blurDataURL}
        hero={true}
      />

      <FeaturesList complete={true} />

      <BetaInvite />
    </main>
  );
};

export default Features;
