"use client";

import { Clock3, Code2, Folder, Github, Home, Mail, Send, UserRound } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { id: "about", label: "关于我", href: "#about", icon: Home },
  { id: "projects", label: "作品", href: "#projects", icon: Folder },
  { id: "timeline", label: "经历", href: "#timeline", icon: Clock3 },
  { id: "stack", label: "技能栈", href: "#stack", icon: Code2 },
  { id: "contact", label: "联系我", href: "#contact", icon: Mail },
];

export function Sidebar() {
  const [activeId, setActiveId] = useState("about");
  const activeIdRef = useRef("about");

  const selectItem = (id: string) => {
    activeIdRef.current = id;
    setActiveId(id);
  };

  useEffect(() => {
    let frameId = 0;

    const updateActiveItem = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const marker = window.scrollY + Math.min(220, window.innerHeight * 0.32);
        let currentId = navItems[0].id;
        let currentTop = Number.NEGATIVE_INFINITY;

        for (const item of navItems) {
          const section = document.getElementById(item.id);
          if (!section) continue;
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          if (sectionTop > marker) continue;

          if (sectionTop > currentTop + 24) {
            currentId = item.id;
            currentTop = sectionTop;
          } else if (Math.abs(sectionTop - currentTop) <= 24 && item.id === activeIdRef.current) {
            currentId = item.id;
          }
        }

        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
          currentId = "contact";
        }

        selectItem(currentId);
      });
    };

    updateActiveItem();
    window.addEventListener("scroll", updateActiveItem, { passive: true });
    window.addEventListener("resize", updateActiveItem);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateActiveItem);
      window.removeEventListener("resize", updateActiveItem);
    };
  }, []);

  return (
    <aside className="fixed bottom-0 left-0 top-16 z-30 hidden w-44 border-r border-line bg-white lg:flex lg:flex-col">
      <nav className="space-y-1 p-3" aria-label="Primary navigation">
        {navItems.map(({ id, label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            aria-current={activeId === id ? "location" : undefined}
            onClick={() => selectItem(id)}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] transition-colors hover:bg-slate-50 hover:text-accent ${
              activeId === id ? "bg-blue-50 text-accent" : "text-slate-700"
            }`}
          >
            <Icon size={15} strokeWidth={1.8} />
            {label}
          </a>
        ))}
      </nav>
      <div className="mt-auto flex items-center gap-5 px-6 pb-8 text-slate-600">
        <a href="#" aria-label="GitHub" className="transition-colors hover:text-ink"><Github size={17} /></a>
        <a href="#contact" aria-label="Contact" className="transition-colors hover:text-ink"><Send size={17} /></a>
        <a href="#about" aria-label="About" className="transition-colors hover:text-ink"><UserRound size={17} /></a>
      </div>
    </aside>
  );
}
