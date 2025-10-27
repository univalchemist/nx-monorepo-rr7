export interface BreadcrumbConfig {
  labels: string[];
  fallbackLabels: string[];
}

export const defaultBreadcrumbConfig: BreadcrumbConfig = {
  labels: ['First', 'Second', 'Third'],
  fallbackLabels: ['Home', 'Category', 'Subcategory']
};

export const alternativeLabels = [
  ['Alpha', 'Beta', 'Gamma'],
  ['One', 'Two', 'Three'],
  ['Start', 'Middle', 'End'],
  ['Primary', 'Secondary', 'Tertiary'],
  ['A', 'B', 'C'],
  ['X', 'Y', 'Z'],
  ['First', 'Second', 'Third'],
  ['Beginning', 'Middle', 'End'],
  ['Top', 'Center', 'Bottom'],
  ['Left', 'Center', 'Right']
];

export function getRandomBreadcrumbLabels(): string[] {
  const randomIndex = Math.floor(Math.random() * alternativeLabels.length);
  return [...alternativeLabels[randomIndex]];
}

export function getBreadcrumbLabel(depth: number, config: BreadcrumbConfig): string {
  if (depth < 0) return '';
  if (depth < config.labels.length) {
    return config.labels[depth];
  }
  if (depth < config.fallbackLabels.length) {
    return config.fallbackLabels[depth];
  }
  return `Level ${depth + 1}`;
}
