// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Big Five Song Recommender",
  description:
    "Adjust your Big Five personality traits and get a perfect song recommendation instantly!",
  keywords: [
    "Big Five personality test",
    "song recommender",
    "music personality",
    "INFJ music",
    "MBTI and music",
    "personality quiz songs",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Big Five Song Recommender",
    description:
      "Set your Big Five traits and discover a song that matches your personality.",
    url: "https://bigfive-song-app.vercel.app",
    siteName: "Big Five Song App",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
