import { type 
        RouteConfig, 
        index, 
        route 
    } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("satisfactorycalculator","routes/satisfactorycalculator.tsx"),
    route("teams/:teamId", "routes/test.tsx"),

]satisfies RouteConfig;
// export default [index("routes/satisfactory-calculator.tsx")] satisfies RouteConfig;
// satisfactory-calculator