import { ReactNode } from 'react';
import { useBreadcrumb } from '@michael-assessment/ui';
import { Button, Card, CardContent, H1, H2 } from '@michael-assessment/shadcn-components';

interface ContentPageProps {
  title: string;
  description: string;
  navigationSection: ReactNode;
}

export function ContentPage({ title, description, navigationSection }: ContentPageProps) {
  const { randomizeLabels, resetLabels } = useBreadcrumb();

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardContent className="p-6">
            <H1 className="text-gray-900 mb-6">{title}</H1>
            <p className="text-gray-600 mb-8">
              {description}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <Button onClick={randomizeLabels} variant="default" className="w-full sm:w-auto">
                  Randomize Breadcrumb Labels
                </Button>
                <Button onClick={resetLabels} variant="secondary" className="w-full sm:w-auto">
                  Reset to Default
                </Button>
              </div>
            </div>

            <div className="border-t pt-6">
              {navigationSection}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

