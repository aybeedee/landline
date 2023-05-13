import './globals.css'

export const metadata = {
  title: 'LandLine Real Estate',
  description: 'Real Estate System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
