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
