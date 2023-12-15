import React from "react";
import FormLogin from "@/../components/FormLogin";
import Image from "next/image";

interface LayoutProps{
    children: React.ReactNode
}

export default function HomePageLayout({children}:LayoutProps) {
    return (
        <section className="flex items-center justify-center gap-48 h-[640px]">
            {children}
            <Image
                src={'/assets/logo.svg'}
                width={420}
                height={460}
                alt="Aracomp"
            />
        </section>
    )
}