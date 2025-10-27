import { createContext, useContext, useState, useCallback } from 'react';
import { useLocation } from 'react-router';
import { BreadcrumbConfig, defaultBreadcrumbConfig, getRandomBreadcrumbLabels } from './breadcrumb-config';
import { generateBreadcrumbs, BreadcrumbItem } from './breadcrumb-utils';

interface BreadcrumbContextType {
  config: BreadcrumbConfig;
  breadcrumbs: BreadcrumbItem[];
  randomizeLabels: () => void;
  resetLabels: () => void;
}

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined);

export function BreadcrumbProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<BreadcrumbConfig>(defaultBreadcrumbConfig);
  const location = useLocation();

  const breadcrumbs = generateBreadcrumbs(location.pathname, config);

  const randomizeLabels = useCallback(() => {
    const newLabels = getRandomBreadcrumbLabels();
    setConfig(prev => ({
      ...prev,
      labels: newLabels
    }));
  }, []);

  const resetLabels = useCallback(() => {
    setConfig(defaultBreadcrumbConfig);
  }, []);

  return (
    <BreadcrumbContext.Provider value={{
      config,
      breadcrumbs,
      randomizeLabels,
      resetLabels
    }}>
      {children}
    </BreadcrumbContext.Provider>
  );
}

export function useBreadcrumb() {
  const context = useContext(BreadcrumbContext);
  if (context === undefined) {
    throw new Error('useBreadcrumb must be used within a BreadcrumbProvider');
  }
  return context;
}
