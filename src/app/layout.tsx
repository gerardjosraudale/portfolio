export const metadata = {
title: "Josue Raudales — Software Engineer",
description: "Full‑stack projects, AI experiments, and testing‑focused engineering.",
metadataBase: new URL("https://your-deployment-url.vercel.app"),
openGraph: {
title: "Josue Raudales — Software Engineer",
description: "Projects, case studies, and contact.",
url: "https://your-deployment-url.vercel.app",
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
<body className="min-h-screen bg-zinc-50 text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-50">
{children}
</body>
</html>
);
}