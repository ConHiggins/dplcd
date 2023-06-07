import fthmlssSheets from "../Assets/Fthmlss-Sheet.jpg";
import fthmlssPortVid from "../Assets/FthmlssProfileVideo.mp4";
import lockholdsVid from "../Assets/LOCKTRIP_DSPLACED_COMPRESSED.mp4";
import seraphVid from "../Assets/seraph_compressed.mp4";

const projects = [
    {
        slug: "lock-holds-europe",
        title: "Video Services",
        subtext: "",
        client: "Lock Holds",
        video: lockholdsVid,
        body: (<p>Short video created for <i>Lock Holds</i> documenting their Europe trip</p>),
        isPortrait: false
    },

    {
        slug: "seraph",
        title: "Musical Score & Visual",
        subtext: "",
        client: "Elsewhere",
        video: seraphVid,
        body: (<p>Collaborate score and visual created with <i>Elsewhere</i></p>),
        isPortrait: true
    },
    {
        slug: "fthmlss-portrait-vid",
        title: "Portrait Visual",
        subtext: "",
        client: "Fthmlss",
        video: fthmlssPortVid,
        body: (<p>Portrait visual created for <i>Fthmlss</i> as part of ongoing album launch</p>),
        isPortrait: true
    },
    {
        slug: "niagra",
        title: "Niagra",
        subtext: "Music Video",
        client: "Fthmlss",
        videoURL: "https://www.youtube.com/embed/DBRWbYFIodQ",
        body: <p>dsplaced. creates performance video for Fthmlss' latest release "Niagra". Performance by Olivia Richards.</p>,
        isPortrait: false
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
        isPortrait: true
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
        isPortrait: false
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
        isPortrait: false
    },
];

export default projects;
