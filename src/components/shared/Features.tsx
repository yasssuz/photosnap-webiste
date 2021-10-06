import styled from "styled-components";

interface FeaturesProps {
  complete: boolean;
}

export default function Features({ complete }: FeaturesProps) {
  const completeList = [
    {
      image: "/assets/features/responsive.svg",
      title: "100% Responsive",
      description:
        "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    },
    {
      image: "/assets/features/no-limit.svg",
      title: "No Photo Upload Limit",
      description:
        "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    },
    {
      image: "/assets/features/embed.svg",
      title: "Available to Embed",
      description:
        "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ",
    },
    {
      image: "/assets/features/custom-domain.svg",
      title: "Custom Domain",
      description:
        "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    },
    {
      image: "/assets/features/boost-exposure.svg",
      title: "Boost Your Exposure",
      description:
        "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
    },
    {
      image: "/assets/features/drag-drop.svg",
      title: "Drag & Drop Image",
      description:
        "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
    },
  ];
  const partialList = [
    {
      image: "/assets/features/responsive.svg",
      title: "100% Responsive",
      description:
        "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    },
    {
      image: "/assets/features/no-limit.svg",
      title: "No Photo Upload Limit",
      description:
        "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    },
    {
      image: "/assets/features/embed.svg",
      title: "Available to Embed",
      description:
        "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ",
    },
  ];
  const list = complete ? completeList : partialList;

  return (
    <Container className={`${complete && "complete"}`}>
      {list.map(feature => (
        <Feature key={feature.title}>
          <Illustration src={feature.image} alt={feature.title} />
          <Title>{feature.title}</Title>
          <Description>{feature.description}</Description>
        </Feature>
      ))}
    </Container>
  );
}

const Container = styled.ul`
  background: ${props => props.theme.colors.white};
  padding: 8rem 24px;
  list-style: none;
  display: grid;
  gap: 5.6rem;
  text-align: center;

  &.complete {
    padding: 6.4rem 24px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 12rem 24px;

    li:last-of-type {
      grid-column: 1 /3;
    }

    &.complete {
      padding: 11.2rem 24px;

      li:last-of-type {
        grid-column: unset;
      }
    }
  }

  @media (min-width: 950px) {
    grid-template-columns: repeat(3, 1fr);

    li:last-of-type {
      grid-column: unset;
    }

    &.complete {
      padding: 16rem 24px;
    }
  }
`;

const Feature = styled.li`
  color: ${props => props.theme.colors.black};
`;

const Illustration = styled.img`
  width: 72px;
  height: 72px;
  object-fit: contain;
`;

const Title = styled.h3`
  margin: 4rem 0 1.6rem;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 139%;
`;

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 167%;
  opacity: 0.6;
  max-width: 40ch;
  margin: auto;
`;
