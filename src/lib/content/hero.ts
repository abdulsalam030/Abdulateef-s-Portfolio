import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: " Hello I'm ",
    title: 'Abdulsalam Abdulateef.',
    tagline: 'I create visually pleasing interfaces for the web.',
    description:
    "A FrontEnd Developer with passion for creating neat and easy to use Web Applications. My expertise lies in the artistry of HTML, CSS, and JavaScript, where I weave responsive interfaces that captivate on every device. Let's bring your ideas to life with style and functionality! 🚀",
    specialText: 'Currently available for a job & freelance',
    cta: {
        title: 'see my resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};