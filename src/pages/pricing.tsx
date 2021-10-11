import type { NextPage } from "next";

import Banner from "../components/shared/Banner";
import BetaInvite from "../components/shared/BetaInvite";
import PricingList from "../components/pricing/PricingList";

import HeroImage from "../../public/assets/pricing/hero.jpg";

const Pricing: NextPage = () => {
  return (
    <main>
      <Banner
        image={HeroImage.src}
        blur={HeroImage.blurDataURL}
        title='PRICING'
        description='Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.'
        position='left'
        hero={true}
      />

      <PricingList />

      <BetaInvite />
    </main>
  );
};

export default Pricing;
