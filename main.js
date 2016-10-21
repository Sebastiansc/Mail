const Sent = require('./sent.js');
const Inbox = require('./inbox.js');
const Router = require('./router.js');
const Compose = require('./compose.js');

document.addEventListener("DOMContentLoaded", function(){
  $('.sidebar-nav li').click(function(e) {
    let location = $(this).text().toLowerCase();
    window.location.hash = location;
  });
  window.location.hash = "inbox";
  const routes = { inbox: Inbox, sent: Sent, compose: Compose};
  new Router($('.content'), routes);

});
