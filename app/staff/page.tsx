import Image from "next/image";

export function Bio({alternate, imgSrc, name, blurb}: {alternate: Boolean, imgSrc: string, name: string, blurb: string}){
    function alternateClass(altClassBool: Boolean): string {
        if (altClassBool) {
            return("flex-col sm:flex-row-reverse")
        }
        else {
            return("flex-col sm:flex-row")
        }
    }
    return(
        <div className={"flex gap-8 items-center p-4 " + alternateClass(alternate)}>
            <div className="flex flex-col gap-2 items-center">
                <Image alt={imgSrc} src={imgSrc} width={375} height={525} className="w-40 min-[500px]:w-60 sm:w-80 rounded-xl border-[5px] border-[var(--light-pink)] shadow-md shaddow-inner max-w-[200px]" />
                <h2 className="text-2xl">{name}</h2>
            </div>
            <p className="max-w-[500px]">{blurb}</p>
        </div>
    );
};

export default function Staff(){
    return(
        <div>
            <h1 className="text-4xl text-center pb-8">Meet the Staff</h1>
            <Bio alternate={true} imgSrc="/aboutus_lisa_katiya.png" name="Lisa H." blurb="Lisa, co-owner of Barking Beauties Pet Salon, specializes in dog grooming. With years of experience and a keen eye for detail, she ensures that every dog leaves the salon looking and feeling their best. Lisa's expertise and dedication to exceptional pet care are inspired by her beloved cat, Katiya. She is committed to providing top-notch services and making every pet's visit a positive experience." />
            <Bio alternate={false} imgSrc="/aboutus_haley.jpg" name="Haley D." blurb="Haley, co-owner of Barking Beauties Pet Salon, is our resident dog bathing expert. Known for her gentle touch and calming presence, she makes sure every dog enjoys a relaxing and thorough bath. Haley's love for animals and dedication to their well-being shine through in her work. Her adorable dog, Addie, inspires her to provide the best care possible for all the pets at the salon." />
        </div>
    );
};