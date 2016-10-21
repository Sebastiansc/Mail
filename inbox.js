const MessageStore = require('./message_store.js');
const Router = require('./router.js');

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
