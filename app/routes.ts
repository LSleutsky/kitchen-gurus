import { index, layout, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  layout(`./layouts/layout.tsx`, [
    index(`./routes/home.tsx`),
    route(`gallery`, `./routes/gallery.tsx`),
    route(`services`, `./routes/services.tsx`),
    route(`about`, `./routes/about.tsx`),
    route(`contact`, `./routes/contact.tsx`),
    route(`financing`, `./routes/financing.tsx`)
  ]),
] satisfies RouteConfig;
