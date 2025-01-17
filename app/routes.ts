import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

export default [
  layout('./layouts/layouts.tsx', [
    index('./routes/home.tsx'),
    route('gallery', './routes/gallery.tsx'),
    route('about', './routes/about.tsx'),
    route('contact', './routes/contact.tsx'),
  ]),
] satisfies RouteConfig;
