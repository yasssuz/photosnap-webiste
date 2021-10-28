import type { NextPage } from "next";
import styled from "styled-components";
import Head from "next/head";

import Hero from "../components/stories/Hero";
import StoryCard from "../components/shared/StoryCard";

import theMountains from "../../public/assets/stories/mountains.jpg";
import cityEscapes from "../../public/assets/stories/cityscapes.jpg";
import daysVoyage from "../../public/assets/stories/18-days-voyage.jpg";
import architecturals from "../../public/assets/stories/architecturals.jpg";
import worldTour from "../../public/assets/stories/world-tour.jpg";
import unforeseenCorners from "../../public/assets/stories/unforeseen-corners.jpg";
import kingOnAfrica from "../../public/assets/stories/king-on-africa.jpg";
import tripToNowhere from "../../public/assets/stories/trip-to-nowhere.jpg";
import rageOfSea from "../../public/assets/stories/rage-of-the-sea.jpg";
import runningFree from "../../public/assets/stories/running-free.jpg";
import behindWaves from "../../public/assets/stories/behind-the-waves.jpg";
import calmWaters from "../../public/assets/stories/calm-waters.jpg";
import milkyWay from "../../public/assets/stories/milky-way.jpg";
import nightForest from "../../public/assets/stories/dark-forest.jpg";
import somwarpet from "../../public/assets/stories/somwarpet.jpg";
import landOfDreams from "../../public/assets/stories/land-of-dreams.jpg";

const Stories: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Photosnap | Stories</title>
      </Head>

      <Hero />

      <StoriesList>
        {[
          {
            image: theMountains,
            title: "The Mountains",
            author: "John Appleseed",
          },
          {
            image: cityEscapes,
            title: "Sunset Cityscapes",
            author: "Benjamin Cruz",
          },
          {
            image: daysVoyage,
            title: "18 Days Voyage",
            author: "Alexei Borodin",
          },
          {
            image: architecturals,
            title: "Architecturals",
            author: "Samantha Brooke",
          },
          {
            image: worldTour,
            title: "World Tour 2019",
            author: "Timothy Wagner",
          },
          {
            image: unforeseenCorners,
            title: "Unforeseen Corners",
            author: "William Malcolm",
          },
          {
            image: kingOnAfrica,
            title: "King on Africa: Part II",
            author: "Tim Hillenburg",
          },
          {
            image: tripToNowhere,
            title: "The Trip to Nowhere",
            author: "Felicia Rourke",
          },
          {
            image: rageOfSea,
            title: "Rage of The Sea",
            author: "Mohammed Abdul",
          },
          {
            image: runningFree,
            title: "Running Free",
            author: "Michelle",
          },
          {
            image: behindWaves,
            title: "Behind the Waves",
            author: "Lamarr Wilson",
          },
          {
            image: calmWaters,
            title: "Calm Waters",
            author: "Samantha Brooke",
          },
          {
            image: milkyWay,
            title: "The Milky Way",
            author: "Benjamin Cruz",
          },
          {
            image: nightForest,
            title: "Night at The Dark Forest",
            author: "Mohammed Abdul",
          },
          {
            image: somwarpet,
            title: "Somwarpet’s Beauty",
            author: "Michelle",
          },
          {
            image: landOfDreams,
            title: "Land of Dreams",
            author: "William Malcolm",
          },
        ].map(data => (
          <StoryCard
            key={data.title}
            image={data.image}
            title={data.title}
            author={data.author}
          />
        ))}
      </StoriesList>
    </main>
  );
};

export default Stories;

const StoriesList = styled.ul`
  list-style: none;
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
