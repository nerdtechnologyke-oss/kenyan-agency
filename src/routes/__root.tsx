import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-4">Error 404</p>
        <h1 className="font-serif text-6xl mb-4">Page not found.</h1>
        <p className="text-sm text-muted-foreground mb-8">
          The property or page you're looking for has been moved or no longer exists.
        </p>
        <Link
          to="/"
          className="inline-block bg-foreground text-surface px-6 py-3 text-[11px] uppercase tracking-[0.22em]"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-4xl mb-3">Something went wrong.</h1>
        <p className="text-sm text-muted-foreground mb-8">Please refresh or return home.</p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="bg-foreground text-surface px-6 py-3 text-[11px] uppercase tracking-[0.22em]"
          >
            Try Again
          </button>
          <a href="/" className="border border-border px-6 py-3 text-[11px] uppercase tracking-[0.22em]">
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Imara Luxury — Premium Property Agents Across Kenya" },
      {
        name: "description",
        content:
          "Imara Luxury curates premium homes, rentals, Airbnb stays, villas and land across Kenya. Nationwide property partner from Nairobi to Diani.",
      },
      { name: "author", content: "Imara Luxury" },
      { property: "og:title", content: "Imara Luxury — Premium Property Agents Across Kenya" },
      {
        property: "og:description",
        content: "Curated homes, rentals, and Airbnb stays across Kenya.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Outfit:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </QueryClientProvider>
  );
}
