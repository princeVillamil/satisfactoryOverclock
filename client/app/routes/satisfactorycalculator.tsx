import type { Route } from "./+types/satisfactorycalculator";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Satisfactory Calculator Page" },
    { name: "description", content: "Welcome Satisfactory Calculator Page!" },
  ];
}

export default function SatisfactoryCalculator() {
  return <div>Hello Satisfactory Calculator Page</div>;
}
