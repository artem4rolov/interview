import { createRoot } from 'react-dom/client'
import { App } from './app'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'

const root = createRoot(document.getElementById('root')!)

if (root) {
  root.render(
    // <ErrorBoundary fallback={<Loader />}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    // </ErrorBoundary>,
  )
}
