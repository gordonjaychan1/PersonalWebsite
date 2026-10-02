document.getElementById("copy").addEventListener("click", async (e) => {
  const btn = e.currentTarget;
  const text = document.getElementById("email").textContent.trim();
  try {
    await navigator.clipboard.writeText(text);
    btn.textContent = "Copied";
  } catch {
    const r = document.createRange();
    r.selectNodeContents(document.getElementById("email"));
    const s = getSelection(); s.removeAllRanges(); s.addRange(r);
    btn.textContent = "Selected, press ⌘C";
  }
  setTimeout(() => (btn.textContent = "Copy email"), 2000);
});
