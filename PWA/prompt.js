let deferredPrompt;
 
window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  deferredPrompt = event;
  showInstallPrompt();
});
 
function showInstallPrompt() {
}