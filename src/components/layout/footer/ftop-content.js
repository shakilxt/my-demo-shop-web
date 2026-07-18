
export default function FooterTopContent({ children, title, description }) {

    return (
        <div className="flex flex-col items-start gap-1">

            <div className="w-10 h-10 flex items-center justify-center rounded-full text-orange-600">
                {children}
            </div>

            <h3 className="text-gray-900 font-bold mb-4">{title}</h3>

            <p className="text-sm text-gray-600">{description}</p>

        </div>
    )

}