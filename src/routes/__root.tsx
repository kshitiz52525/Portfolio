import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SITE } from "../lib/site";

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-bg text-primary font-body flex items-center justify-center px-6">
      <div className="max-w-xl">
        <p className="font-mono-label text-accent">404 / Galat gali</p>
        <h1
          className="font-display font-bold mt-6"
          style={{
            fontSize: "clamp(56px, 10vw, 128px)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
          }}
        >
          Lost the trail.
        </h1>
        <p className="mt-6 text-secondary text-lg max-w-md">
          Wrong lane. This page doesn&apos;t exist, or it moved while you blinked.
          Head back to the work.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-3 h-12 px-7 bg-accent text-on-accent font-mono-label hover:bg-primary hover:text-bg transition-colors"
          >
            Back home
          </Link>
          <Link
            to="/"
            hash="work"
            className="inline-flex items-center h-12 px-2 font-mono-label text-secondary hover:text-primary transition-colors"
          >
            View Work →
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
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
      { title: SITE.title },
      { name: "description", content: SITE.description },
      { name: "author", content: SITE.name },
      { name: "theme-color", content: "#050504" },
      { property: "og:title", content: SITE.title },
      { property: "og:description", content: SITE.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE.title },
      { name: "twitter:description", content: SITE.description },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c25c6b57-750b-494f-b615-39858ecff8fb/id-preview-3e969edf--f3de0afa-771d-4d32-98fc-db6c6f3680d4.lovable.app-1782164885019.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c25c6b57-750b-494f-b615-39858ecff8fb/id-preview-3e969edf--f3de0afa-771d-4d32-98fc-db6c6f3680d4.lovable.app-1782164885019.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..600;1,6..72,300..600&family=Instrument+Serif:ital@0;1&display=swap",
      },
    ],
    scripts: [],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
