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

const bookForm = document.getElementById("book-form");
if (bookForm) {
  bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const v = (id) => document.getElementById(id).value.trim();
    const name = v("bk-name");
    const body = [
      "Hi Gordon,",
      "",
      "I'd like to book a trial tutoring session.",
      "",
      `Student: ${name}`,
      `Grade: ${v("bk-grade")}`,
      `Subject: ${v("bk-subject")}`,
      `Format: ${v("bk-format")}`,
      `Days and times that work: ${v("bk-times") || "Flexible"}`,
      "",
      v("bk-notes") ? `Notes: ${v("bk-notes")}` : "",
      "",
      "Thanks!",
    ].join("\n");
    const subject = `Trial session request: ${name}`;
    window.location.href = `mailto:gordonjaychan1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.getElementById("bk-status").textContent =
      "Your email app should open with the request filled in. Press send there. If nothing opened, email gordonjaychan1@gmail.com.";
  });
}

document.querySelectorAll(".ba").forEach((ba) => {
  const range = ba.querySelector(".ba-range");
  const set = () => ba.style.setProperty("--pos", range.value + "%");
  range.addEventListener("input", set);
  set();
});
