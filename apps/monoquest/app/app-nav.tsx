import { NavLink } from 'react-router';
import { Breadcrumb, useBreadcrumb } from '@michael-assessment/ui';

export function AppNav() {
  const { breadcrumbs } = useBreadcrumb();

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <NavLink
              to="/"
              end
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              end
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors"
            >
              About
            </NavLink>
            <NavLink
              to="/foo"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors"
            >
              Nested Routes
            </NavLink>
          </div>
        </div>
        {breadcrumbs.length > 1 && (
          <div className="py-2">
            <Breadcrumb items={breadcrumbs} />
          </div>
        )}
      </div>
    </nav>
  );
}
