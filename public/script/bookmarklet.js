var modal = document.createElement('div');
modal.style.position = 'fixed';
modal.style.zIndex = '9999';
modal.style.left = '0';
modal.style.top = '0';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
modal.style.display = 'flex';
modal.style.justifyContent = 'center';
modal.style.alignItems = 'center';

var modalContent = document.createElement('div');
modalContent.style.backgroundColor = '#fff';
modalContent.style.padding = '20px';
modalContent.style.borderRadius = '5px';
modalContent.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';

var modalTitle = document.createElement('h2');
modalTitle.innerText = 'Bookmarklet';
modalContent.appendChild(modalTitle);

var iframe = document.createElement('iframe');
iframe.src = 'https://scrapsys.alwaysdata.net/bookmarklet';
iframe.style.width = '600px';
iframe.style.height = '400px';
iframe.style.border = 'none';
iframe.title = 'prod iframe';

modalContent.appendChild(iframe);

var closeButton = document.createElement('button');
closeButton.innerText = 'Fermer';
closeButton.style.marginTop = '10px';
closeButton.onclick = function () {
  document.body.removeChild(modal);
};

modalContent.appendChild(closeButton);
modal.appendChild(modalContent);
document.body.appendChild(modal);
