"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function CalendarioPopup({ language }: { language: "en" | "es" }) {
    useEffect(() => {
        (async () => {
            const cal = await getCalApi({ namespace: "programa-tu-consulta-gratuita" });
            cal("ui", {
                theme: "light",
                cssVarsPerTheme: {
                    light: { "cal-brand": "#6800ff" },
                    dark: { "cal-brand": "#6800ff" }
                },
                hideEventTypeDetails: false,
                layout: "month_view",
                locale: language === "en" ? "en" : "es", // Añadimos la configuración del idioma
            });
        })();
    }, [language]); // Añadimos language como dependencia del useEffect

    return (
        <Button
            data-cal-namespace="programa-tu-consulta-gratuita"
            data-cal-link="auctor-ai-vc95be/programa-tu-consulta-gratuita"
            data-cal-config={`{"layout":"month_view","theme":"light","locale":"${language}"}`} // Actualizamos la configuración
            className="bg-gradient-to-r from-violet-500 to-blue-500 hover:from-violet-600 hover:to-blue-600 text-white px-8 py-5 sm:px-12 sm:py-7 text-lg sm:text-xl rounded-full transition"
        >
            {language === "en" ? "Book a Meeting" : "Agendar reunión"}
        </Button>
    );
}