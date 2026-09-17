import React, { useState, useEffect } from 'react';
import { ListTree, ChevronRight } from 'lucide-react';

export interface TocItem {
  id: string;
  title: string;
}

export interface TableOfContentsProps {
  items: TocItem[];
  className?: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items, className = '' }) => {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -60% 0px' }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveId(id);
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <div
      className={`border border-[#E5E5E5] rounded-xl bg-[#F7F7F7] p-5 ${className}`}
    >
      <div className="flex items-center gap-2 pb-3 mb-3 border-b border-[#E5E5E5] text-[#1A1A1A]">
        <ListTree className="w-4 h-4 text-[#1F4747]" />
        <h4 className="text-xs font-bold uppercase tracking-wider">
          Jump to Review Section
        </h4>
      </div>

      <nav>
        <ul className="space-y-1 text-sm">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`group flex items-center justify-between py-1.5 px-2.5 rounded-md transition-colors text-xs font-medium ${
                    isActive
                      ? 'bg-[#1F4747] text-white font-semibold'
                      : 'text-[#666666] hover:text-[#1A1A1A] hover:bg-[#E5E5E5]'
                  }`}
                >
                  <span className="truncate">{item.title}</span>
                  <ChevronRight
                    className={`w-3.5 h-3.5 opacity-60 transition-transform ${
                      isActive ? 'translate-x-0.5 text-white' : 'group-hover:translate-x-0.5'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
