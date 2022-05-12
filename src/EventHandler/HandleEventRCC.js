import React, { Component } from "react";

export default class HandleEventRCC extends Component {
  // Hàm mà định nghĩa trong lớp đối tượng như thế này thì nó là thuộc tính.
  // thì fai dùng this. để truy xuất đến thuộc tính

  showMess = function () {
    alert("hello hello");
  };

  showInfo = function (name) {
    alert("hello " + name);
  };

  render() {
    // trong render() thì gọi là trong phương thức, vậy nên cần phải khai báo biến vd như const ,let,..

    const handleClick = function () {
      console.log(123);
    };

    return (
      <div className="container">
        <button id="btnShowMess" onClick={handleClick}>
          show message
        </button>
        {/* // không đóng mở ngoặc () tại hàm showMess vì như vậy chưa click thì nó đã gọi hàm. */}

        <button onClick={this.showInfo.bind(this, "Hiếu")}>Click me</button>
        {/* (this,'Hiếu') : this là tham số thứ 1 nghĩa là hàm showInfo
            Hiếu là tham số thứ 2 la tham số của hàm đó.
         */}

        <button
          onClick={() => {
            this.showInfo("Hiếu");
          }}
        >
          Click me !
        </button>
        {/* cách dùng arrow function này :
            + là hiểu là dùng hàm chưa gọi để bao bọc các hàm đã gọi, thì khi đó mình click vào thì
            nó sẽ gọi các hàm đã gọi ở trong.
            + và chứa bao nhiêu hàm ở trong cũng được. n hàm.
         
         */}
      </div>
    );
  }
}
