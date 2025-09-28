// app/layout.js
export const metadata = {
  title: "Big Five → Song Recommender",
  description: "Adjust your Big Five traits and get a personalized song recommendation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="8ved3M_jxQmwwSfHO6QmvrGZffJN_DvJ4GJeMlCez14"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
