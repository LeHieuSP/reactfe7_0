import React, { Component } from "react";
import "./style.css";
import style from "./Style.module.css";

export default class StyleComponent extends Component {


  render() {

    // const styleObject = {
    //     backgroundColor: 'black',
    //     color: 'green'
    // };
    return (
      <div>
        <p className="pColorRed">hello fe70</p>
        <p className={style.pColorGreen}>hello fe70</p>
        <p className={style["p-color-blue"]}>hello fe70</p>
        {/* nếu sai cú pháp thì dùng cách ['...'] */}
        <p style={{backgroundColor: 'black',
     color: 'green'}}></p>
     {/* cách này dùng css cho từng dòng. và kiểu này là nó nhận vào object {} */}
      </div>
    );
  }
}
