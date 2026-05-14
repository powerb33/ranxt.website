function renderNav(activePage) {
  var pages = [
    { id: 'home',     href: '/index.html',               label: 'Home' },
    { id: 'using',    href: '/using-ranxt.html',         label: 'Using ranxt' },
    { id: 'contact',  href: '/home/contact-us.html',     label: 'Contact Us' },
    { id: 'privacy',  href: '/home/privacy-policy.html', label: 'Privacy Policy' },
    { id: 'terms',    href: '/home/terms-of-service.html', label: 'Terms of Service' },
    { id: 'delete',   href: '/delete-data.html',         label: 'Delete Data' }
  ];

  var links = pages.map(function(p) {
    var activeClass = (p.id === activePage) ? ' class="active"' : '';
    return '<li><a href="' + p.href + '"' + activeClass + '>' + p.label + '</a></li>';
  }).join('\n      ');

  document.getElementById('site-nav').innerHTML = '<nav>\n' +
    '  <div class="container">\n' +
    '    <a href="/index.html" class="logo-link">\n' +
    '      <img src="/images/ranxt_icon_name.png" alt="ranxt">\n' +
    '    </a>\n' +
    '    <button class="nav-toggle" aria-label="Menu">\u2630</button>\n' +
    '    <ul class="nav-links">\n' +
    '      ' + links + '\n' +
    '    </ul>\n' +
    '  </div>\n' +
    '</nav>';

  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
  }
}
