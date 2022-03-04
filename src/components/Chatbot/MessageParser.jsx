class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("xin chao")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("hi")) {
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

    if (lowerCaseMessage.includes("about")) {
      this.actionProvider.handleAbout();
    }
    if (lowerCaseMessage.includes("stravel")) {
      this.actionProvider.handleAbout();
    }
  }
}

export default MessageParser;
