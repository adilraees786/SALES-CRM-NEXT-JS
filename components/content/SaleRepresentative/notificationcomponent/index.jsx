

'use client'
import Image from 'next/image';
import back from '../../../../assets/SaleResimages/back.png'
import bell from '../../../../assets/SaleResimages/bell.png'
import { useRouter } from 'next/navigation';

const NotificationCompoment = () => {
    const router = useRouter()
    const notifications = [
        {
            id: 1,
            title: "Daily Sales Goal Alert:",
            description: "Today's sales goal: X IMS. Let's hit that target!",
            time: "10:30 AM",
        },
        {
            id: 2,
            title: "Weekly Commitment Progress:",
            description: "You committed to 80,000 IMS this week. You have 2 days left to reach it.",
            time: "10:30 AM",
        },
        {
            id: 3,
            title: "Focus Product Reminder:",
            description: "Reminder: Your mission product for this week is XYZ. Try to push more sales!",
            time: "10:30 AM",
        },
        {
            id: 4,
            title: "Personal Best Track:",
            description: "Your achievement increased by $20,000, let's reach 100% next week.",
            time: "10:30 AM",
        },
        {
            id: 5,
            title: "Personal Best Track:",
            description: "Your achievement increased by $20,000, let's reach 100% next week.",
            time: "10:30 AM",
        },
    ]


    const backdashboard = () => {
        router.push('/sale-representative/dashboard')

    }

    return (
        <div className="w-full px-2">
            {/* Header */}
            <div className="  px-4 py-3">
                <div className="flex items-center gap-1"
                    onClick={backdashboard}
                >
                    <div className="  flex items-center justify-center ">
                        <Image src={back} width={40} height={40} alt="Back icon" className=' cursor-pointer' />
                    </div>
                    <span className="text-[#38373A] font-bold pt-2 cursor-pointer">Back To Home</span>
                </div>
            </div>

            {/* Notifications List */}
            <div className="px-4 py-4 bg-white  rounded-xl  ">
                {notifications.map((notification) => (
                    <div key={notification.id} className=" bg-white  p-4 ">
                        <div className="flex items-start gap-3 border-b border-gray-400 ">
                            {/* Icon */}
                            <Image src={bell} width={30} height={30} />

                            {/* Content */}
                            <div className="flex-1 mb-2 ">
                                <h3 className="font-bold text-[#0E0D0B] text-sm mb-1">{notification.title}</h3>
                                <p className="text-[#0E0D0B] text-sm font-sm ">{notification.description}</p>
                            </div>

                            {/* Time */}
                            <div className="text-gray-400 text-xs flex-shrink-0 mt-1">{notification.time}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default NotificationCompoment;