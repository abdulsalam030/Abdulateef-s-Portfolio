import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Shopping Cart',
      url: 'https://shopping-cart-omega-seven.vercel.app/',
      repo: 'https://github.com/abdulsalam030/Shopping-Cart',
      img: 'https://user-images.githubusercontent.com/97962493/294443404-75823c20-4ffa-4585-a6ff-a14b89cb4af6.PNG',
      tags: ['React', 'React-Router', 'Paystack API'],
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
      name: 'Authentication',
      url: 'https://react-authentication-form.vercel.app/',
      repo: 'https://github.com/abdulsalam030/Authentication-with-FireBase-App',
      img: 'https://user-images.githubusercontent.com/97962493/295211223-966970db-4da7-4f12-b456-01705edddaf2.png',
      tags: ['React', 'Firebase'],
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
      name: 'Track Flow',
      url: 'https://track-flow-mu.vercel.app/',
      repo: 'https://github.com/abdulsalam030/TrackFlow',
      img: 'https://github.com/user-attachments/assets/13b067e7-c7c9-42c9-871e-95b4706e1de9',
      tags: ['React', 'Spotify API', 'Tailwind'],
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
