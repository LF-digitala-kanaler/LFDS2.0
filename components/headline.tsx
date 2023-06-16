import { storyblokEditable } from "@storyblok/react/rsc";

const Headline = ({ blok }) => (
  <h1
    {...storyblokEditable(blok)}
  >
    {blok.title}
  </h1>
);
export default Headline
