import React from "react";
import FormLogin from "@/../components/FormLogin";
import HomePageLayout from "../../../layout/homepagelayout";
import Image from "next/image";
import FormCadastro from "../../../components/FormCadastro";

export default function Page() {
    return (
        <HomePageLayout>
            <FormCadastro/>
        </HomePageLayout>
    )
}