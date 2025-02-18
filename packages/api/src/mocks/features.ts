import { Endpoints } from '../apiTypes'

export const allFeatures: Endpoints['Features']['GetFeatures']['Response'] = {
  features: [
    {
      id: crypto.randomUUID(),
      name: 'Modern frontend applications',
      description: 'Next.js and Vite/React apps showing different setups',
      status: 'done',
    },
    {
      id: crypto.randomUUID(),
      name: 'Shared component library',
      description: 'Tailwind shadcn components with component generation and automatic export management',
      status: 'done',
    },
    {
      id: crypto.randomUUID(),
      name: 'API layer',
      description: 'OpenAPI schema-driven development with MSW for mocking',
      status: 'done',
    },
    {
      id: crypto.randomUUID(),
      name: 'Shared configuration packages',
      description: 'Shared Typscript and ESLint configs',
      status: 'done',
    },
    {
      id: crypto.randomUUID(),
      name: 'Versioning consistency',
      description: 'Leveraring syncpack to ensure consistent dependency versions',
      status: 'done',
    },
    {
      id: crypto.randomUUID(),
      name: 'Express TODO',
      description: 'Express server with repository pattern TODO',
      status: 'done',
    },
    {
      id: crypto.randomUUID(),
      name: 'Database TODO',
      description: '',
      status: 'done',
    },
    {
      id: crypto.randomUUID(),
      name: 'Testing TODO',
      description: '',
      status: 'done',
    },
    {
      id: crypto.randomUUID(),
      name: 'Local persistence layer?',
      description: '',
      status: 'done',
    },
    {
      id: crypto.randomUUID(),
      name: 'API validation?',
      description: '',
      status: 'done',
    },
  ],
}
