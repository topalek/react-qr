import { useState } from 'react'
import { GENERATE_DATA } from '../constants'
import { QRCodeSVG } from 'qrcode.react'

export default function GenerateHistory() {
    const [generated, setGenerated] = useState(
        () => JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
    )
    const clearHistory = () => {
        localStorage.removeItem(GENERATE_DATA)
        setGenerated([])
    }
    return (
        <div className="history">
            <header>
                <h3>История генераций</h3>
                {generated.length > 0 && (
                    <div onClick={clearHistory} className="clear">
                        <span title="Очистить историю">очистить</span>
                    </div>
                )}
            </header>
            <table className="table">
                <tbody>
                    {generated.map((str) => (
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
