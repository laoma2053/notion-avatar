import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Notion Avatar Maker | Notion中文新社区</title>
        <meta name="description" content="制作你的 Notion 风格头像 | Notion中文新社区" />
        // SEO优化相关meta标签
        <meta name="keywords" content="Notion头像,Notion,头像制作,Notion中文,Notion中文社区" />
        <meta property="og:title" content="Notion Avatar Maker | Notion中文新社区" />
        <meta property="og:description" content="制作你的 Notion 风格头像 | Notion中文新社区" />
      </Head>
      <Component {...pageProps} />
    </>
  )
} 