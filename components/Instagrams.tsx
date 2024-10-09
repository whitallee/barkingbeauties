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
                    <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@barkingbeautiesatx/video/7420171439137148206" data-video-id="7420171439137148206" style={{maxWidth: 605, minWidth: 325}} > <section> <a target="_blank" title="@barkingbeautiesatx" href="https://www.tiktok.com/@barkingbeautiesatx?refer=embed">@barkingbeautiesatx</a> Today we had the pleasure of meeting Charlie, the poodle. He is a sweet little guy <a title="poodle" target="_blank" href="https://www.tiktok.com/tag/poodle?refer=embed">#poodle</a> <a title="doggrooming" target="_blank" href="https://www.tiktok.com/tag/doggrooming?refer=embed">#doggrooming</a> <a title="poodlegroom" target="_blank" href="https://www.tiktok.com/tag/poodlegroom?refer=embed">#poodlegroom</a> <a title="atx" target="_blank" href="https://www.tiktok.com/tag/atx?refer=embed">#atx</a> <a title="texas" target="_blank" href="https://www.tiktok.com/tag/texas?refer=embed">#texas</a> <a title="austin" target="_blank" href="https://www.tiktok.com/tag/austin?refer=embed">#austin</a> <a title="grooming" target="_blank" href="https://www.tiktok.com/tag/grooming?refer=embed">#grooming</a> <a title="haircut" target="_blank" href="https://www.tiktok.com/tag/haircut?refer=embed">#haircut</a> <a title="doghaircut" target="_blank" href="https://www.tiktok.com/tag/doghaircut?refer=embed">#doghaircut</a> <a title="austintexas" target="_blank" href="https://www.tiktok.com/tag/austintexas?refer=embed">#austintexas</a> <a target="_blank" title="♬ original sound - Ally Rendall" href="https://www.tiktok.com/music/original-sound-7091562174627269378?refer=embed">♬ original sound - Ally Rendall</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
                    <TikTokEmbed url="https://www.tiktok.com/@barkingbeautiesatx/photo/7407888826032459038?is_from_webapp=1&sender_device=pc&web_id=7423788057655412254" width={326} />
                </div> */}
        </section>
    )
}