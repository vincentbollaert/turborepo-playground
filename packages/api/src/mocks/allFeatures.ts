import { Endpoints } from '../apiTypes'

export const allFeatures: Endpoints['Features']['GetFeatures']['Response'] = {
  data: {
    features: [
      {
        id: '1',
        name: 'React',
        status: 'done',
      },
      {
        id: '2',
        name: 'Next',
        status: 'done',
      },
    ],
  },
}
