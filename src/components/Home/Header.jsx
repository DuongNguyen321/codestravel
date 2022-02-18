import "../../Style/style.css";
import "../../Style/night.css";
const navbarItems = [
  {
    id: 1,
    text: "Trang chủ",

    href: "#home",
  },
  {
    id: 2,
    text: "Đặt Lịch",

    href: "#book",
  },
  {
    id: 3,
    text: "Ưu Đãi",

    href: "#packages",
  },
  {
    id: 4,
    text: "Dịch Vụ",

    href: "#services",
  },
  {
    id: 5,
    text: "Thư viện",

    href: "#gallery",
  },
  {
    id: 6,
    text: "Đánh Giá",

    href: "#review",
  },
  {
    id: 7,
    text: "Liên hệ",

    href: "#contact",
  },
];

function Header(props) {
  return (
    <header>
      <div id="menu-bar">
        <i className="fas fa-bars"></i>
      </div>
      <a href="#home" className="logo">
        <span>S</span>Travel
      </a>
      <nav className="navbar">
        {navbarItems.map((navbarItems) => {
          return (
            <a key={navbarItems.id} href={navbarItems.href}>
              {navbarItems.text}
            </a>
          );
        })}
      </nav>
      <div className="icons">
        <i className="far fa-moon btn-toggle" />
        <i className="fas fa-search" id="search-btn" />
        <i className="fas fa-user" id="login-btn" />
      </div>
      <form action="" className="search-bar-container">
        <input
          type="text"
          name="Tìm Kiếm"
          id="search-bar"
          placeholder="Tìm kiếm..."
        />
        <label htmlFor="search-bar" id="search-btn" />
      </form>
    </header>
  );
}

export default Header;
