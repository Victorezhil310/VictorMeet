// ============================================================
// VictorMeet — About Page
// ============================================================

export function render() {
  return `
    <div style="background: var(--bg-primary); min-height: 100vh; font-family: sans-serif; color: var(--text-primary);">
      <nav class="navbar" style="position: static; height: auto; padding: var(--space-4) var(--space-6); background: var(--bg-secondary); border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between;">
        <a href="#/landing" class="nav-logo" style="font-size: 32px; font-weight: 900; text-decoration: none;">
          <span style="color: var(--primary);">Victor</span><span style="color: var(--secondary);">Meet</span>
        </a>
        <div style="font-size: var(--text-sm); color: var(--text-secondary); font-weight: 500; display: flex; gap: var(--space-3);">
          <a href="#/landing" style="color: var(--primary); text-decoration: none; font-weight: bold;">Home</a>
          <a href="#/contact" style="color: var(--primary); text-decoration: none; font-weight: bold;">Contact</a>
        </div>
      </nav>

      <div style="max-width: 860px; margin: var(--space-10) auto; padding: 0 var(--space-6); line-height: 1.7;">
        <h1 style="font-size: 32px; font-weight: 800; margin-bottom: var(--space-4);">About VictorMeet</h1>
        <p style="font-size: 16px; color: var(--text-secondary); margin-bottom: var(--space-4);">
          VictorMeet is a modern, anonymous social discovery platform where people can meet new friends through real-time text and video conversations.
        </p>
        <p style="font-size: 16px; color: var(--text-secondary); margin-bottom: var(--space-4);">
          Our mission is to make online social connection simple, fast, and safe by pairing people based on shared interests and open conversation.
        </p>
        <div style="background: var(--bg-secondary); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: var(--space-5); margin-top: var(--space-6);">
          <h2 style="font-size: 22px; font-weight: 700; margin-bottom: var(--space-3);">What you can expect</h2>
          <ul style="margin: 0; padding-left: var(--space-6); color: var(--text-secondary);">
            <li>Fast random matching with text or video chat.</li>
            <li>Simple anonymous interaction without heavy sign-up requirements.</li>
            <li>Support for language exchange, casual conversations, and meeting new people.</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

export function mount() {}
export function unmount() {}
