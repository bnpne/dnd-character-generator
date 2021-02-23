import 'tailwindcss/tailwind.css'
import 'firebase/firestore'
import 'firebase/auth'
import { FuegoProvider } from '@nandorojo/swr-firestore'
import Fuego from '../lib/fuego.js'
import { Provider } from 'jotai'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
}

const fuego = new Fuego(firebaseConfig)

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <FuegoProvider fuego={fuego}>
        <Component {...pageProps} />
      </FuegoProvider>
    </Provider>
  )
}

export default MyApp
