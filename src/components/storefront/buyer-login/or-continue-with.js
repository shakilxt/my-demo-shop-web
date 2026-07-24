import { FaFacebookF, FaGoogle } from "react-icons/fa6"
import ContinueWith from "./continue-with"
import { SiApple } from "react-icons/si"

const METHODS = [
    {
        title: 'Google',
        icon: FaGoogle
    },
    {
        title: 'Facebook',
        icon: FaFacebookF
    },
    {
        title: 'Apple',
        icon: SiApple
    }
]
// todo: brand icons seperate svg

export default function OrContinueWith() {
    return (
        <div className="flex flex-col gap-4 mt-6">

            <div className="flex items-center justify-center gap-4">
                <div className="flex-1 w-full h-px bg-gray-200"></div>
                <p className="text-gray-500 text-xs font-medium">or continue with</p>
                <div className="flex-1 w-full h-px bg-gray-200"></div>
            </div>

            <div className="flex flex-row gap-3">
                {
                    METHODS.map((method, index) => (
                        <ContinueWith key={index} method={method} />
                    ))
                }
            </div>

        </div>
    )
}