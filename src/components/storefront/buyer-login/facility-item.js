
export default function FacilityItem({ facility, className, ...props }) {
    return (
        <div className={`flex flex-row items-center text-center gap-4 ${className}`} {...props}>

            <div className="flex items-center justify-center size-12 rounded-full bg-white">
                <facility.icon stroke={1.5} className="text-gray-900" />
            </div>

            <div className="flex flex-col items-start">
                <p className="text-base font-bold mb-1 text-gray-900">{facility.title}</p>
                <p className="text-xs font-normal text-gray-500">{facility.description}</p>
            </div>
        </div>
    )
}