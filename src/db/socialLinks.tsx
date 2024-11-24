import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
type TypeOfNavData = {
   id: string;
   icon: JSX.Element;
   slug: string;
};

export const SocialLinksForProfile: TypeOfNavData[] = [
   {
      id: '41bad90a14e74a1887621b9d615e45f6',
      icon: <FaFacebook />,
      slug: 'http://www.facebook.com/masudrwd',
   },
   {
      id: '30f4ec8932b14b5f98db8b07f294f9fc',
      icon: <FaXTwitter />,
      slug: 'http://www.instagram.com/masudrwd',
   },
   {
      id: 'a2e7f7520d9249a9ae27459d0772489a',
      icon: <FaInstagram />,
      slug: 'http://www.x.com/masudrwd',
   },
   {
      id: 'fccf5fac6dc94f4bb77c308fc461f4fe',
      icon: <FaGithub />,
      slug: 'http://www.github.com/masudrwd',
   },
];
