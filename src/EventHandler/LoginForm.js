import React, { Component } from 'react'

export default class LoginForm extends Component {
  
    /*
    State: là thuộc tính có sẵn của react class component, chứa cac giá trị thay đổi trên giao
    diện khi người dùng thao tác 

    setState : là phương thức có sẵn của react class component. Nhẫn vào tham số là 1 state mới.
    + Thay đổi các giá trị của state = state mới.
    + render lại giao diện
    + setState là 1 phương thức bất đồng bộ.

    */
    
    state = { // state là 1 object, nên đưa login vào sẽ là 1 thuôc5 tính.
        login : false
    }


    userName = 'nguyễn văn A';
  
    renderFormLogin = function () {
        if (this.state.login ) {
            return <div>
                hello {this.userName}
            </div>
        }
        return <button onClick={this.handleLogin}>Đăng nhập</button>
    }
        handleLogin = async () => { 
            // dùng arrow function vì trong đây dùng this nhiều, để loại bỏ ngữ cảnh con trỏ this trong fucntion.
            await this.setState({
                login : true
            })
                console.log(this.state.login);
            
        }
        /* quan trọng : setState : được gọi la hàm bất đồng bộ , vì sao ?
        
        vì khi : vd ở trên : this.setState({
                login : true
            }) => khi dòng này nó chạy, thì mấy dòng phía sau nó không đợi thằng này nó chạy xong.
            mà nó vẫn chạy tiếp bình thường.
        
            => thi khi đó mình dùng async await để nó chay theo thứ tự. 
            this.setState({
                login : true
            })     => thằng này nó sẽ chạy trước, rồi sau đó mới tới lệnh này 
              console.log(this.state.login);
        
        
        
        */ 





    render() {
    return (
      <div className='container'>
          
        {/* {this.login ? <div>Hello {this.userName}</div> : <button> Đăng nhập</button>} */}
{/* Giải thích : 
    dấu ? là dấu === : ? nghĩa là nếu điều này là đúng thì render ra hello userName.
    còn nếu sai ":" thì render button đăng nhập.

*/}

{/* nếu nội dung dài thì dùng cách này : */}

    {this.renderFormLogin()}








      </div>
    )
  }
}
