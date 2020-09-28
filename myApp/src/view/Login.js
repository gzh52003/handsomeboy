import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
import CryptoJS from 'crypto-js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import userAction, { login } from '../store/action/user'
import { Toast, Grid, List, Checkbox, Flex, InputItem, WhiteSpace, Button, WingBlank } from 'antd-mobile';
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;
import { createForm } from 'rc-form';
import request from '../utils/request'
import store from '../store';
class Login extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            istrue: false,
            hasError: false,
            value: '',
            tp: [
                {
                    imgurl: "/img/qq.png",
                    text: 'QQ登录'
                }, {
                    imgurl: "/img/wechat.png",
                    text: '微信登录'
                }
            ],
        }
    }
    getVcode = async () => {
        const vcode = await request.get("/vcode")
        this.yan.innerHTML = vcode.data
    }
    async componentDidMount() {
        const data = store.getState()
        // console.log('最新的数据', data);
        // console.log('this.props', this.props);
        this.getVcode()
    }
    onChange = (val) => {
        this.setState({
            istrue: !this.state.istrue
        })
    }
    onErrorClick = () => {
        if (this.state.hasError) {
            Toast.info('请输入正确的手机号码');
        }
    }
    onUseChange = (value) => {
        if (value.replace(/\s/g, '').length) {
            console.log('进入');
          this.setState({
            hasError: true,
          });
          console.log(this.state.hasError);
        } else {
          this.setState({
            hasError: false,
          });
        }
        this.setState({
          value,
        });
    }
    reg = () => {
        this.props.history.replace("/reg")
    }
    handleClick = async () => {
        const username = this.ph.state.value
        const password = this.pas.state.value
        const mdl = this.state.istrue
        const vcode = this.vcode.state.value
        //加密
        // password = CryptoJS.SHA256(password)
        // password = CryptoJS.enc.Hex.stringify(password)
        // 发起请求
        const data = await request.get('/log', {
            username,
            password,
            mdl,
            vcode
        })
        if (data.code === 1) {
            this.props.history.push('/collect')
            this.props.login(data.data)
            Toast.success('恭喜你登录成功');
        } else {
            Toast.fail('请输入正确的内容');
        }
    }
    render() {
        const { tp, istrue } = this.state
        const { getFieldProps } = this.props.form;
        const data = tp.map((item) => {
            return item
        })
        return (
            <div style={{ backgroundColor: "transparen" }}>
                <NavBar style={{ height: "50px" }}
                    mode="light"
                    leftContent={[
                        <Icon type="left" />,
                        "返回"
                    ]}
                    onLeftClick={() => { window.history.back(-1) }}
                    rightContent={[
                        <span onClick={this.reg.bind(this)}>注册</span>
                    ]}
                >登录美食杰</NavBar>
                <div style={{ width: "100%", height: "15px", backgroundColor: "transparen" }}></div>
                <List >
                    <InputItem
                        clear
                        {...getFieldProps('phone')}
                        placeholder="手机号码/邮箱/用户名"
                        type='phone'
                        ref={el => this.ph = el}
                        error={this.state.hasError}
                        onChange={this.onUseChange}
                        onErrorClick={this.onErrorClick}
                        value={this.state.value}
                    ></InputItem>
                    <InputItem
                        {...getFieldProps('password')}
                        type="password"
                        placeholder="密码"
                        ref={el => this.pas = el}
                    ></InputItem>
                    <InputItem
                        placeholder="验证码"
                        ref={el => this.vcode = el}
                        extra={<span onClick={this.getVcode} ref={el => this.yan = el} style={{ display: 'inline-block', width: 140, height: 44 }} ></span>}
                    ></InputItem>
                    <List>
                        <CheckboxItem defaultChecked={istrue} onChange={this.onChange} ref={el => this.mdl = el} style={{ color: "red" }}>
                            七天免登录
                            </CheckboxItem>
                    </List>
                    <List.Item style={{ backgroundColor: "white", marginTop: 4 }}>
                        <div
                            style={{ marginLeft: 16, width: '90%', height: 44, lineHeight: 3, color: 'white', textAlign: 'center', backgroundColor: "#ff5151" }}
                            onClick={this.handleClick}
                        >
                            登录
            </div>
                    </List.Item>
                </List>
                <div style={{ paddingLeft: "100px", paddingRight: "90px", paddingTop: "10px", marginTop: "6px", backgroundColor: "transparen" }}>
                    <Grid data={data}
                        columnNum={2}
                        renderItem={dataItem => (
                            <div style={{ width: "80px" }}>
                                <img src={dataItem.imgurl} style={{ width: '60px', height: "60px" }} alt="" />
                                <div style={{ color: '#888', fontSize: '18px', marginTop: "2px" }}>
                                    <span>{dataItem.text}</span><br />
                                </div>
                            </div>
                        )}
                    />
                </div>
            </div>
        )
    }
}
Login = createForm()(Login);

const mapStateToProps = ({ currentUser }) => ({ currentUser })
const mapDispatchToProps = function (dispatch) {
    return bindActionCreators(userAction, dispatch)
}
Login = connect(mapStateToProps, mapDispatchToProps)(Login)

export default Login