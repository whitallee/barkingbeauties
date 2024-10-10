export default function Hours() {
    return (
        <section className="w-screen max-w-full bg-[#351D48] text-white flex flex-col gap-6 justify-center items-center text-xl text-center py-6 lg:px-20">
            {/* <span>*Closed Sunday 9/22*</span> */}
            <span>
                <div>Operating Hours:</div>
                <br/>
                <div className="w-full max-w-[350px] flex-col items-center justify-center text-nowrap">
                    <div className="w-full flex justify-between gap-6">
                        <div>Monday</div><div>8:30AM - 6:00PM</div>
                    </div>
                    <div className="w-full flex justify-between gap-6">
                        <div>Tuesday</div><div>8:30AM - 6:00PM</div>
                    </div>
                    <div className="w-full flex justify-between gap-6">
                        <div>Wednesday</div><div>8:30AM - 6:00PM</div>
                    </div>
                    <div className="w-full flex justify-between gap-6">
                        <div>Thursday</div><div>8:30AM - 6:00PM</div>
                    </div>
                    <div className="w-full flex justify-between gap-6">
                        <div>Friday</div><div>10:00AM - 6:00PM</div>
                    </div>
                    <div className="w-full flex justify-between gap-6">
                        <div>Saturday</div><div>8:30AM - 6:00PM</div>
                    </div>
                    <div className="w-full flex justify-between gap-6">
                        <div>Sunday</div><div>Closed</div>
                    </div>
                </div>
            </span>
        </section>
    )
}