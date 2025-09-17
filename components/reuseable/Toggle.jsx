import React from "react";

const Toggle = ({ checked, onChange, item, extraClass = "", disabled = false, label = "" }) => {
    return (
        <div className={`flex items-center gap-2 ${extraClass}`}>
            {label && <span className="text-sm font-medium">{label}</span>}
            <label className={`switch ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => !disabled && onChange(item)}
                    disabled={disabled}
                />
                <span className="slider happy-slider round"></span>
            </label>
        </div>
    );
};

export default Toggle;
