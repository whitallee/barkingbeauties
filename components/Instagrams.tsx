import { InstagramEmbed } from "react-social-media-embed";

export default function Instagrams () {
    return(
        <section className="w-screen max-w-full pt-4 px-[2px] flex flex-wrap gap-2 justify-center">
                <InstagramEmbed url="https://www.instagram.com/p/C_1JlLzvkSK/" captioned width={326} />
                <InstagramEmbed url="https://www.instagram.com/p/C_1Dt5GPUBa/" captioned width={326} />
                <InstagramEmbed url="https://www.instagram.com/p/C_wGyFhPjzG/" captioned width={326} />
        </section>
    )
}