import React from "react";

import { EpisodeCard } from "../components";
import examplePodcastCover from "../img/example-podcast-cover.jpg";

const EpisodeFeedContainer = () => {
  const mockData = [
    {
      runningNumber: 1,
      coverImage: examplePodcastCover,
      title: "Angelos Arnis & Sonja Krogius: Is DesignOps for you?",
      description:
        "DesignOps helps companies invest in design by operationalizing their workflow, hiring, alignment between teams, and more so that designers are able to focus on design work and let someone else take control of the rest."
    },
    {
      runningNumber: 2,
      coverImage: examplePodcastCover,
      title: "Angelos Arnis & Sonja Krogius: Is DesignOps for you?",
      description:
        "DesignOps helps companies invest in design by operationalizing their workflow, hiring, alignment between teams, and more so that designers are able to focus on design work and let someone else take control of the rest."
    },
    {
      runningNumber: 3,
      coverImage: examplePodcastCover,
      title: "Angelos Arnis & Sonja Krogius: Is DesignOps for you?",
      description:
        "DesignOps helps companies invest in design by operationalizing their workflow, hiring, alignment between teams, and more so that designers are able to focus on design work and let someone else take control of the rest."
    }
  ];

  return mockData.map((item, index) => {
    // Set modifier class if index is uneven.
    const modifier = index % 2 === 0 ? undefined : 'episode-card__poked-right';

    return (
      <EpisodeCard {...item} modifier={modifier} style={{marginTop: '2rem'}} />
    );
  });
};

export default EpisodeFeedContainer;
