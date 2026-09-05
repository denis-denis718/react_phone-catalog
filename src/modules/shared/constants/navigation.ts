export type NavItem = {
  to: string;
  text: string;
  end?: boolean;
};

export const navItems: NavItem[] = [
  { to: '/', text: 'Home', end: true },
  { to: '/phones', text: 'Phones' },
  { to: '/tablets', text: 'Tablets' },
  { to: '/accessories', text: 'Accessories' },
];

export const footerItems: NavItem[] = [
  { to: 'https://github.com/denis-denis718', text: 'Github' },
  { to: '/contacts', text: 'Contacts' },
  { to: '/rights', text: 'Rights' },
];
