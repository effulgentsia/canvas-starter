import { cva } from 'class-variance-authority';
import { cn } from 'drupal-canvas';
import type { HTMLAttributes } from 'react';

const navigationVariants = cva('md:flex md:items-center md:gap-12');

interface MenuItem {
  title: string;
  url: string;
}

const menu: MenuItem[] = [
  { title: 'Home', url: '#' },
  { title: 'Services', url: '#' },
  { title: 'Blog', url: '#' },
  { title: 'About', url: '#' },
  { title: 'Careers', url: '#' },
];

export type NavigationProps = HTMLAttributes<HTMLDivElement>;

function Navigation({ className, ...props }: NavigationProps) {
  // Data fetching is supported using SWR and @drupal-api-client/json-api-client.
  // @see https://project.pages.drupalcode.org/canvas/code-components/data-fetching
  return (
    <div className={cn(navigationVariants(), className)} {...props}>
      <nav aria-label="Global" className="hidden md:block!">
        <ul className="flex items-center gap-6 text-sm">
          {menu.map((item) => (
            <li key={item.title}>
              <a
                href={item.url}
                className="text-text transition-colors hover:text-text/75"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            href="/"
            className="inline-block rounded-md bg-teal px-5 py-2.5 text-sm font-medium text-inverted-text shadow-sm transition hover:bg-teal/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
          >
            Login
          </a>

          <div className="hidden sm:flex!">
            <a
              href="/"
              className="inline-block rounded-md bg-surface-0/75 px-5 py-2.5 text-sm font-medium text-text transition hover:text-text/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
            >
              Register
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <button
            type="button"
            className="rounded-sm bg-surface-2 p-2 text-text"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export { Navigation };
export default Navigation;
