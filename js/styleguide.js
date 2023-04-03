document.querySelectorAll('.js-change-resolution').forEach(function(link) {
  link.addEventListener('click', function(e) {
    const newResolution = link.dataset.resolution;
    const iframe = document.querySelector('.js-main-iframe');

    iframe.style.width = newResolution;
  });
});

document.querySelectorAll('.js-sidebar a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    const iframe = document.querySelector('.js-main-iframe');
    const iframeUrl = new URL(iframe.src)
    iframeUrl.hash = new URL(link.href).hash;

    iframe.src = iframeUrl;
  });
});