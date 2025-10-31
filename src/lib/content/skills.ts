import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'skills',
  skills: [
    {
      id: getId(),
      title: 'frontend development',
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'jquery', icon: 'logos:jquery' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'bootstrap', icon: 'logos:bootstrap' },
        { name: 'firebase', icon: 'vscode-icons:file-type-firebase' },
        { name: 'git', icon: 'vscode-icons:file-type-git' },
        { name: 'postman', icon: 'vscode-icons:file-type-postman' },
        { name: 'Framer Motion', icon: 'logos:framer' },
        { name: 'Vite', icon: 'logos:vitejs' },
        { name: 'Webpack', icon: 'logos:webpack' },
        { name: 'Vercel', icon: 'logos:vercel-icon' },
        { name: 'Netlify', icon: 'logos:netlify' },
        { name: 'GitHub', icon: 'logos:github-icon' },
        { name: 'Figma', icon: 'logos:figma' },
      ],
    },
  ],
};
