export interface Profession {
  id: number
  title: string
  description: string
  illustrationUrl: string
  salaryRange: {
    min: number
    max: number
    currency: string
  }
}

export const professions: Profession[] = [
  {
    id: 1,
    title: 'Frontend Engineer',
    description: 'Frontend Engineers build user interfaces using TypeScript, React, HTML, and CSS. They focus on UI performance, accessibility, and user experience.',
    illustrationUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    salaryRange: {
      min: 45000000,
      max: 90000000,
      currency: 'IDR/month'
    },
  },
  {
    id: 2,
    title: 'Backend Engineer',
    description: 'Backend Engineers create server-side logic, APIs, databases, and cloud integrations. They ensure security, scalability, and performance.',
    illustrationUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    salaryRange: {
      min: 50000000,
      max: 120000000,
      currency: 'IDR/month'
    },
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    description: 'DevOps Engineers manage CI/CD pipelines, cloud infrastructure, automation, and container orchestration using Docker, Kubernetes, and IaC.',
    illustrationUrl: 'https://images.unsplash.com/photo-1581091870627-3a2851e3160c',
    salaryRange: {
      min: 55000000,
      max: 130000000,
      currency: 'IDR/month'
    },
  },
  {
    id: 4,
    title: 'Mobile App Developer',
    description: 'Mobile Developers build Android/iOS apps using React Native, Flutter, Swift, or Kotlin. They focus on smooth UI, performance, and cross-platform support.',
    illustrationUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    salaryRange: {
      min: 40000000,
      max: 100000000,
      currency: 'IDR/month'
    },
  },
  {
    id: 5,
    title: 'Machine Learning Engineer',
    description: 'Machine Learning Engineers develop machine learning models, data pipelines, and AI systems using Python, TensorFlow, and cloud ML solutions.',
    illustrationUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981d',
    salaryRange: {
      min: 60000000,
      max: 150000000,
      currency: 'IDR/month'
    },
  },
]