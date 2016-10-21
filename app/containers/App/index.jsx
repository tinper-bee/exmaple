import React, { Component } from 'react';
import { Button, InputGroup, FormControl, ControlLabel } from 'tinper-bee';


import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className='u-container'>
        <div className='u-row'>
            <div className='u-col-md-4 u-col-md-offset-4 border'>
                <div className='u-col-md-12 margin-20'>
                    <FormControl  placeholder="请输入用户名" onChange={this.HanderChange} />

                </div>
                <div className='u-col-md-12 margin-20'>
                    <FormControl placeholder="请输入密码" onChange={this.HanderChange} />
                </div>
                <div className='u-col-md-12 margin-20'>
                    <div className='u-col-md-4'>
                        <Button type="primary">登陆</Button>
                    </div>
                    <div className='u-col-md-4'>
                        <Button type="success">注册</Button>
                    </div>

                </div>
        </div>
    </div>
</div>
    );
  }
}

export default App;
