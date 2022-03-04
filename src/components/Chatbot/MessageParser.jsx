class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("")) {
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
  }
}

export default MessageParser;
