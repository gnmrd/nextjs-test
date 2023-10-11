"use client"

import { useState } from 'react'
import { motion } from "framer-motion";

let tabs = [
  { id: "first", label: "first" },
  { id: "second", label: "second" },
  { id: "third", label: "third" },
];

export default function Menu() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex space-x-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`relative border-transparent rounded-t-lg w-24 px-3 py-1.5 text-sm font-medium outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute z-[-20] inset-0 bg-yellow-100"
              style={{ borderRadius: "inherit" }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  )
}