"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** Import your components */
import Page from "../components/page";
import BodyText from "../components/bodyText";
import Headline from "../components/headline";

const components = {
  page: Page,
  BodyText: BodyText,
  headline: Headline
};

storyblokInit({
  accessToken: "rTZ2Co8JEmAGg8PFgzE3Mgtt",
  use: [apiPlugin],
  components
});

export default function StoryblokProvider({ children }) {
  return children;
}
