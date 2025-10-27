import { Link } from 'react-router';
import { Button, Card, CardContent, H3, Paragraph, List, ListItem } from '@michael-assessment/shadcn-components';

export function App() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col">
            <CardContent className="p-6 flex flex-col h-full">
              <H3 className="text-gray-900 mb-2">About</H3>
              <Paragraph className="text-gray-600 mb-4">Learn more about this application.</Paragraph>
              <div className="mt-auto">
                <Button asChild variant="default" className="w-full sm:w-auto">
                  <Link to="/about">
                    Visit About →
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardContent className="p-6 flex flex-col h-full">
              <H3 className="text-gray-900 mb-2">Nested Routes</H3>
              <Paragraph className="text-gray-600 mb-4">Explore the nested route structure with dynamic breadcrumbs.</Paragraph>
              <div className="mt-auto">
                <Button asChild variant="default" className="w-full sm:w-auto">
                  <Link to="/foo">
                    Start Journey →
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardContent className="p-6 flex flex-col h-full">
              <H3 className="text-gray-900 mb-2">Features</H3>
              <List className="text-gray-600">
                <ListItem>Dynamic breadcrumb labels</ListItem>
                <ListItem>Nested routing structure</ListItem>
                <ListItem>Responsive design</ListItem>
                <ListItem>Smooth transitions</ListItem>
              </List>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
