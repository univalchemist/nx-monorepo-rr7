import { Link } from 'react-router';
import { Button, Card, CardContent, H1, H2, Paragraph, List, ListItem, Strong } from '@michael-assessment/shadcn-components';

export default function AboutComponent() {
  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardContent className="p-6">
            <H1 className="text-gray-900 mb-6">About MonoQuest</H1>
            <div className="prose prose-lg max-w-none">
              <Paragraph className="text-gray-600 mb-6">
                Welcome to MonoQuest, a modern React application built with React Router v7 and Nx. This application demonstrates best practices in monorepo architecture, featuring a complete shadcn/ui design system, dynamic breadcrumbs, nested routing, and a component-based architecture.
              </Paragraph>

              <H2 className="text-gray-900 mb-4">Key Features</H2>
              <List className="text-gray-600 mb-6">
                <ListItem><Strong>Advanced Nested Routing:</Strong> Explore deeply nested routes (/foo/bar/baz) with independent layouts</ListItem>
                <ListItem><Strong>Dynamic Breadcrumb Navigation:</Strong> Context-aware breadcrumbs with label randomization and reset capabilities</ListItem>
                <ListItem><Strong>Complete Shadcn/UI Integration:</Strong> All components built with shadcn/ui including Button, Card, Breadcrumb, Typography, and more</ListItem>
                <ListItem><Strong>Design System:</Strong> Consistent typography, spacing, and color scheme throughout</ListItem>
                <ListItem><Strong>Type-Safe Development:</Strong> Full TypeScript support with strict mode enabled</ListItem>
                <ListItem><Strong>Responsive & Accessible:</Strong> Mobile-first design with ARIA attributes and semantic HTML</ListItem>
                <ListItem><Strong>Modern Tooling:</Strong> Vite, Tailwind CSS v4, and ESLint for optimal developer experience</ListItem>
                <ListItem><Strong>Custom Nx Generator:</Strong> Generate new React Router v7 apps with <code className="bg-gray-100 px-1 rounded">nx g @michael-assessment/rr7-plugin:rr7-app</code></ListItem>
              </List>

              <H2 className="text-gray-900 mb-4">Monorepo Architecture</H2>
              <Paragraph className="text-gray-600 mb-4">
                This application follows Nx monorepo best practices with a clear separation of concerns across packages:
              </Paragraph>
              <List className="text-gray-600 mb-6">
                <ListItem><Strong>@michael-assessment/ui:</Strong> Application-specific UI components including breadcrumb context provider, breadcrumb utilities, and breadcrumb configuration. Provides shared breadcrumb state management across the entire application.</ListItem>
                <ListItem><Strong>@michael-assessment/shadcn-components:</Strong> Reusable component library containing Button, Card, Breadcrumb, Typography (H1-H4, Paragraph, List), and Separator components. All components follow shadcn/ui patterns and use Radix UI primitives.</ListItem>
                <ListItem><Strong>@michael-assessment/shadcn-utils:</Strong> Shared utilities including the cn() function for className merging, global CSS styling, and Tailwind configuration synchronization across packages.</ListItem>
                <ListItem><Strong>apps/monoquest:</Strong> The main application using all the above packages, featuring a clean component structure with routes, navigation, and layout components.</ListItem>
                <ListItem><Strong>tools/rr7-plugin:</Strong> Custom Nx plugin for generating React Router v7 applications with the same structure as this app. Use it to create new apps quickly!</ListItem>
              </List>

              <H2 className="text-gray-900 mb-4">Technologies</H2>
              <Paragraph className="text-gray-600 mb-4">
                Built with cutting-edge web technologies for performance and developer experience:
              </Paragraph>
              <List className="text-gray-600 mb-6">
                <ListItem><Strong>React Router v7:</Strong> Latest routing solution with file-based routing and SSR support</ListItem>
                <ListItem><Strong>Nx:</Strong> Monorepo management and build system with plugin ecosystem</ListItem>
                <ListItem><Strong>TypeScript:</Strong> Type-safe development with strict mode enabled</ListItem>
                <ListItem><Strong>Tailwind CSS v4:</Strong> Utility-first CSS framework with JIT compilation</ListItem>
                <ListItem><Strong>Shadcn/UI:</Strong> Beautiful component library built on Radix UI primitives</ListItem>
                <ListItem><Strong>Vite:</Strong> Lightning-fast build tool and dev server</ListItem>
                <ListItem><Strong>Jest:</Strong> Testing framework with jsdom for React testing</ListItem>
              </List>

              <H2 className="text-gray-900 mb-4">Creating New Apps</H2>
              <Paragraph className="text-gray-600 mb-6">
                Use the custom RR7 plugin to generate new React Router v7 applications:
              </Paragraph>
              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <code className="text-sm">
                  nx g @michael-assessment/rr7-plugin:rr7-app --name=my-app --withTailwind
                </code>
              </div>
              <Paragraph className="text-gray-600 mb-4">
                This creates a new app with the same structure, configuration, and features as MonoQuest.
              </Paragraph>

              <div className="border-t pt-6">
                <Button asChild variant="default">
                  <Link to="/">
                    ← Back to Home
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
