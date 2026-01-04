const emailLink = document.getElementById('email-link');
const copyEmailToast = document.getElementById('copy-toast');

const EMAIL = 'jakeaclara@gmail.com';

let toastTimeout;

if (emailLink && copyEmailToast) {
    emailLink.addEventListener('click', (event) => {
        
        // Allow default behavior for meta/ctrl clicks
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        
        // Prevent default mailto behavior
        event.preventDefault();
        
        // Attempt to copy email to clipboard, fallback to mailto on failure
        navigator.clipboard.writeText(EMAIL)
            .catch(err => {
                globalThis.location.href = emailLink.href;
            });

        // Show toast notification
        copyEmailToast.classList.add('show');
        
        // Reset toast timeout
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            copyEmailToast.classList.remove('show');
        }, 2000);
    });   
}