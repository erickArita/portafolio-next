import type { Metadata } from "next";
import CvDocument from "@/components/cv/CvDocument";

export const metadata: Metadata = {
  title: "Erick Marley Arita Orellana · Software Engineer",
  description:
    "CV de Erick Marley Arita Orellana, Software Engineer / Backend Developer con +5 años de experiencia en .NET, React y Azure.",
};

// Shareable URL: /cv — bilingual (ES/EN) online CV with print/PDF support.
export default function CvPage() {
  return <CvDocument />;
}
