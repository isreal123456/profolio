(function () {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    function uniqueElements(nodes) {
        return Array.from(new Set(nodes.filter(Boolean)));
    }

    function collectTargets() {
        const selectors = [
            ".nav-shell",
            ".meta-shell",
            ".page-head",
            ".hero-shell",
            ".hero-shell .col-lg-7",
            ".hero-shell .col-lg-5",
            ".metrics-row .col-md-4",
            ".section-head",
            ".surface-card",
            ".modern-list .list-group-item",
            ".project-sidecard",
            ".contact-side-card",
            ".contact-form",
            ".alert",
            ".site-footer .container > *"
        ];

        const found = selectors.flatMap((selector) => Array.from(document.querySelectorAll(selector)));
        return uniqueElements(found);
    }

    function applyRevealClasses(targets) {
        targets.forEach((element, index) => {
            element.classList.add("reveal");
            if (element.matches(".project-sidecard, .contact-side-card, .hero-shell .col-lg-5")) {
                element.classList.add("reveal-right");
            } else if (element.matches(".hero-shell .col-lg-7, .page-head")) {
                element.classList.add("reveal-left");
            }
            element.style.setProperty("--reveal-delay", Math.min(index * 55, 420) + "ms");
        });
    }

    function observeTargets(targets) {
        if (!("IntersectionObserver" in window)) {
            targets.forEach((element) => element.classList.add("is-visible"));
            return;
        }

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add("is-visible");
                    obs.unobserve(entry.target);
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -10% 0px"
            }
        );

        targets.forEach((target) => observer.observe(target));
    }

    const targets = collectTargets();
    applyRevealClasses(targets);
    observeTargets(targets);
})();
