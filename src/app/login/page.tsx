import React from "react";
import FormLogin from "@/../components/FormLogin";
import HomePageLayout from "../../../layout/homepagelayout";
import Image from "next/image";

export default function Page() {
    return (
        <HomePageLayout>
            <FormLogin/>
        </HomePageLayout>
    )
}