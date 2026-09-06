import { useState } from 'react'
import { SCAN_DATA } from '../constants'
import { QRCodeSVG } from 'qrcode.react'

export default function ScanHistory() {
    const [scanned, setScanned] = useState(() =>
        JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
    )
    const clearHistory = () => {
        localStorage.removeItem(SCAN_DATA)
        setScanned([])
    }
    return (
        <div className="history">
            <header>
                <h3>История сканирования</h3>
                {scanned.length > 0 && (
                    <div onClick={clearHistory} className="clear">
                        <span title="Очистить историю">очистить</span>
                    </div>
                )}
            </header>
            <table className="table">
                <tbody>
                    {scanned.map((str) => (
                        <tr key={str}>
                            <td>
                                <QRCodeSVG
                                    value={str}
                                    className="mb-3"
                                    size={150}
                                />
                            </td>
                            <td>{str}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
