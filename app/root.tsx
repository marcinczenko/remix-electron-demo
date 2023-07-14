import type { LinksFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'

import styles from './styles/app.css'

export const meta = () => {
  return [{ title: 'Demo Remix Electron' }]
}

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <meta
          httpEquiv='Content-Security-Policy'
          content="default-src 'self' 'unsafe-inline'; script-src 'unsafe-inline' 'self'; style-src 'unsafe-inline' 'self'; connect-src ws://localhost:8002;"
        ></meta>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
