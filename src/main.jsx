import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import { TreeProvider } from './components/TreeContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <TreeProvider>
            <App />
        </TreeProvider>
    </StrictMode>,
)