import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Provider } from '~/utils/context/provider'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider>
			<Component {...pageProps} />
		</Provider>
	)
}
