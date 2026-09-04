import { Link } from 'react-router'
// import { useState } from 'react'

export default function Navigation({ tabs }) {
    return (
        <div className="container mt5">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                {tabs.map((tab) => (
                    <li className="nav-item" role="presentation" key={tab.id}>
                        <Link className="nav-link" to={tab.path}>
                            {tab.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
