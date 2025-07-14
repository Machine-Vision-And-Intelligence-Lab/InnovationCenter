import Link from 'next/link';

const navLinks = [
  { name: 'Header', href: '/admin/header' },
  { name: 'Home', href: '/admin/home' },
  { name: 'About', href: '/admin/about' },
  { name: 'Incubation', href: '/admin/incubation' },
  { name: 'Programs', href: '/admin/programs' },
  { name: 'Portfolio', href: '/admin/portfolio' },
  { name: 'Insights', href: '/admin/insights' },
  { name: 'Connect', href: '/admin/connect' },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <div className="flex h-screen bg-gray-200">
          <aside className="w-64 bg-gray-800 text-white">
            <div className="p-4">
              <h1 className="text-2xl font-bold">Admin Panel</h1>
            </div>
            <nav>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <p className="block p-4 hover:bg-gray-700">{link.name}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
  );
}
