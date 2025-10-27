import {
  Tree,
  formatFiles,
  generateFiles,
  names,
  joinPathFragments,
  addDependenciesToPackageJson,
  addProjectConfiguration,
  installPackagesTask,
} from '@nx/devkit';
import * as path from 'node:path';
import { Rr7AppGeneratorSchema } from './schema';

const deps = {
  'react': '^19.0.0',
  'react-dom': '^19.0.0',
  'react-router': '^7.2.0',
  '@react-router/node': '^7.2.0',
  '@react-router/serve': '^7.2.0',
  'isbot': '^4.4.0',
};

const devDeps = {
  '@react-router/dev': '^7.2.0',
  '@nx/vite': '^22.0.1',
  '@vitejs/plugin-react': '^4.2.0',
  typescript: '~5.9.2',
  '@types/react': '^19.0.0',
  '@types/react-dom': '^19.0.0',
  '@types/node': '20.19.9',
  eslint: '^9.8.0',
  'tailwindcss': '^4.1.16',
  '@tailwindcss/vite': '^4.1.16',
};

export async function rr7AppGenerator(
  tree: Tree,
  options: Rr7AppGeneratorSchema
) {
  const normalized = normalizeOptions(options);
  const { appName, projectRoot, withTailwind } =
    normalized;

  // 1) Register the project with Nx
  addProjectConfiguration(tree, appName, {
    root: projectRoot,
    projectType: 'application',
    sourceRoot: joinPathFragments(projectRoot, 'app'),
    tags: parseTags(options.tags),
    targets: {
      build: {
        executor: 'nx:run-commands',
        options: {
          cwd: projectRoot,
          command: 'react-router build',
        },
      },
      dev: {
        executor: 'nx:run-commands',
        options: {
          cwd: projectRoot,
          command: 'react-router dev',
        },
        continuous: true,
      },
      start: {
        executor: 'nx:run-commands',
        options: {
          cwd: projectRoot,
          command: 'react-router-serve build/server/index.js',
        },
        continuous: true,
      },
      lint: {
        executor: 'nx:run-commands',
        options: {
          cwd: projectRoot,
          command: 'eslint .',
        },
      },
      test: {
        executor: 'nx:noop', // add vitest later if you want
      },
    },
  });

  // 2) Generate all source files
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    tmpl: '',
    appName,
    projectRoot,
    ...names(appName),
    offsetFromRoot: getOffsetFromRoot(projectRoot),
    withTailwind,
  });

  // 3) Add deps
  addDependenciesToPackageJson(tree, deps, devDeps);

  // 4) Format
  await formatFiles(tree);

  // 5) Install
  return () => {
    installPackagesTask(tree);
    printNextSteps(appName, projectRoot);
  };
}

function normalizeOptions(options: Rr7AppGeneratorSchema) {
  const n = names(options.name).fileName;
  const directory = options.directory
    ? names(options.directory).fileName
    : '';
  const appName = directory ? `${directory}-${n}` : n;

  const projectRoot = joinPathFragments('apps', directory ? directory : '', n);

  return {
    appName,
    projectRoot,
    withTailwind: options.withTailwind !== false,
    withShadcn: !!options.withShadcn,
  };
}

function parseTags(tags?: string) {
  return (tags ?? '')
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean);
}

function getOffsetFromRoot(projectRoot: string) {
  const depth = projectRoot.split('/').length;
  return Array(depth)
    .fill('..')
    .join('/') + '/';
}


function printNextSteps(appName: string, projectRoot: string) {
  // eslint-disable-next-line no-console
  console.log(`
✅ Generated ${appName} at ${projectRoot}

Next:
  - Run: nx dev ${appName}
  - Open: http://localhost:4200
`);
}

export default rr7AppGenerator;
