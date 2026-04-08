document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello World app initialized');

    // Add a simple heartbeat to console for signage monitoring
    setInterval(() => {
        const now = new Date();
        console.log(`Heartbeat: ${now.toLocaleTimeString()}`);
    }, 60000);
});
