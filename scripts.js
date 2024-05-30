document.addEventListener('DOMContentLoaded', function () {
    const scriptButtons = document.querySelectorAll('.script-btn');
    scriptButtons.forEach(button => {
        button.addEventListener('click', function () {
            window.open(this.dataset.link, '_blank');
        });
    });

    document.getElementById('next-btn').addEventListener('click', function () {
        window.location.href = 'scripts.html';
    });

    document.getElementById('next-page-btn').addEventListener('click', function () {
        window.location.href = 'scripts-page2.html';
    });
});
