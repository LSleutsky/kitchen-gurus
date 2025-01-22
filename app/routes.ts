import { index, layout, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  layout(`./layouts/layout.tsx`, [
    index(`./routes/home.tsx`),
    route(`gallery`, `./routes/gallery.tsx`),
    route(`about`, `./routes/about.tsx`),
    route(`contact`, `./routes/contact.tsx`),
  ]),
] satisfies RouteConfig;
