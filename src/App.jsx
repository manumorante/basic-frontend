export function App() {
  return (
    <>
      <video
        class="absolute inset-0 w-full h-full object-cover object-center"
        poster="/fashion.jpg"
        playsinline
        autoplay
        muted
        loop
      >
        <source src="/fashion.webm" type="video/webm" />
      </video>
      <main class="h-screen flex items-center justify-center">
        <h2 class="mix-blend-overlay text-[8vmin] text-white text-center mx-12 leading-tight">
          There’s a brand new dance but I don’t know its name…
        </h2>
      </main>
    </>
  )
}
