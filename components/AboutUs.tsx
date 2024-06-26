import Image from "next/image";

export default function AboutUs(){
    return(
        <>
            <div id="about-us" className="w-full flex flex-col items-center">
                <h2 className="text-4xl pb-12 text-center">About Us</h2>
                <div className="flex flex-col pb-8">
                    <Image alt="Addie" src="/aboutus_addie.png" width={375} height={525} className="w-40 min-[500px]:w-60 sm:w-80 relative -translate-x-[25%] scale-110 rounded-xl border-[5px] border-[var(--light-blue)] shadow-md shaddow-inner" />
                    <Image alt="Haley and Lisa" src="/aboutus_haley_lisa.png" width={375} height={525} className="w-40 min-[500px]:w-60 sm:w-80 relative translate-x-[25%] scale-110 rounded-xl border-[5px] border-[var(--light-blue)] shadow-md shaddow-inner" />
                    {/* <Image alt="Lisa and Katiya" src="/aboutus_lisa_katiya.png" width={375} height={525} className="w-40 min-[500px]:w-60 sm:w-80 relative -translate-x-[25%] scale-110 rounded-xl border-[5px] border-[var(--light-blue)] shadow-md shaddow-inner" /> */}
                </div>
                <p className="p-4">
                    Welcome to Barking Beauties Pet Salon! Founded by great friends and dedicated pet lovers, Lisa and Haley, our salon is a dream come true. Lisa&apos;s cat, Katiya, and Haley&apos;s dog, Addie, have been our constant companions and inspiration on this journey.<br/><br/>
                    We believe every pet deserves to look and feel their best, which is why we offer a range of personalized grooming services tailored to your pet&apos;s unique needs. At Barking Beauties, we use only the highest quality products and the latest grooming techniques to ensure your pet leaves looking fabulous and feeling great.<br/><br/>
                    In addition to our grooming services, we also have a charming pet-themed boutique inside our salon. Here, you&apos;ll find a curated selection of high-quality pet accessories, toys, and treats to spoil your furry friends even more.<br/><br/>
                    Our mission is to provide a safe, welcoming, and professional environment where pets can enjoy a stress-free grooming experience. From routine baths and stylish haircuts to special spa treatments, we&apos;re here to pamper your furry friends with love and care.<br/><br/>
                    Thank you for choosing Barking Beauties Pet Salon. We look forward to meeting you and your pets!<br/><br/>
                    Warm regards.<br/>
                    Lisa, Haley, Katiya, and Addie
                </p>
            </div>
        </>
    );
};