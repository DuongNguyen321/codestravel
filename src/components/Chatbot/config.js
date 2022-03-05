import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./LearningOptions";
import LinkList from "./LinkList";
const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage("Hi, Tôi là botchat. Tôi có thể giúp gì cho bạn?", {
      widget: "learningOptions",
    }),
  ],
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "servicesLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Tất cả các chuyến đi đều được đảm bảo chất lượng dịch vụ tốt nhất.",
            url: "/",
            id: 1,
          },
          {
            text: "Bạn có thểm xem thêm phần Dịch vụ ở trang chủ.",
            url: "/",
            id: 2,
          },
          {
            text: "Nếu bạn muốn liên hệ thêm với chúng tôi, hãy bấm vào phần liên hệ ở trang chủ.",
            url: "/",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "covidLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Các chính sách mới đã góp phần thúc đẩy du lịch. Vì vậy bạn không cần lo lắng quá về tình hình dịch bệnh<3",
            url: "/",
            id: 1,
          },
          {
            text: "nếu bạn muốn xem thềm về những quốc gia mở cửa sau dịch bệnh !",
            url: "https://vnexpress.net/topic/cac-quoc-gia-mo-cua-du-lich-giua-covid-19-25280",
            id: 2,
          },
          {
            text: "Nếu bạn muốn liên hệ thêm với chúng tôi, hãy bấm vào phần liên hệ ở trang chủ.",
            url: "/",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "safeLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Chúng tôi luôn tuân thủ các chính sách an toàn trong nước và quốc tế để đem đến cho bạn trải nghiệm tốt nhất.",
            url: "/",
            id: 1,
          },
          {
            text: "Bạn có thể xem các chính sách an toàn tại đây",
            url: "https://gapedu.vn/an-toan-an-ninh-cho-khach-du-lich/",
            id: 2,
          },
          {
            text: "Nếu bạn muốn liên hệ thêm với chúng tôi, hãy bấm vào phần liên hệ ở trang chủ.",
            url: "/",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "aboutLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Trải Qua 17 Năm Phát Triển Bền Vững, STravel Đã Ghi Dấu Ấn Của Mình Với Thông Điệp “Nâng Tầm Trải Nghiệm Từng Chuyến Đi”",
            url: "/",
            id: 1,
          },
          {
            text: "Watch my CV",
            url: "https://nguyeduongcv.w3spaces.com/index.html",
            id: 2,
          },
          {
            text: "Trang Web được làm bởi Dương...",
            url: "https://github.com/DuongNguyen321/codestravel",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "packagesLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Hầu hết các gói du lịch còn hoạt động, tuy nhiên bạn không thể đến những địa điểm đang có dịch bệnh hoặc xảy ra xung đột.",
            url: "/",
            id: 1,
          },
          {
            text: "Các ưu đãi mới sẽ được cập nhật ở phần Ưu đãi trong trang chủ.",
            url: "/",
            id: 2,
          },
          {
            text: "Nếu bạn muốn liên hệ thêm với chúng tôi, hãy bấm vào phần liên hệ ở trang chủ.",
            url: "/",
            id: 3,
          },
        ],
      },
    },
  ],
};
export default config;
