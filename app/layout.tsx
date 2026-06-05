import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ThreadSplit — Split Blog Posts into Social Media Threads',
  description: 'Convert blog posts into optimized Twitter/LinkedIn thread formats with proper hashtags and mentions. Built for content creators and marketers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f8df6aab-4faa-41da-987f-17bfa7af4d85"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
