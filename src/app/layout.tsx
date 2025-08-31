import "./globals.css";
import Script from "next/script";

const themeInit = `
try {
  var stored = localStorage.getItem('theme');
  var prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  var isDark = stored ? stored === 'dark' : prefers;
  var root = document.documentElement;
  root.classList.toggle('dark', isDark);
  root.style.backgroundColor = isDark ? '#0a0a0a' : '#fafafa';
} catch (e) {}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="min-h-screen bg-zinc-50 text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-50">
        {children}
      </body>
    </html>
  );
}
