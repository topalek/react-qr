import { useState } from "react";
import Generator from "./Generator";
import Scanner from "./Scanner";

export default function Layout() {
  const [tabs, setTabs] = useState([
    { id: 1, label: "QR-Code Генератор", active: true, component: Generator },
    { id: 2, label: "Scanner", active: false, component: Scanner },
    { id: 3, label: "Contacts", active: true, component: null },
  ]);

  const tabClickHandler = (tab) => {
    setTabs(
      tabs.map((t) => ({
        ...t,
        active: t.id === tab.id,
      })),
    );
  };

  return (
    <div className="app">
      <div className="container mt5">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          {tabs.map((tab) => (
            <li className="nav-item" role="presentation" key={tab.id}>
              <button
                className={`nav-link ${tab.active ? "active" : ""}`}
                type="button"
                role="tab"
                onClick={() => tabClickHandler(tab)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="tab-content border">
          {tabs.map((t) => (
            <div
              key={t.id}
              className={`tab-pane fade p-4  ${t.active ? "show active" : ""}`}
              role="tabpanel"
              aria-labelledby="home-tab"
              tabIndex="0"
            >
              <div className="container">
                {t.active && t.component ? <t.component /> : ""}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
