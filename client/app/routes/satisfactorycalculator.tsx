import type { Route } from "./+types/satisfactorycalculator";
import { SatisfactoryCalculatorPage } from "~/Pages/SatisfactoryCalculatorPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Satisfactory Calculator Page" },
    { name: "description", content: "Welcome Satisfactory Calculator Page!" },
  ];
}

export default function SatisfactoryCalculator() {
  return <SatisfactoryCalculatorPage/>
}
