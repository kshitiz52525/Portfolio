import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { SITE } from "@/lib/site";

type Phase = "gate" | "playing" | "done";
const SEEN_KEY = "intro-seen";

/**
 * Cinematic entrance: a black gate with the name and "Enter", then the intro video full screen.
 * Shown once per browser session; the nav's "Intro" link replays it.
 */
export function IntroGate() {
  const src: string = SITE.links.introVideo;
  const [phase, setPhase] = useState<Phase>("gate");
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const finish = () => {
    videoRef.current?.pause();
    setPhase("done");
  };

  const start = () => {
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* storage unavailable: gate simply shows again next visit */
    }
    const v = videoRef.current;
    if (!src || !v) return finish();
    setPhase("playing");
    v.currentTime = 0;
    v.muted = false;
    setMuted(false);
    v.play().catch(() => {
      // Autoplay with sound was refused: fall back to muted playback.
      v.muted = true;
      setMuted(true);
      v.play().catch(finish);
    });
  };

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SEEN_KEY)) setPhase("done");
    } catch {
      /* ignore */
    }
    const replay = () => start();
    window.addEventListener("replay-intro", replay);
    return () => window.removeEventListener("replay-intro", replay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.body.style.overflow = phase === "done" ? "" : "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && phase !== "done") finish();
      if (e.key === "Enter" && phase === "gate") start();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const hidden = phase === "done";

  return (
    <div
      aria-hidden={hidden}
      className="intro-gate fixed inset-0 z-[100] bg-black text-primary"
      style={{
        opacity: hidden ? 0 : 1,
        visibility: hidden ? "hidden" : "visible",
        transition: hidden ? "opacity 1s ease, visibility 0s linear 1s" : "none",
      }}
    >
      <noscript>
        <style>{`.intro-gate{display:none !important}`}</style>
      </noscript>

      {/* Video layer */}
      {src && (
        <video
          ref={videoRef}
          src={src}
          poster="/intro-poster.jpg"
          playsInline
          preload="auto"
          onEnded={finish}
          onTimeUpdate={(e) => {
            const v = e.currentTarget;
            if (v.duration) setProgress(v.currentTime / v.duration);
          }}
          className="absolute inset-0 h-full w-full object-contain transition-opacity duration-1000"
          style={{ opacity: phase === "playing" ? 1 : 0 }}
        />
      )}

      {/* Gate */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-between px-6 py-10 text-center transition-opacity duration-1000"
        style={{
          opacity: phase === "gate" ? 1 : 0,
          pointerEvents: phase === "gate" ? "auto" : "none",
        }}
      >
        <p className="font-mono-label fade-up text-secondary" style={{ animationDelay: "0.2s" }}>
          Turn on your sound
        </p>

        <div className="flex flex-col items-center">
          <h1
            className="font-serif-italic sign-in leading-none"
            style={{ fontSize: "clamp(52px, 11vw, 132px)" }}
          >
            Kshitiz Trigunayat
          </h1>
          <p
            className="fade-up mt-10 max-w-md text-lg leading-snug text-secondary md:text-xl"
            style={{ animationDelay: "2.4s" }}
          >
            You are diving into the world of
            <br />
            product manager and entrepreneur
            <br />
            Kshitiz Trigunayat.
          </p>
          <button
            type="button"
            onClick={start}
            className="fade-up mt-10 border-b border-primary pb-0.5 text-base tracking-wide transition-colors hover:border-accent hover:text-accent"
            style={{ animationDelay: "3.1s" }}
          >
            Enter
          </button>
        </div>

        <button
          type="button"
          onClick={finish}
          className="font-mono-label fade-up text-secondary transition-colors hover:text-primary"
          style={{ animationDelay: "3.4s" }}
        >
          Skip intro
        </button>
      </div>

      {/* Playing controls */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-700"
        style={{ opacity: phase === "playing" ? 1 : 0 }}
      >
        <p className="font-serif-italic absolute left-1/2 top-6 -translate-x-1/2 text-2xl">
          Kshitiz Trigunayat
        </p>
        <button
          type="button"
          aria-label={muted ? "Unmute" : "Mute"}
          onClick={() => {
            const v = videoRef.current;
            if (!v) return;
            v.muted = !v.muted;
            setMuted(v.muted);
          }}
          className="pointer-events-auto absolute bottom-7 left-7 text-secondary transition-colors hover:text-primary"
        >
          {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
        <button
          type="button"
          onClick={finish}
          className="font-mono-label pointer-events-auto absolute bottom-7 right-7 text-secondary transition-colors hover:text-primary"
        >
          Skip
        </button>
        <div className="absolute inset-x-0 bottom-0 h-px bg-border">
          <div
            className="h-full origin-left bg-primary/70"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </div>
    </div>
  );
}
