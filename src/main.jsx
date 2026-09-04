import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
// import Generator from './Generator'
// import Scanner from './Scanner'
import Layout from './Layout'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Layout />
    </BrowserRouter>
)
