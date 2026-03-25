(function () {
    const liveNode = document.getElementById("live-status");
    if (!liveNode) return;

    async function refreshStatus() {
        try {
            const response = await fetch("/live-status/", {headers: {"X-Requested-With": "XMLHttpRequest"}});
            if (!response.ok) {
                liveNode.textContent = "offline";
                return;
            }
            const data = await response.json();
            if (data.project_updated || data.post_updated) {
                liveNode.textContent = "up to date";
            } else {
                liveNode.textContent = "no content yet";
            }
        } catch (err) {
            liveNode.textContent = "offline";
        }
    }

    refreshStatus();
    setInterval(refreshStatus, 15000);
})();
