import "./globals.css";

function ThemeScript() {
  const js = `(function(){
    try {
      var stored = localStorage.getItem('theme');
      var prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      var isDark = stored ? stored === 'dark' : prefers;
      var root = document.documentElement;
      root.classList.toggle('dark', isDark);
      root.style.backgroundColor = isDark ? '#0a0a0a' : '#fafafa';
    } catch (e) {}
  })();`;
  return <script dangerouslySetInnerHTML={{ __html: js }} />;
}

export const metadata = {
  title: "Josue Raudales — Software Engineer",
  description: "Full-stack projects, AI experiments, and testing-focused engineering.",
  metadataBase: new URL("https://josueraudales.com"),
  openGraph: {
    title: "Josue Raudales — Software Engineer",
    description: "Projects, case studies, and contact.",
    url: "https://josueraudales.com",
    siteName: "JR Portfolio",
    images: ["/og.png"],
    locale: "en_US",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen bg-zinc-50 text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-50">
        {children}
      </body>
    </html>
  );
}
