import Image from "next/image";

export default function TitleSection () {
    return (
        <section className="w-screen max-w-full flex flex-col justify-center items-center gap-4 pt-4 px-2 sm:px-6 lg:px-20">
            {/* <h1  className="glow font-medium text-5xl sm:text-7xl text-center tracking-widest">BARKING BEAUTIES</h1>
            <h2 className="text-4xl sm:text-6xl text-center tracking-widest text-nowrap">PET SALON</h2>
            <div className="flex justify-center items-center">
                <Image className="" loading="eager" src={"/BBPS_Logo_NoBorder.png"} alt="Barking Beauties Pet Salon Proffessional Grooming, Baths, Spa for cats and dogs" width={150} height={150}  />
                <div className="hidden sm:flex flex-col items-end justify-center text-2xl text-nowrap">
                    <span>9415 Burnet Road</span>
                    <span>Suite 101</span>
                    <span>Austin, TX 78758</span>
                </div>
            </div> */}
            <Image className="rounded-xl shadow-lg" src="/bbpsFrontSign.png" alt="Barking Beauties Pet Salon: Offering proffessional pet grooming and baths" width={800} height={609.5} loading="eager"/>
            <h3 className="text-2xl sm:text-3xl font-medium text-center">Elevate your pet&apos;s<br className="min-[450px]:hidden"/> grooming experience</h3>
            <div className="flex flex-col items-center justify-center text-xl sm:text-2xl text-nowrap">
                <span>9415 Burnet Road</span>
                <span>Suite 101</span>
                <span>Austin, TX 78758</span>
            </div>
        </section>
    )
}