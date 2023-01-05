import Head from 'next/head'
import RedditTracker from '../components/reddit'

export default function Home() {
  return (
    <>
      <Head>
        <title>Stock Tracker App</title>
        <meta name="description" content="Web app for tracking stock prices on social media" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full max-h-screen h-screen flex flex-col items-center justify-center bg-stone-800 text-stone-200">
        <h1 className="text-6xl">Stock App</h1>
        <div className="w-full grow flex flex-row">
          <RedditTracker />
        </div>
        <div className="w-full flex justify-center">
          <h1 className="text-2xl mb-1">Copyright &copy; <a className="text-sky-400 hover:text-sky-300 hover:underline" href="https://devinarena.com">Devin Arena</a> 2022</h1>
        </div>
      </main>
    </>
  )
}
