const toggle = document.getElementById('mode-toggle');
const gradient = document.querySelector('.gradient');

if (toggle && gradient) {
  const updateMode = () => {
    gradient.classList.toggle('gradient--hdr', toggle.checked);
    gradient.classList.toggle('gradient--sdr', !toggle.checked);
  };

  toggle.addEventListener('change', updateMode);
  updateMode();
}
