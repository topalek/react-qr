import { Routes, Route } from 'react-router'
import Generator from './Generator'
import Scanner from './Scanner'
import Navigation from './Navigation'

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
            component: () => <>История сканирования</>,
        },
        {
            id: 4,
            label: 'История генерировани',
            path: '/generate-history',
            component: () => <>История генерировани</>,
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
                                element={<>История сканирования</>}
                            />
                            <Route
                                path="/generate-history"
                                element={<>История генерировани</>}
                            />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}
