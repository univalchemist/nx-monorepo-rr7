import { Link } from 'react-router';
import { Button, H2 } from '@michael-assessment/shadcn-components';
import { ContentPage } from '../lib/content-page';

export default function BarPage() {
  const navigationSection = (
    <>
      <H2 className="text-gray-900 mb-4">Navigate to Other Pages</H2>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <Button asChild variant="default" className="w-full sm:w-auto">
          <Link to="/foo/bar/baz">
            Go to Baz →
          </Link>
        </Button>
        <Button asChild variant="outline" className="w-full sm:w-auto">
          <Link to="/foo">
            ← Back to Foo
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
      title="Bar Page"
      description="This is the Bar page at /foo/bar. It's now an independent route that doesn't depend on the Foo page as a layout."
      navigationSection={navigationSection}
    />
  );
}
