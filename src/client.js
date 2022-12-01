import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "mp1hfh3i",
    dataset: "production",
    useCdn: true,
});
