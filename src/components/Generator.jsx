import { QRCodeSVG } from 'qrcode.react'
import { useState } from 'react'
import './Generator.css'
import { GENERATE_DATA } from '../constants'

export default function Generator() {
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
        setResult('') // Clear the result when the input changes
    }
    const handleClick = () => {
        setResult(value)
        setValue('')
        const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
        const set = new Set(data)
        set.add(value)
        localStorage.setItem(GENERATE_DATA, JSON.stringify(Array.from(set)))
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
