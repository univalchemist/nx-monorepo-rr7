import { Link } from 'react-router';
import { Button, H2 } from '@michael-assessment/shadcn-components';
import { ContentPage } from '../lib/content-page';

export default function BazPage() {
  const navigationSection = (
    <>
      <H2 className="text-gray-900 mb-4">You've reached the end!</H2>
      <p className="text-gray-600 mb-4">
        This is an independent page. You can still randomize the breadcrumb labels or navigate to other pages.
      </p>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <Button asChild variant="outline" className="w-full sm:w-auto">
          <Link to="/foo/bar">
            ← Back to Bar
          </Link>
        </Button>
        <Button asChild variant="outline" className="w-full sm:w-auto">
          <Link to="/foo">
            ← Back to Foo
          </Link>
        </Button>
        <Button asChild variant="default" className="w-full sm:w-auto">
          <Link to="/">
            ← Home
          </Link>
        </Button>
      </div>
    </>
  );

  return (
    <ContentPage
      title="Baz Page"
      description="This is the Baz page at /foo/bar/baz. It's now an independent route that doesn't depend on parent pages as layouts."
      navigationSection={navigationSection}
    />
  );
}
