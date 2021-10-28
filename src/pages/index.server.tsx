import type { NextPage } from "next";
import styled from "styled-components";
import Head from "next/head";

import Banner from "../components/shared/Banner";
import StoryCard from "../components/shared/StoryCard";
import Features from "../components/shared/Features";

import createAndShare from "../../public/assets/home/desktop/create-and-share.jpg";
import beautifulStories from "../../public/assets/home/desktop/beautiful-stories.jpg";
import designedEveryone from "../../public/assets/home/desktop/designed-for-everyone.jpg";
import theMountains from "../../public/assets/stories/mountains.jpg";
import cityEscapes from "../../public/assets/stories/cityscapes.jpg";
import daysVoyage from "../../public/assets/stories/18-days-voyage.jpg";
import architecturals from "../../public/assets/stories/architecturals.jpg";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Photosnap | Home</title>
      </Head>

      {[
        {
          position: "left",
          title: "Create and share your photo stories. ",
          description:
            "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
          hero: true,
          image: createAndShare.src,
          blur: createAndShare.blurDataURL,
          link: "invite",
        },
        {
          position: "right",
          title: "BEAUTIFUL STORIES EVERY TIME",
          description:
            "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
          hero: false,
          image: beautifulStories.src,
          blur: beautifulStories.blurDataURL,
          link: "story",
        },
        {
          position: "left",
          title: "DESIGNED FOR EVERYONE",
          description:
            "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.",
          hero: false,
          image: designedEveryone.src,
          blur: designedEveryone.blurDataURL,
          link: "story",
        },
      ].map(data => (
        <Banner
          key={data.image}
          position={data.position}
          title={data.title}
          description={data.description}
          hero={data.hero}
          image={data.image}
          blur={data.blur}
          link={data.link}
        />
      ))}

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
        ].map(data => (
          <StoryCard
            key={data.title}
            image={data.image}
            title={data.title}
            author={data.author}
          />
        ))}
      </StoriesList>

      <Features complete={false} />
    </main>
  );
};

export default Home;

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
