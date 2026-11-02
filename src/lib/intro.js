// The first visit waits for webfonts behind a plain cream veil, then fades it.
// Children read this before the template marks the intro as played (child effects run first).
let introPending = true;

export function isFirstLoad() {
  return introPending;
}

export function markIntroPlayed() {
  introPending = false;
}

// Resolves when fonts are ready, or after `limit` ms so a slow font never blocks the page
export function whenFontsReady(callback, limit = 1200) {
  let done = false;
  const run = () => {
    if (done) return;
    done = true;
    callback();
  };
  document.fonts?.ready.then(run);
  setTimeout(run, limit);
}
