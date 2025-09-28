// app/layout.js
import './globals.css'

export const metadata = {
  title: 'Big Five → Song Recommender',
  description: 'Adjust the Big Five sliders and get a song recommendation tailored to your personality profile.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google site verification */}
        <meta name="google-site-verification" content="8ved3M_jxQmwwSfHO6QmvrGZffJN_DvJ4GJeMlCez14" />
      </head>
      <body className="bg-gray-50 text-gray-900 antialiased">
        <main className="max-w-3xl mx-auto p-6">{children}</main>
      </body>
    </html>
  )
}
