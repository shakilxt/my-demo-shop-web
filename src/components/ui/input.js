import { twMerge } from "tailwind-merge";

export default function Input({ name, type, label, autoComplete, required = true, className = "", defaultValue }) {
    return (
        <div>
            <label className="block text-base font-semibold text-gray-900 mb-1">{label}</label>
            <input
                name={name}
                type={type}
                required={required}
                autoComplete={autoComplete}
                step={type === 'number' ? '0.01' : undefined}
                defaultValue={defaultValue}
                className={twMerge("w-full px-4 h-13 pb-0.5 border border-gray-200 text-stone-900 placeholder-gray-400 focus:outline-2 outline-gray-900", className)}
            />
        </div>
    );
}