import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: '信用情報Lab',
  description: '信用情報・ブラックリスト',
  openGraph: { title: '信用情報Lab', description: '信用情報・ブラックリスト', type: 'website', locale: 'ja_JP', siteName: '信用情報Lab' },
  twitter: { card: 'summary_large_image', title: '信用情報Lab', description: '信用情報・ブラックリスト' },
  robots: { index: true, follow: true },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SVQXY5C3PW"></script>
        <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SVQXY5C3PW');`}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:`{"@context": "https://schema.org", "@type": "WebSite", "name": "信用情報Lab", "description": "信用情報・ブラックリスト", "url": "https://credit-lab-jp.vercel.app", "publisher": {"@type": "Organization", "name": "AOKAE合同会社"}}`}} />
      </head>
      <body>{children}</body>
    </html>
  )
}