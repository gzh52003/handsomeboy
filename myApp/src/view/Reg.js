import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { Toast, Grid, List, InputItem, WhiteSpace, Button, WingBlank } from 'antd-mobile';
import { createForm } from 'rc-form';
import request from '../utils/request'
class Reg extends React.Component {
    state = {
        num: -1,
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
    handleClick = async () => {
        const username = this.use.state.value
        const password = this.pas.state.value
        const yan = this.yan.state.value
        if(username!==''){
            const code=await request.get('/reg/checkvcode',{
                username,
                yan
            })
            if(code.code===1){
                console.log('验证码正确');
                const data = await request.post('/reg', {
                    username,
                    password,
                })
                if (data.code === 1) {
                    this.props.history.push('/login')
                    Toast.success('恭喜你注册成功');
                }
            }else{
                Toast.info('验证码错误');
            }
        }else{
            Toast.info('请输入手机号码');
        }
       
    }
    onErrorClick = () => {
        if (this.state.hasError) {
            Toast.info('请输入正确的手机号码');
        }
    }
    onUseChange = async (value) => {
        const username = this.use.state.value
        if (value.replace(/\s/g, '').length <11) {
            this.setState({
                hasError: true,
            });
        } else {
            console.log("名字",username);
            this.setState({
                hasError: false,
            });
            const data = await request.get("/reg/check", {
                username
            })
            if (data.code === 0) {
                Toast.info('手机号码已经存在了');
            } else {
                Toast.info('手机号码可以注册');
            }
        }
        this.setState({
            value,
        });
    }
    log = () => {
        this.props.history.replace("/login")
    }
    getvcode = async (ev) => {
        const chu = this.use.state.value
       const phone=chu.replace(/\s/g, '')
        console.log('手机号码', phone);
        if (phone !== '') {
            ev.target.disabled = true;
            const  data  = await request.get("/phonecheck/check/", { phone })
            console.log('数据', data);
            this.setState({
                num: 60
            });
            let times = 0;
            let timer = setInterval(async () => {
                this.setState({
                    num: this.state.num - 1
                });
                times++;
                if (times == 60) {
                    console.log('点击',ev.currenttarget)
                    ev.target.disabled = false;
                    this.setState({
                        num: -1
                    });
                    clearInterval(timer);
                }
            }, 1000);
        } else {
            Toast.info('请输入手机号码');
        }
    }
    render() {
        const { tp } = this.state
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
                        <span onClick={this.log.bind(this)}>登录</span>
                    ]}
                >注册美食杰</NavBar>
                <div style={{ width: "100%", height: "15px", backgroundColor: "transparen" }}></div>
                <WingBlank >
                    <Button style={{ lineHeight: "30px", height: "30px", fontSize: "14px" }} type="warning" >手机注册</Button><WhiteSpace />
                </WingBlank>
                <List >
                    <InputItem
                        type="phone"
                        placeholder="手机号码/邮箱/用户名"
                        extra={<button onClick={this.getvcode.bind(this)} style={{ textAlign: "center", height: 80, fontSize: 16, width: 100, marginTop: -18, border: "none", backgroundColor: "#e94f4f", color: "white" }}>{this.state.num > 0 ? '倒计时' + this.state.num + '秒' : '获取验证码'}</button>}
                        ref={el => this.use = el}
                        error={this.state.hasError}
                        onChange={this.onUseChange}
                        onErrorClick={this.onErrorClick}
                        value={this.state.value}
                        editable={true}
                    ></InputItem>

                    <InputItem
                        {...getFieldProps('password')}
                        type="password"
                        placeholder="密码"
                        ref={el => this.pas = el}
                    ></InputItem>
                    <InputItem
                        type="digit"
                        placeholder="验证码"
                        ref={el => this.yan = el}
                    ></InputItem>
                </List>
                <WhiteSpace />
                <List.Item style={{ backgroundColor: "white" }}>
                    <div
                        style={{ marginLeft: 16, width: '90%', height: 44, lineHeight: 3, color: 'white', textAlign: 'center', backgroundColor: "#ff5151" }}
                        onClick={this.handleClick}
                    >
                        注册
            </div>
                </List.Item>

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
Reg = createForm()(Reg);
export default Reg