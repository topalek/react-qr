import { Routes, Route } from 'react-router'
import Generator from './components/Generator'
import Scanner from './components/Scanner'
import Navigation from './components/Navigation'
import GenerateHistory from './components/GenerateHistory'
import ScanHistory from './components/ScanHistory'

export default function Layout() {
    const tabs = [
        {
            id: 1,
            label: 'QR-Code Генератор',
            path: '/generate',
            component: Generator,
        },
        {
            id: 2,
            label: 'Scanner',
            path: '/scan',
            component: Scanner,
        },
        {
            id: 3,
            label: 'История сканирования',
            path: '/scan-history',
            component: () => ScanHistory,
        },
        {
            id: 4,
            label: 'История генерировани',
            path: '/generate-history',
            component: () => GenerateHistory,
        },
    ]

    return (
        <div className="app">
            <Navigation tabs={tabs} />
            <div className="container">
                <div className="tab-content border">
                    <div className="p-4">
                        <Routes>
                            <Route path="/generate" element={<Generator />} />
                            <Route path="/scan" element={<Scanner />} />
                            <Route
                                path="/scan-history"
                                element={<ScanHistory />}
                            />
                            <Route
                                path="/generate-history"
                                element={<GenerateHistory />}
                            />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}
