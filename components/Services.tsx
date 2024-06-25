import Image from "next/image";

function ServiceItem({serviceName, imgSrc}: {serviceName: string, imgSrc: string}){
    return(
        <div className="flex flex-col items-center">
            <h3 className="text-2xl p-2 bg-white rounded-xl mb-2 min-w-[50%] text-center">{serviceName}</h3>
            <Image src={imgSrc} alt={imgSrc} width={600} height={600} fetchPriority="high" className="aspect-square object-cover rounded-xl border-[5px] border-[var(--neutral-green)] drop-shadow-md" />
        </div>
    )
}

export default function Services(){
    return(
        <>
            <div id="services" className="w-full flex flex-col items-center">
                <h2 className="text-4xl pb-8 text-center">Services Offered</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 rounded-xl drop-shadow-2xl shadow-inner bg-[var(--light-pink)] px-8 pb-8 pt-4">
                    <ServiceItem serviceName="Dog Grooms" imgSrc="/dog_groom_2.jpg"></ServiceItem>
                    <ServiceItem serviceName="Baths" imgSrc="/dog_bath_1.jpg"></ServiceItem>
                    <ServiceItem serviceName="Nail Trims" imgSrc="/dog_nailtrim_1.jpg"></ServiceItem>
                    <ServiceItem serviceName="Cat Grooms" imgSrc="/cat_groom_1.jpg"></ServiceItem>
                </div>
            </div>
        </>
    );
};