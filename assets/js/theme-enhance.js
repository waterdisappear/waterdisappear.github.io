(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var nodes = document.querySelectorAll(".paper-box, .sidebar .profile_box");
  if (!nodes.length || !("IntersectionObserver" in window)) return;

  nodes.forEach(function (el) {
    el.classList.add("xc-reveal");
  });

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("xc-on");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -24px 0px" }
  );

  nodes.forEach(function (el) {
    io.observe(el);
  });
})();
