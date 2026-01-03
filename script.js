const emailLink = document.getElementById('email-link');
const copyEmailToast = document.getElementById('copyToast');

let toastTimeout;

if (emailLink && copyEmailToast) {
    emailLink.addEventListener('click', (event) => {
        
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        
        event.preventDefault();
        
        navigator.clipboard.writeText('jakeaclara@gmail.com')
            .catch(err => {
                globalThis.location.href = emailLink.href;
            });

        copyEmailToast.classList.add('show');
        
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            copyEmailToast.classList.remove('show');
        }, 2000);
    });   
}