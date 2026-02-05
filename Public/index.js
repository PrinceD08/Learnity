let deferredPrompt;

    const installBtn = document.getElementById('installBtn');

    // Listen for beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault(); // Prevent the default mini-infobar
      deferredPrompt = e;
      installBtn.style.display = 'block'; // Show install button
    });

    installBtn.addEventListener('click', async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt(); // Show the install prompt
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        console.log('User accepted the install');
      } else {
        console.log('User dismissed the install');
      }
      deferredPrompt = null;
      installBtn.style.display = 'none'; // Hide button after prompt
    });

    // Optional: hide button if already installed
    window.addEventListener('appinstalled', () => {
      console.log('App successfully installed!');
      installBtn.style.display = 'none';
    });