import React, { createContext, useState, useContext } from "react";

const UnitContext = createContext();

export function UnitProvider({ children }) {
    const [unit, setUnit] = useState("celsius");

    const toggleUnit = () => {
        setUnit((prevUnit) => (prevUnit === "celsius" ? "fahrenheit" : "celsius"));
    };

    return (
        <UnitContext.Provider value={{ unit, toggleUnit }}>
            {children}
        </UnitContext.Provider>
    );
}

export function useUnit() {
    return useContext(UnitContext);
}
