
export default function FooterTopContent({ icon: Icon, title, description }) {

    return (
        <div className="flex flex-col items-start gap-2">

            <Icon stroke={1} className="size-8 text-orange-600" />

            <h3 className="text-gray-900 font-extrabold mb-2">{title}</h3>

            <p className="text-sm text-gray-500">{description}</p>

        </div>
    )

}