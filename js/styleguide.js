const iframe = document.querySelector('.js-main-iframe');
const iframeUrl = new URL(iframe.src);

document.querySelectorAll('.js-navigate-iframe').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    iframeUrl.hash = new URL(this.href).hash;
    iframe.src = iframeUrl.href
  })
})


document.querySelectorAll('.js-change-resolution').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const newResolution = link.dataset.resolution;
    iframe.style.width = newResolution;
  })
})