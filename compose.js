const MessageStore = require('./message_store.js');

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
