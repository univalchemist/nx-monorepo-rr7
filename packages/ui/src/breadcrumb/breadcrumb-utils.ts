import { BreadcrumbConfig, getBreadcrumbLabel } from './breadcrumb-config';

export interface BreadcrumbItem {
  label: string;
  path: string;
  isActive: boolean;
}

export function generateBreadcrumbs(
  pathname: string,
  config: BreadcrumbConfig
): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [];

  // Add home breadcrumb
  breadcrumbs.push({
    label: 'Home',
    path: '/',
    isActive: pathname === '/'
  });

  // Generate breadcrumbs for each segment
  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isActive = index === segments.length - 1;

    breadcrumbs.push({
      label: getBreadcrumbLabel(index, config),
      path: currentPath,
      isActive
    });
  });

  return breadcrumbs;
}

export function getBreadcrumbPath(pathname: string, depth: number): string {
  const segments = pathname.split('/').filter(Boolean);
  return '/' + segments.slice(0, depth + 1).join('/');
}
