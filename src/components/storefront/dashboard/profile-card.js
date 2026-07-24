import Image from 'next/image'
import { BadgeCheck } from 'lucide-react'

export default function ProfileCard({ user }) {
    return (
        <div className="bg-white border border-gray-200 p-6 flex items-center gap-4">
            <Image
                src={user.avatar_url}
                alt={user.name}
                width={56}
                height={56}
                className="size-20 rounded-full object-cover shrink-0"
                priority
            />
            <div className='flex flex-col gap-1.5'>
                <div className='flex items-center gap-1.5'>
                    <p className="font-bold text-stone-900">{user.name}</p>
                    {user.verified && <BadgeCheck size={20} strokeWidth={2} className="size-5 shrink-0 text-orange-500" />}
                </div>

                {user.membershipLabel && (
                    <span className="w-fit rounded-full p-3 py-1 text-xs font-semibold text-orange-600 border border-orange-600 bg-orange-50">
                        {user.membershipLabel} Member
                    </span>
                )}
            </div>
        </div>
    )
}