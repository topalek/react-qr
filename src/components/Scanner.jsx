import { useState } from 'react'
import './Generator.css'
import { Scanner } from '@yudiel/react-qr-scanner'
import { SCAN_DATA } from '../constants'
// import { SCAN_DATA } from '../constants'

export default function Scaner() {
    const [result, setResult] = useState(null)
    const handleScan = (result) => {
        const val = result[0]?.rawValue
        setResult(val)
        const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
        const set = new Set(data)
        set.add(val)
        localStorage.setItem(SCAN_DATA, JSON.stringify(Array.from(set)))
    }
    const handleError = (error) => {
        console.error('Error: ', error)
    }

    return (
        <div className="scanner">
            <p>{result}</p>
            <Scanner
                onScan={handleScan}
                onError={handleError}
                sound={false}
                constraints={{
                    facingMode: 'user',
                    width: { ideal: 1280 },
                    height: { ideal: 720 },
                }}
                allowMultiple
            />
        </div>
    )
}
