import '../styles/globals.css'

export const metadata = {
  title: 'Big Five Song Recommender',
  description: 'Adjust Big Five sliders to get a song recommendation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-gray-100">
        {children}
      </body>
    </html>
  )
}
