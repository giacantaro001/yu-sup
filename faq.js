// Renders the FAQ from faq.json — the same file the app reads, so both stay in sync.
(function () {
  const list = document.querySelector('#faq-list');
  if (!list) return;
  let faqs = null;
  const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  function render() {
    const lang = document.documentElement.lang === 'it' ? 'it' : 'en';
    if (!faqs) {
      list.innerHTML = lang === 'it'
        ? '<p>Le FAQ non sono disponibili al momento. Scrivici a hello@yusup.co.uk.</p>'
        : '<p>FAQs are unavailable right now. Email us at hello@yusup.co.uk.</p>';
      return;
    }
    const open = [...list.querySelectorAll('details[open]')].map(d => d.id);
    list.innerHTML = faqs.map(f => {
      const t = f[lang] || f.en;
      return `<details id="faq-${esc(f.id)}"${open.includes('faq-' + f.id) ? ' open' : ''}><summary>${esc(t.q)}<i aria-hidden="true"></i></summary><p>${esc(t.a)}</p></details>`;
    }).join('');
  }
  fetch('./faq.json', { cache: 'no-cache' })
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(d => { faqs = d.faqs; })
    .catch(() => { faqs = null; })
    .finally(render);
  const lang = document.querySelector('#lang');
  if (lang) lang.addEventListener('click', render);
})();
