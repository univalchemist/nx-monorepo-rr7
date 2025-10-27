import { Link } from 'react-router';
import { Button, H2 } from '@michael-assessment/shadcn-components';
import { ContentPage } from '../lib/content-page';

export default function FooPage() {
  const navigationSection = (
    <>
      <H2 className="text-gray-900 mb-4">Navigate to Other Pages</H2>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <Button asChild variant="default" className="w-full sm:w-auto">
          <Link to="/foo/bar">
            Go to Bar →
          </Link>
        </Button>
        <Button asChild variant="outline" className="w-full sm:w-auto">
          <Link to="/about">
            Go to About
          </Link>
        </Button>
      </div>
    </>
  );

  return (
    <ContentPage
      title="Foo Page"
      description="This is the first level of the route structure. You can navigate to other pages or randomize the breadcrumb labels."
      navigationSection={navigationSection}
    />
  );
}
