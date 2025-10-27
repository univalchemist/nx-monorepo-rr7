import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('./app.tsx'),
  route('about', './routes/about.tsx'),
  route('foo', './routes/foo.tsx'),
  route('foo/bar', './routes/foo.bar.tsx'),
  route('foo/bar/baz', './routes/foo.bar.baz.tsx'),
] satisfies RouteConfig;
