import { NavLink } from 'react-router'

export default function Navigation({ tabs }) {
    return (
        <div className="container mt5">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                {tabs.map((tab) => (
                    <li className="nav-item" role="presentation" key={tab.id}>
                        <NavLink
                            className={({ isActive }) =>
                                `nav-link ${isActive ? 'active' : ''}`
                            }
                            to={tab.path}
                        >
                            {tab.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}
