export default function BackgroundBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-violet-400/15 blur-[100px] animate-blob dark:bg-violet-600/20" />
      <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-sky-400/10 blur-[110px] animate-blob-slow dark:bg-sky-500/15" />
      <div
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-violet-300/10 blur-[90px] animate-blob dark:bg-violet-500/10"
        style={{ animationDelay: '-6s' }}
      />
    </div>
  );
}
