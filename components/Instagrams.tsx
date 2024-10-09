import { InstagramEmbed, TikTokEmbed } from "react-social-media-embed";

export default function Instagrams () {
    return(
        <section className="w-screen max-w-full pt-4 px-[2px] flex flex-wrap gap-2 justify-center">
                <div className="w-full flex flex-wrap gap-2 justify-center">
                    <InstagramEmbed url="https://www.instagram.com/p/DA33VvhPye4/" captioned width={326} />
                    <InstagramEmbed url="https://www.instagram.com/p/DA4KbXbS4eN/" captioned width={326} />
                    <InstagramEmbed url="https://www.instagram.com/p/DA39kTAyzmR/" captioned width={326} />
                </div>
                {/* <div className="w-full flex flex-wrap gap-2 justify-center">
                    <TikTokEmbed url="https://www.tiktok.com/@barkingbeautiesatx/photo/7407888826032459038?is_from_webapp=1&sender_device=pc&web_id=7423788057655412254" width={326} />
                </div> */}
        </section>
    )
}