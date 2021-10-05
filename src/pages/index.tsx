import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/shared/Banner";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Photosnap | Home</title>
      </Head>

      <Banner
        position='left'
        height={65}
        title='Create and share your photo stories. '
        description='Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.'
        hero={true}
        image='/assets/home/desktop/create-and-share.jpg'
        link='invite'
      />
      <Banner
        position='right'
        height={60}
        title='BEAUTIFUL STORIES EVERY TIME'
        description='We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.'
        image='/assets/home/desktop/beautiful-stories.jpg'
        link='story'
      />
      <Banner
        position='left'
        height={60}
        title='DESIGNED FOR EVERYONE'
        description='Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.'
        image='/assets/home/desktop/designed-for-everyone.jpg'
        link='story'
      />
    </main>
  );
};

export default Home;
