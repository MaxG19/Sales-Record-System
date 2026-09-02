// loading.js — Shared loading states and toast notifications

const Loading = {
  setButton(btn, loadingText) {
    btn._originalHTML = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `<span class="inline-block animate-spin mr-2" style="display:inline-block;animation:spin 1s linear infinite;">&#8635;</span> ${loadingText}`;
    btn.style.opacity = '0.8';
    btn.style.cursor = 'not-allowed';
  },

  resetButton(btn) {
    if (btn._originalHTML) btn.innerHTML = btn._originalHTML;
    btn.disabled = false;
    btn.style.opacity = '';
    btn.style.cursor = '';
  },

  setButtonSuccess(btn, successText) {
    btn.innerHTML = `<span style="margin-right:6px;">✓</span> ${successText}`;
    btn.style.opacity = '1';
  }
};

const Toast = {
  show(message, type = 'success', duration = 4000) {
    const existing = document.getElementById('bms-toast');
    if (existing) existing.remove();

    const colors = {
      success: 'background:#344e41;color:#fff;',
      error: 'background:#ba1a1a;color:#fff;',
      info: 'background:#1e372b;color:#fff;',
      warning: 'background:#DDA15E;color:#fff;'
    };

    const toast = document.createElement('div');
    toast.id = 'bms-toast';
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'polite');
    toast.style.cssText = `
      position:fixed;top:24px;right:24px;z-index:9999;
      padding:14px 20px;border-radius:12px;
      font-family:'Inter',sans-serif;font-size:14px;font-weight:500;
      box-shadow:0 4px 16px rgba(0,0,0,0.15);
      display:flex;align-items:center;gap:10px;
      max-width:360px;
      opacity:0;transform:translateY(-10px);
      transition:all 0.25s cubic-bezier(0.16,1,0.3,1);
      ${colors[type] || colors.info}
    `;
    toast.innerHTML = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    });

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
};

// Inject spin keyframe once
(function() {
  if (!document.getElementById('bms-spin-style')) {
    const style = document.createElement('style');
    style.id = 'bms-spin-style';
    style.textContent = '@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}';
    document.head.appendChild(style);
  }
})();
