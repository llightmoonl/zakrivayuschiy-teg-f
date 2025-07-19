window.addEventListener('DOMContentLoaded', () => {
    const dialog = document.querySelector('.j-dialog');
    const dialogClose = document.querySelector('.j-dialog-close');
    const dialogTrigger = document.querySelector('.j-dialog-trigger');

    if (!dialog) return;

    if (dialogClose) {
        dialogClose.addEventListener('click', () => {
            dialog.close();
            dialog.classList.remove('active');
        });
    }

    if (dialogTrigger) {
        dialogTrigger.addEventListener('click', () => {
            dialog.showModal();
            dialog.classList.add('active');
        });
    }
});
