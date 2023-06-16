import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "../components/storyblokProvider";

storyblokInit({
  accessToken: "rTZ2Co8JEmAGg8PFgzE3Mgtt",
  use: [apiPlugin],
  apiOptions: {
    region: 'eu'
  }
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoryblokProvider>
  )
}
