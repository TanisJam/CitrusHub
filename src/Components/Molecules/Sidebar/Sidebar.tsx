import { Link } from 'wouter';

import { CogIcon, ChartPieIcon, NotepadText, BookUser } from 'lucide-react';

export default function Sidebar({ className }: { className?: string }) {
  return (
    <aside className={`w-64 bg-dark-blue h-full p-4 ${className}`}>
      <nav>
        {[
          { name: 'Directory', icon: BookUser, href: '/directory' },
          { name: 'Notes', icon: NotepadText, href: '/notes' },
          { name: 'Network', icon: ChartPieIcon, href: '/network' },
          { name: 'Settings', icon: CogIcon, href: '/settings' },
        ].map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center py-2 px-4 text-gray-400 hover:bg-gray-700 rounded"
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
