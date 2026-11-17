import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { dncActivations, projects } from "@/lib/projects";
import { Footer, MediaPlaceholder, Nav } from "@/components/site-chrome";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const idx = projects.findIndex((p) => p.slug === params.slug);
    if (idx === -1) throw notFound();
    return { project: projects[idx], next: projects[(idx + 1) % projects.length] };
  },
  head: ({ loaderData }) => {
    const title = loaderData?.project
      ? `${loaderData.project.title} | Kshitiz Trigunayat`
      : "Case Study | Kshitiz Trigunayat";
    const description = loaderData?.project?.description ?? "Case study from Kshitiz Trigunayat.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
      links: loaderData?.project
        ? [{ rel: "canonical", href: `/work/${loaderData.project.slug}` }]
        : [],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-bg text-primary flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-mono-label text-accent">404</p>
        <h1 className="font-display text-5xl mt-4">Case study not found.</h1>
        <Link
          to="/"
          hash="work"
          className="mt-8 inline-flex items-center gap-2 font-mono-label text-secondary hover:text-accent"
        >
          <ArrowLeft size={14} /> All work
        </Link>
      </div>
    </div>
  ),
  component: CaseStudy,
});

function CaseStudy() {
  const { project, next } = Route.useLoaderData();
  const cs = project.caseStudy;

  return (
    <div className="min-h-screen bg-bg text-primary font-body">
      <Nav />
      <main>
        <section className="relative overflow-hidden pt-28 md:pt-36 pb-14 md:pb-20">
          <div
            aria-hidden
            className="grid-paper absolute inset-0 pointer-events-none"
            style={{
              maskImage: "radial-gradient(ellipse 70% 70% at 80% 10%, black, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 70% at 80% 10%, black, transparent 75%)",
            }}
          />
          <div className="container-x relative">
            <Link
              to="/"
              hash="work"
              className="inline-flex items-center gap-2 font-mono-label text-secondary hover:text-accent"
            >
              <ArrowLeft size={14} /> All work
            </Link>
            <p className="mt-10 font-mono-label text-accent">{project.category}</p>
            <h1
              className="font-display font-semibold mt-5"
              style={{ fontSize: "clamp(40px, 7.5vw, 96px)", lineHeight: 0.95 }}
            >
              {project.title}
            </h1>
            <p className="mt-8 max-w-3xl border-l-2 border-accent pl-4 font-display text-xl md:text-2xl font-medium leading-snug">
              {project.metric}
            </p>
          </div>
        </section>

        <section className="border-y-2 border-rule">
          <dl className="container-x grid grid-cols-2 md:grid-cols-4">
            <Meta label="Role" value={project.role} />
            <Meta label="Timeline" value={project.year} />
            <Meta label="Client" value={project.client} />
            <Meta label="Stack" value={project.stack.slice(0, 3).join(" · ")} />
          </dl>
        </section>

        <Block label="Overview">
          <p className="text-xl md:text-2xl leading-snug">{project.description}</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li
                key={s}
                className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1.5 border border-border text-secondary"
              >
                {s}
              </li>
            ))}
          </ul>
        </Block>

        <Block label="Problem">
          <p className="text-lg md:text-xl leading-relaxed">{cs.problem}</p>
        </Block>

        <Block label="Approach">
          <ol className="space-y-8">
            {cs.approach.map((step, i) => (
              <li key={step.title} className="grid grid-cols-[auto_1fr] gap-5">
                <span className="font-display text-3xl font-semibold text-accent leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-secondary leading-relaxed max-w-2xl">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Block>

        <Block label="Key decisions">
          <div className="grid gap-4 md:grid-cols-2">
            {cs.decisions.map((d) => (
              <div key={d.title} className="border border-border bg-surface p-6">
                <h3 className="font-display text-xl font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm md:text-base text-secondary leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </Block>

        {project.slug === "dnc-ventures" && (
          <Block label="Brand activations">
            <ul>
              {dncActivations.map((a) => (
                <li
                  key={a.name}
                  className="grid gap-1 border-t border-border py-4 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-6"
                >
                  <span className="text-lg">{a.name}</span>
                  <span className="text-secondary">{a.result}</span>
                </li>
              ))}
            </ul>
          </Block>
        )}

        {project.media && project.media.length > 0 && (
          <Block label="From the field">
            <div className="grid gap-4 sm:grid-cols-2">
              {project.media.map((m) => (
                <MediaPlaceholder key={m.event} item={m} />
              ))}
            </div>
          </Block>
        )}

        <section className="border-t-2 border-rule py-16 md:py-24">
          <div className="container-x">
            <p className="font-mono-label text-secondary mb-8">Scorecard</p>
            <dl className="grid gap-8 md:grid-cols-3">
              {cs.outcomes.map((o) => (
                <div key={o.label} className="border-t border-border pt-5">
                  {o.value.includes(" · ") ? (
                    <dd className="flex flex-wrap gap-2">
                      {o.value.split(" · ").map((v) => (
                        <span
                          key={v}
                          className="border border-border px-3 py-1.5 font-display text-lg font-semibold"
                        >
                          {v}
                        </span>
                      ))}
                    </dd>
                  ) : (
                    <dd
                      className="font-display font-semibold leading-none"
                      style={{ fontSize: "clamp(44px, 6vw, 80px)" }}
                    >
                      {o.value}
                    </dd>
                  )}
                  <dt className="mt-3 text-sm text-secondary">{o.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-t border-border">
          <Link
            to="/work/$slug"
            params={{ slug: next.slug }}
            className="group block py-16 md:py-24"
          >
            <div className="container-x">
              <p className="font-mono-label text-secondary">Next project</p>
              <p
                className="font-display font-semibold mt-4 inline-flex flex-wrap items-baseline gap-3 group-hover:text-accent transition-colors"
                style={{ fontSize: "clamp(32px, 5.5vw, 68px)", lineHeight: 1 }}
              >
                {next.title}
                <ArrowUpRight
                  size={32}
                  className="text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </p>
            </div>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border py-14 md:py-20">
      <div className="container-x grid gap-6 md:grid-cols-12 md:gap-10">
        <p className="md:col-span-3 font-mono-label text-accent md:sticky md:top-24 self-start">
          {label}
        </p>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-5 pr-4 [&:nth-child(even)]:pl-4 [&:nth-child(even)]:border-l md:[&:not(:first-child)]:pl-5 md:[&:not(:first-child)]:border-l border-border">
      <dt className="font-mono-label text-secondary">{label}</dt>
      <dd className="mt-2 text-sm md:text-base">{value}</dd>
    </div>
  );
}
