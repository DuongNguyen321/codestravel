import React from "react";
export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      contactHeading: [],
    };
  }

  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/home")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            contactHeading: result.contactHeading,
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
      <section className="contact" id="contact">
        <h1 className="heading">
          {this.state.contactHeading.map((contactHeading) => {
            return (
              <span
                key={contactHeading.id}
                className={contactHeading.className}
              >
                {contactHeading.text}
              </span>
            );
          })}
        </h1>
        <div className="row">
          <div className="image">
            <iframe
              title="Địa chỉ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.4064000497674!2d105.78126121547308!3d20.976340386026827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acd2d89877d7%3A0xe55435164e9b4695!2zMTk3IFRy4bqnbiBQaMO6LCBQLiBWxINuIFF1w6FuLCBIw6AgxJDDtG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1639249145111!5m2!1svi!2s"
              width="100%"
              height="350vh"
            ></iframe>
          </div>
          <form action="">
            <div className="inputBox">
              <input type="text" placeholder="Tên của bạn" />
              <input type="email" placeholder="Email liên hệ" />
            </div>
            <div className="inputBox">
              <input
                type="text"
                placeholder="Số điện thoại"
                minLength={9}
                maxLength={11}
              />
              <input type="text" placeholder="Vấn đề bạn cần trao đổi" />
            </div>
            <textarea
              placeholder="Viết lời nhắn của bạn"
              name="contact"
              cols="30"
              rows="10"
            ></textarea>
            <input
              type="submit"
              className="btn"
              name="send"
              value="Gửi tới chúng tôi"
            />
          </form>
        </div>
      </section>
    );
  }
}
