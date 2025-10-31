import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Swift Shop',
      url: 'https://swift-shop-one.vercel.app/',
      repo: 'https://github.com/abdulsalam030/Swift-Shop',
      img: '/SwiftShop.png',
      tags: [
        'Next.js',
        'TypeScript',
        'Tailwind',
        'React Context API',
        'Shadcn',
      ],
      description:
        'SwiftShop is a modern, responsive e-commerce store.It offers searchable, filterable product listings, dynamic product pages, a functional cart, and a mock checkout. Optimized with lazy loading, it showcases best practices in performance and UX..',
    },
    {
      id: getId(),
      name: 'PING',
      url: 'https://ping-zeta-three.vercel.app/',
      repo: 'https://github.com/abdulsalam030/Ping',
      img: '/Ping1.png',
      tags: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
      description:
        'A real-time chat application built with React and TypeScript, styled with Tailwind CSS. The app leverages Firebase for authentication and real-time database functionality, allowing users to sign in, join chat rooms, and exchange messages instantly.',
    },
    {
      id: getId(),
      name: 'Track Flow',
      url: 'https://track-flow-mu.vercel.app/',
      repo: 'https://github.com/abdulsalam030/TrackFlow',
      img: 'https://github.com/user-attachments/assets/13b067e7-c7c9-42c9-871e-95b4706e1de9',
      tags: ['React', 'Spotify API', 'Tailwind'],
      description:
        'TrackFlow is a music discovery app that integrates with the Spotify API to provide users with personalized music recommendations. Built with React and styled using Tailwind CSS, the app features a sleek and responsive design, allowing users to explore new tracks and artists based on their listening habits.',
    },
    {
      id: getId(),
      name: 'User’s Feedback App',
      url: 'https://users-feedback-app.vercel.app/',
      repo: 'https://github.com/abdulsalam030/User-s-Feedback-App',
      img: 'https://user-images.githubusercontent.com/97962493/295207149-2fe6d7e2-fa48-4f64-8b7e-41b0903a90bf.png',
      tags: ['React', 'ContextApi'],
    },

    {
      id: getId(),
      name: 'Weather App',
      url: 'https://weather-app-pi-ten.vercel.app/',
      repo: 'https://github.com/abdulsalam030/weather-app',
      img: 'https://user-images.githubusercontent.com/97962493/295212299-5757dd73-bfc3-4de0-80bc-b1e05b45d5d1.PNG',
      tags: ['React', 'OpenWeather API'],
    },

    {
      id: getId(),
      name: 'Manage Landing Page',
      url: 'https://managelanding-page-beta.vercel.app/',
      repo: 'https://github.com/abdulsalam030/frontend-mentor-challenge-manage-landingPage',
      img: 'https://github.com/user-attachments/assets/0db96655-6b9f-4a75-850a-aa73d1ae0afb',
      tags: ['HTML', 'CSS', 'JavaScript', 'TailWind'],
    },
  ],
};
