import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import { GlobalStyle } from './styles/globalStyle.tsx'
import WebApp from '@twa-dev/sdk'

WebApp.ready();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode >
    <GlobalStyle />
    <div className='--bg-color' style={{ backgroundColor: WebApp.themeParams.accent_text_color }}>
      <TonConnectUIProvider manifestUrl='https://raw.githubusercontent.com/Xusk947/ExchangeBotManifest/main/manifest.json'>
        <App />
      </TonConnectUIProvider>
    </div>
  </React.StrictMode>,
)
