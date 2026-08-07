// ============================================================
// VictorMeet — Contact Page
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
          <a href="#/about" style="color: var(--primary); text-decoration: none; font-weight: bold;">About</a>
        </div>
      </nav>

      <div style="max-width: 860px; margin: var(--space-10) auto; padding: 0 var(--space-6); line-height: 1.7;">
        <h1 style="font-size: 32px; font-weight: 800; margin-bottom: var(--space-4);">Contact Us</h1>
        <p style="font-size: 16px; color: var(--text-secondary); margin-bottom: var(--space-4);">
          For support, business inquiries, or general questions, please reach out through the channels below.
        </p>
        <div style="background: var(--bg-secondary); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: var(--space-5);">
          <p style="margin: 0 0 var(--space-2);"><strong>Email:</strong> support@victormeet.app</p>
          <p style="margin: 0 0 var(--space-2);"><strong>Support:</strong> For technical assistance and account issues</p>
          <p style="margin: 0;"><strong>Business:</strong> Partnerships, monetization, and collaboration requests</p>
        </div>
      </div>
    </div>
  `;
}

export function mount() {}
export function unmount() {}
