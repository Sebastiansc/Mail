/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Sent = __webpack_require__(4);
	const Inbox = __webpack_require__(2);
	const Router = __webpack_require__(1);
	const Compose = __webpack_require__(5);

	document.addEventListener("DOMContentLoaded", function(){
	  $('.sidebar-nav li').click(function(e) {
	    let location = $(this).text().toLowerCase();
	    window.location.hash = location;
	  });
	  window.location.hash = "inbox";
	  const routes = { inbox: Inbox, sent: Sent, compose: Compose};
	  new Router($('.content'), routes);

	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	class Router{
	  constructor(node, routes){
	    this.node = node;
	    this.routes = routes;
	    this.start();
	  }

	  start(){
	    this.render();
	    $(window).on("hashchange", e => {
	      this.render();
	    });
	  }

	  render(){
	    this.node.empty();
	    const component = this.activeRoute();
	    if (component !== undefined){
	      debugger;
	      const content = component.render();
	      this.node.append(content);
	    }
	  }

	  activeRoute(){
	    const location = window.location.hash.slice(1);
	    return this.routes[location];
	  }
	}

	module.exports = Router;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const MessageStore = __webpack_require__(3);
	const Router = __webpack_require__(1);

	class Inbox{
	  static render(){
	    let inbox = $(`<ul>An inbox message</ul>`).addClass("messages");
	    const messages = MessageStore.getInboxMessages();
	    messages.forEach(message => {
	      inbox.append(this.renderMessage(message));
	    });
	    return inbox;
	  }

	  static renderMessage(message){
	    const from = $(`<span>${message.from}</span>`);
	    const subject = $(`<span>${message.subject}</span>`);
	    const body = $(`<span>${message.body}</span>`);
	    let li =  $(`<li></li>`);
	    [from, subject, body].forEach(el => {
	      li.append(el);
	    });
	    li.addClass("message");
	    return li;
	  }
	}

	module.exports = Inbox;


/***/ },
/* 3 */
/***/ function(module, exports) {

	let messages = {
	  sent: [
	    {to: "friend@mail.com", subject: "Check this out", body: "It's so cool"},
	    {to: "person@mail.com", subject: "zzz", body: "so booring"}
	  ],
	  inbox: [
	    {from: "grandma@mail.com", subject: "Fwd: Fwd: Fwd: Check this out", body:
	"Stay at home mom discovers cure for leg cramps. Doctors hate her"},
	  {from: "person@mail.com", subject: "Questionnaire", body: "Take this free quiz win $1000 dollars"}
	]
	};

	class MessageStore{
	  static message(){
	    this.messageDraft = {
	      from: "",
	      to: "",
	      subject: "",
	      body: ""
	    };
	  }

	  static getInboxMessages(){
	    return messages.inbox;
	  }

	  static getSentMessages(){
	    return messages.sent;
	  }

	  static updateDraftField(field, value){
	    this.messageDraft[field] = value;
	  }

	  static sendDraft(){
	    messages.sent.push(this.messageDraft);
	    this.message;
	  }

	  static getMessageDraft(){
	    return this.messageDraft;
	  }

	}

	module.exports = MessageStore;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	const MessageStore = __webpack_require__(3);
	const Router = __webpack_require__(1);

	class Inbox{
	  static render(){
	    let inbox = $(`<ul>An inbox message</ul>`).addClass("messages");
	    const messages = MessageStore.getSentMessages();
	    messages.forEach(message => {
	      inbox.append(this.renderMessage(message));
	    });
	    return inbox;
	  }

	  static renderMessage(message){
	    const from = $(`<span>${message.to}</span>`).addClass("to");
	    const subject = $(`<span>${message.subject}</span>`);
	    const body = $(`<span>${message.body}</span>`);
	    let li =  $(`<li></li>`);
	    [from, subject, body].forEach(el => {
	      li.append(el);
	    });
	    li.addClass("message");
	    return li;
	  }
	}

	module.exports = Inbox;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	const MessageStore = __webpack_require__(3);

	class Compose{
	  static render(){
	    const draft = MessageStore.getMessageDraft();
	    $('#compose-form textarea').val(draft);
	    $('.new-message').removeClass('message-space');
	  }

	  // createBody(){
	  //
	  // }
	}

	module.exports = Compose;


/***/ }
/******/ ]);