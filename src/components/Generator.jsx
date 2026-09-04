import { QRCodeSVG } from 'qrcode.react'
import { useState } from 'react'
import './Generator.css'
import { SCAN_DATA } from '../constants'

export default function Generator() {
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')

    console.log(SCAN_DATA)
    const handleChange = (e) => {
        setValue(e.target.value)
        setResult('') // Clear the result when the input changes
    }
    const handleClick = () => {
        setResult(value)
        setValue('') // Clear the input field after generating the QR code
    }

    return (
        <>
            <div>
                {result && (
                    <QRCodeSVG value={result} className="mb-3" size={300} />
                )}
            </div>
            <div className="input-group text-value">
                <input
                    type="search"
                    value={value}
                    className="form-control"
                    onChange={handleChange}
                    placeholder="Введите текст для генерации QR-кода"
                />
                <button
                    type="button"
                    onClick={handleClick}
                    className="btn btn-primary"
                >
                    Сгенерировать
                </button>
            </div>
        </>
    )
}
