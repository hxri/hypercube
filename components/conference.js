export default function Conferences() {
    return(
        <div className="mb-10">
            <p className="font-bold">Upcoming Conferences</p>
            <p className="leading-none text-xs">Upcoming conferences to participate and learn.</p>
            <div className="card-container py-2">
                <div className="item mb-2">
                    <span className="text-xxs py-1 px-1.5 rounded-lg bg-green-500 text-white font-bold">31st Oct, 2021</span>
                    <p className="text-sm font-bold leading-none mt-2">IPRECON 2021</p>
                    <p className="text-xs italic">College of Engineering Karunagappally</p>
                </div>
                <div className="item mb-2">
                    <span className="text-xxs py-1 px-1.5 rounded-lg bg-green-500 text-white font-bold">31st Oct, 2021</span>
                    <p className="text-sm font-bold leading-none mt-2">IPRECON 2021</p>
                    <p className="text-xs italic">College of Engineering Karunagappally</p>
                </div>
            </div>
            <span className="text-xxs py-1 px-2 bg-gray-600 text-white rounded-lg absolute right-0 cursor-pointer">See more</span>
        </div>
    )
}