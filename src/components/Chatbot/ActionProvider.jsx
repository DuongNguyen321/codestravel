class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  greet = () => {
    const message = this.createChatBotMessage(
      "Hi chào bạn, Tôi là chatbot, Tôi có thể giúp gì cho bạn?",
      {
        widget: "learningOptions",
      }
    );

    this.updateChatbotState(message);
  };
  handlePackages = () => {
    const message = this.createChatBotMessage(
      "Bạn muốn tìm hiểu thêm về Ưu đãi?",
      {
        widget: "packagesLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleServices = () => {
    const message = this.createChatBotMessage(
      "Bạn muốn tìm hiểu thêm về Dịch vụ?",
      {
        widget: "servicesLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleCovid = () => {
    const message = this.createChatBotMessage(
      "Bạn muốn tìm hiểu thêm về Du lịch trong dịch Covid?",
      {
        widget: "covidLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleSafe = () => {
    const message = this.createChatBotMessage(
      "Bạn muốn tìm hiểu thêm về chính sách An toàn của Stravel ?",
      {
        widget: "safeLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleAbout = () => {
    const message = this.createChatBotMessage(
      "Bạn muốn tìm hiểu thêm về Stravel ?",
      {
        widget: "aboutLinks",
      }
    );

    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
