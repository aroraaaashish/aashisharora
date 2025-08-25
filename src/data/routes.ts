export interface Route {
  label: string;
  path: string;
  index?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: 'Aashish Arora',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export default routes;
