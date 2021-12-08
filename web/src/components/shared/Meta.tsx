import React from "react";

interface MetaProps {
    title: string;
    owner?: string;
    description?: string;
}

export const Meta: React.FC<MetaProps> = ({ title, owner, description }) => {
    return (
        <>
            <meta name="description" content={description} />
            {owner ? <meta name="author" content={owner} /> : ""}
            <meta
                name="keywords"
                content={`Able, AbleNotes, Notes, notes, organise, etc.`}
            />
            <meta name="og:title" content={title || "Able"} />
            <meta name="og:type" content={owner ? "able.keys" : "website"} />
            <meta property="og:determiner" content="the" />
            <meta property="og:locale" content="en_GB" />
            <meta property="og:site_name" content="Able" />
            <meta
                name="og:description"
                content={description != null ? description : "Able"}
            />
            <meta name="og:site_name" content="Able" />
            <meta name="og:image" content={`../../public/logo.png`} />
            <meta property="og:image:alt" content="Able" />
        </>
    );
};
