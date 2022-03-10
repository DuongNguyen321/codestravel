import React from "react";
import { Link } from "react-router-dom";

export default class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      bookHeading: [],
      bookSelect: [],
    };
  }

  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/home")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            bookHeading: result.bookHeading,
            bookSelect: result.bookSelect,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    return (
      <section className="book" id="book">
        <h1 className="heading">
          {this.state.bookHeading.map((bookHeading) => {
            return (
              <span key={bookHeading.id} className={bookHeading.className}>
                {bookHeading.text}
              </span>
            );
          })}
        </h1>
        <div className="row">
          <div className="image">
            <img
              src="https://apiforstravel.herokuapp.com/images/Home/book-img.svg"
              alt=""
            />
          </div>
          <form action="">
            <div className="inputBox">
              <h3>Hãy liên hệ với tôi bằng :</h3>
              <input type="text" placeholder="Email hoặc số điện thoại" />
            </div>
            <div className="inputBox">
              <h3>Tôi muốn đến :</h3>
              <select defaultValue="">
                {this.state.bookSelect.map((bookSelect) => {
                  return (
                    <option
                      key={bookSelect.id}
                      defaultValue={bookSelect.defaultValue}
                      selected={bookSelect.selected}
                    >
                      {bookSelect.defaultValue}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="inputBox">
              <h3>Chúng tôi có :</h3>
              <input type="number" placeholder="Số người" min={2} />
            </div>
            <div className="inputBox">
              <h3>bắt đầu từ :</h3>
              <input type="date" />
            </div>
            <Link to="/commingsoon" className="btn">
              Tìm Ngay
            </Link>
          </form>
        </div>
      </section>
    );
  }
}
