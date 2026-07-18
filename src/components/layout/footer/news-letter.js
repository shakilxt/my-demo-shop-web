

export default function NewsLetter() {
    return (
        <>

            <h3 className="text-gray-400 font-semibold tracking-widest text-sm mb-6 uppercase">
                NEWSLETTER
            </h3>
            
            <p className="text-gray-900 font-semibold text-sm mb-4">
                Subscribe to get updates, new arrival, and offers.
            </p>

            <form className="flex mt-2 w-full max-w-sm" >

                <input
                    type="email"
                    placeholder="Your Email Address"
                    autoComplete="email"
                    required
                    className="w-full border border-gray-300 text-gray-900 border-r-0 px-4 py-2.5 outline-none focus:border-orange-600 focus:outline-1 focus:outline-orange-600 transition-all text-sm"
                />

                <button
                    type="submit"
                    className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2.5 transition-colors text-sm shrink-0"
                >
                    Subscribe
                </button>

            </form>

        </>
    )
}