import React, { Component } from "react";

export default class RenderWithMap extends Component {
  arrProduct = [
    {
      id: 1,
      name: "iphone",
      price: 1000,
      img: "https://picsum.photos/id/1/200",
    },
    {
      id: 1,
      name: "iphone xs",
      price: 2000,
      img: "https://picsum.photos/id/2/200",
    },

    {
      id: 1,
      name: "iphone xs max",
      price: 3000,
      img: "https://picsum.photos/id/3/200",
    },
  ];

  renderProduct = () => {
    // Cách 1
    /*[tr tr tr] */
    // let arrTagProduct = [];
    // for (let prod of this.arrProduct) {
    //     let obTrJSX = <tr>
    //         <td>{prod.id}</td>
    //         <td>{prod.name}</td>
    //         <td>{prod.price}</td>
    //         <td><img src={prod.img} width = {50} alt='...'/></td>

    //     </tr>;

    //     arrTagProduct.push(obTrJSX);
    // }
    // return arrTagProduct;

    // Cách 2:
    let arrTagJSX = this.arrProduct.map((product, index) => {
      //product là mình tự đặt tên j cũng được
      return (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img src={product.img} width={50} alt="..." />
          </td>
        </tr>
      );
    });

    return arrTagJSX;
  };

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <td>id</td>
              <td>name</td>
              <td>price</td>
              <td>img</td>
            </tr>
          </thead>
          <tbody>
            {/* [<tr></tr>] */}
            {this.renderProduct()}
          </tbody>
        </table>
      </div>
    );
  }
}


// Map dùng để biến đổi mảng này thành mảng kia, mảng object thành mảng jsx, hoặc cắt bớt thuộc tính của mảng.

// => miễn là trả về gaio diện các mảng đồng cấp với nhau la ok.