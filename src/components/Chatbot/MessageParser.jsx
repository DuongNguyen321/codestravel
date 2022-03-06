class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes("xin chao")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("xin chào")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("chào")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("chao")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("hi")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("...")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("alo")) {
      this.actionProvider.greet();
    }

    if (lowerCaseMessage.includes("ưu đãi")) {
      this.actionProvider.handlePackages();
    }
    if (lowerCaseMessage.includes("uu dai")) {
      this.actionProvider.handlePackages();
    }

    if (lowerCaseMessage.includes("dịch vụ")) {
      this.actionProvider.handleServices();
    }
    if (lowerCaseMessage.includes("dich vu")) {
      this.actionProvider.handleServices();
    }

    if (lowerCaseMessage.includes("dịch")) {
      this.actionProvider.handleCovid();
    }
    if (lowerCaseMessage.includes("dich")) {
      this.actionProvider.handleCovid();
    }
    if (lowerCaseMessage.includes("covid")) {
      this.actionProvider.handleCovid();
    }
    if (lowerCaseMessage.includes("covid19")) {
      this.actionProvider.handleCovid();
    }

    if (lowerCaseMessage.includes("an toàn")) {
      this.actionProvider.handleSafe();
    }
    if (lowerCaseMessage.includes("an toan")) {
      this.actionProvider.handleSafe();
    }
    if (lowerCaseMessage.includes("safe")) {
      this.actionProvider.handleSafe();
    }

    if (lowerCaseMessage.includes("about")) {
      this.actionProvider.handleAbout();
    }
    if (lowerCaseMessage.includes("stravel")) {
      this.actionProvider.handleAbout();
    }
    if (lowerCaseMessage.includes("duong")) {
      this.actionProvider.handleAbout();
    }
    if (lowerCaseMessage.includes("cv")) {
      this.actionProvider.handleAbout();
    }
     if (lowerCaseMessage.includes("bàn phím cơ")) {
       this.actionProvider.keyboard();
     }
     if (lowerCaseMessage.includes("ban phim co")) {
       this.actionProvider.keyboard();
     }
  }
}

export default MessageParser;
