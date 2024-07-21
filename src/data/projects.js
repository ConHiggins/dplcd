import fthmlssSheets        from "../Assets/Fthmlss-Sheet.jpg";
import fthmlssPortVid       from "../Assets/FthmlssProfileVideo.mp4";
import lockholdsVid         from "../Assets/LOCKTRIP_DSPLACED_COMPRESSED.mp4";
import seraphVid            from "../Assets/seraph_compressed.mp4";
import coticVid             from "../Assets/Cotic_Flaremax Build_FINALV3.mp4";
import columbiaHighlineAd   from "../Assets/columb_highline_ad.jpg";
import columbiaHighline_1   from "../Assets/COLUMBIA_KENDAL_HIGHLINE_FINAL.mp4";
import gloryDaysPort        from "../Assets/gloryDaysPort.jpg"
import ajRear               from "../Assets/AJ_rear.jpg";
import ajFront              from "../Assets/AJ_front.jpg";

import hlZ0 from "../Assets/zine/ZINEFINALPHOTO.jpg";
import hlz1 from "../Assets/zine/ZINEFINALPHOTO-2.jpg";
import hlZ2 from "../Assets/zine/ZINEFINALPHOTO-3.jpg";
import hlz3 from "../Assets/zine/ZINESCANS.jpg";
import hlZ4 from "../Assets/zine/ZINESCANS10.jpg";
import hlz5 from "../Assets/zine/zinescnas11.jpg";
import hlZ6 from "../Assets/zine/ZINESCANS7.jpg";
import hlz7 from "../Assets/zine/ZINESCANS8.jpg";


import locksnv0 from"../Assets/Lock_Product_P7.jpg";
import locksnv1 from"../Assets/Posters5FINAL2.jpg";
import locksnv2 from"../Assets/Posters2final2.jpg";
import locksnv3 from"../Assets/PostersFINAL2.jpg";
import locksnv4 from"../Assets/Posters7FINAL2_.jpg";
import locksnv5 from"../Assets/Lock_Product_Pink4.jpg";


const hlzines = [
    hlZ0,
    hlz1,
    hlZ2,
    hlz3,
    hlZ4,
    hlz5,
    hlZ6,
    hlz7
]

const locksnvs = [
    locksnv0,
    locksnv1,
    locksnv2,
    locksnv3,
    locksnv4,
    locksnv5,
]

const aj1 = [
    ajFront,
    ajRear
]

const projects = [
    {
        slug: "glory-days-port",
        title: "Photography and Design",
        subtext: "",
        client: "Alan Johnson",
        mainImage: gloryDaysPort,
        body: (<p>Creative direction and photography for <i>Alan Johnson</i> ahead of the release of <i>Glory Days</i></p>),
        isPortrait: true,
        isFolio:true
    },
    {
        slug: "aj-yuku",
        title: "YUKU",
        subtext: "",
        client: "Alan Johnson",
        imageStack: aj1,
        body: (<p>Creative direction and artwork for <i>Alan Johnson - Glory Days</i>. Released on <i>YUKU</i>.</p>),
        isPortrait: true,
        isFolio:true
    },
    {
        slug: "highline-zine",
        title: "Highline Zine",
        subtext: "Photography and Design",
        client: "High Lines with Columbia",
        imageStack: hlzines,
        body: (<p>A 24 page zine created as a follow on to a wider project on highlining</p>),
        isPortrait: true,
        isFolio:true
    },
    {
        slug: "highline-ad",
        title: "Highline",
        subtext: "Photography and Design",
        client: "Columbia",
        mainImage: columbiaHighlineAd,
        body: (<p>Digital poster created for Columbia as part of a wider highline project</p>),
        isPortrait: true,
        isFolio:true
    },
    {
        slug: "columbia-highline-1",
        title: "Highline",
        subtext: "Video",
        client: "Columbia",
        video: columbiaHighline_1,
        body: (<p>Video direction and production for <i>Columbia</i> as part of a wider highline project</p>),
        isPortrait: false,
        isFolio:false
    },
    {
        slug: "columbia-at95",
        title: "Hike Society // AT95",
        subtext: "Film",
        client: "Columbia",
        videoURL: "https://player.vimeo.com/video/893332791?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        body: (<p>Short film created for <i>Columbia</i> as part of their <i>Hike Society</i> series, featuring <i>AT95</i></p>),
        isPortrait: false,
        isFolio:false
    },
    {
        slug: "sk1-chunky",
        title: "SK1 X CHUNKY",
        subtext: "Video and Animation",
        client: "SK1 Records",
        videoURL: "https://player.vimeo.com/video/869699929?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        body: (<p>Video and animation for <i>SK1 Records</i> event</p>),
        isPortrait: false,
        isFolio:false
    },
    {
        slug: "lock-supernova",
        title: "Supernova Series",
        subtext: "Photography and Design",
        client: "Lock Holds",
        imageStack: locksnvs,
        body: (<p>Photography services for <i>Lock Holds</i> to showcase their <i>Supernova</i> Series</p>),
        isPortrait: false,
        isFolio:true
    },
    {
        slug: "cotic-flaremax",
        title: "Build Video",
        subtext: "",
        client: "Cotic Bikes",
        video: coticVid,
        body: (<p>Short Build video created for Cotic for their Flaremax</p>),
        isPortrait: false,
        isFolio:false
    },
    {
        slug: "lock-holds-europe",
        title: "Video Services",
        subtext: "",
        client: "Lock Holds",
        video: lockholdsVid,
        body: (<p>Short video created for <i>Lock Holds</i> documenting their Europe trip</p>),
        isPortrait: false,
        isFolio:false
    },

    {
        slug: "seraph",
        title: "Musical Score & Visual",
        subtext: "",
        client: "Elsewhere",
        video: seraphVid,
        body: (<p>Collaborate score and visual created with <i>Elsewhere</i></p>),
        isPortrait: true,
        isFolio:false
    },
    {
        slug: "fthmlss-portrait-vid",
        title: "Portrait Visual",
        subtext: "",
        client: "Fthmlss",
        video: fthmlssPortVid,
        body: (<p>Portrait visual created for <i>Fthmlss</i> as part of ongoing album launch</p>),
        isPortrait: true,
        isFolio:false
    },
    {
        slug: "niagra",
        title: "Niagra",
        subtext: "Music Video",
        client: "Fthmlss",
        videoURL: "https://www.youtube.com/embed/DBRWbYFIodQ",
        body: <p>dsplaced. creates performance video for Fthmlss' latest release "Niagra". Performance by Olivia Richards.</p>,
        isPortrait: false,
        isFolio:false
    },
    {
        slug: "fthmlss-profile-artwork",
        title: "Profile Artwork",
        subtext: "Cycles.",
        client: "Fthmlss",
        mainImage: fthmlssSheets,
        body: (
            <p>
                Profile artwork created by dsplaced. for upcoming{" "}
                <a target="_blank" href="https://www.instagram.com/fthmlss/">
                    fthmlss
                </a>{" "}
                album <i>Cycles</i>, out early June.
            </p>
        ),
        isPortrait: true,
        isFolio:true
    },
    {
        slug: "stillness",
        title: "Stillness",
        subtext: "Alan Johnson",
        client: "Sneaker Social Club",
        videoURL: "https://www.youtube.com/embed/Ek4FXtq88yE",
        body: (
            <p>
                dsplaced. creates visual for the title track of the latest <i>Alan Johnson</i> EP, <i>Stillness</i>. Created for
                <i>Sneaker Social Club</i>, the video explores expression, both physical and mental. Looking at emotion, mood and mind, the
                video looks to complement the track's calm to frantic evolution. The video can be seen on the
                <a target="_blank" href="https://www.factmag.com/2022/12/13/alan-johnson-stillness/">
                    {" "}
                    FACT website
                </a>
                , with an additional write-up there.
            </p>
        ),
        isPortrait: false,
        isFolio:false
    },

    {
        slug: "mix-series-001",
        title: "Mix series 001",
        subtext: "dsplaced.",
        client: "Fthmlss",
        videoURL: "https://www.youtube.com/embed/7gjrt-0vkoc",
        body: (
            <p>
                Fthmlss brings a selection of his own sounds to the first of our mix series.{" "}
                <a target="_blank" href="https://www.instagram.com/fthmlss">
                    Follow him on Instagram
                </a>
            </p>
        ),
        isPortrait: false,
        isFolio:false
    },
];

export default projects;
