import { storyblokEditable } from "@storyblok/react/rsc";
import { renderRichText } from "@storyblok/react";

const BodyText = ({ blok }) => (
  <div
    {...storyblokEditable(blok)}
    dangerouslySetInnerHTML={{ __html: renderRichText(blok.content) }}
  />
);
export default BodyText;
