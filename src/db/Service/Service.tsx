import {
   FaCode,
   FaFileCode,
   FaLaptopCode,
   FaRocket,
   FaTools,
   FaUserTie,
} from 'react-icons/fa';

type serviceType = {
   id: string;
   title: string;
   description: string;
   icon: JSX.Element;
};

export const servicesData: serviceType[] = [
   {
      id: 'ec827a55-c039-40c4-8e19-8c87236f871f',
      title: 'Custom Web Development',
      description:
         'Design and develop responsive websites using React and Next.js.',
      icon: <FaCode />,
   },
   {
      id: '298f21e6-948f-4e91-a679-8121bd3b39fc',
      title: 'Frontend Development',
      description:
         'Create visually engaging user interfaces with React and modern CSS frameworks (like Tailwind, Chakra UI, or MUI).',
      icon: <FaLaptopCode />,
   },
   {
      id: 'a6016556-e6a2-480d-81a2-fdc40c2667fe',
      title: 'PSD/Design to HTML',
      description:
         'Convert Figma, PSD, or other design files into responsive and pixel-perfect web pages.',
      icon: <FaFileCode />,
   },
   {
      id: 'f93455e9-1fc2-4dfe-a8d9-d61ac0abba71',
      title: 'Landing Page Design',
      description:
         'Build optimized and visually stunning landing pages for businesses and products.',
      icon: <FaRocket />,
   },
   {
      id: 'd9f44f59-241b-42f7-8c72-9f39a4ace815',
      title: 'Portfolio Website Development',
      description:
         'Help individuals create personal portfolios or resumes with clean, professional designs.',
      icon: <FaUserTie />,
   },
   {
      id: 'be6c0f9f-3a58-49fb-8907-9e64f9ad11af',
      title: 'Website Maintenance',
      description:
         'Update, refine, and fix issues on existing frontend projects.',
      icon: <FaTools />,
   },
];
