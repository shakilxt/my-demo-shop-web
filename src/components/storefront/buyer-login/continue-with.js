
export default function ContinueWith({ method }) {
    return (
        <button className="flex items-center justify-center gap-2.5 w-full h-12 text-orange-600 bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors">
            <method.icon className="size-5" />
            <span className="text-sm font-semibold text-gray-900">{method.title}</span>
        </button>
    )
}