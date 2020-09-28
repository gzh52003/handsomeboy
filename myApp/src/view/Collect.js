import React from 'react'
import { List, Grid, Flex, Card, WingBlank, WhiteSpace } from 'antd-mobile';

class collect extends React.Component {
    state = {
        imgHeight: 285,
        tp: ["/img/sousuo.png", "/img/sousuo.png", "/img/sousuo.png", "/img/sousuo.png", "/img/sousuo.png", "/img/sousuo.png", "/img/sousuo.png"],
        tps: "/img1/20200918172823_468.jpg",
    }
    render() {
        const { tps, tp } = this.state
        const Item = List.Item;
        const Brief = Item.Brief;
        return (
            <div>
                <WingBlank style={{ marginLeft: -40, width: 369, paddingLeft: 40 }}>
                    <Card className="cart">
                        <Card.Header
                            style={{  marginLeft: 20 }}
                            title={<div style={{ paddingLeft: 8 }}><dd style={{ marginLeft: -2, marginBottom: 6, fontSize: 16, color: "white" }}>腾飞(￣︶￣)↗</dd><span style={{ marginLeft: -2, color: "white", fontSize: 12 }}>正在通往美食达人的路上...</span><br /><dd style={{ backgroundColor: "rgba(255,255,255,0.2)", marginLeft: -2, marginTop: 18, width: 110, height: 20, textAlign: "center", borderRadius: 5, paddingTop: 4, color: "white", fontSize: 12 }}>美食杰DNA 0条 > </dd></div>}
                            thumb={tps}
                            thumbStyle={{ width: "72px", height: "72px", borderRadius: "50%" }}
                        />
                    </Card>
                </WingBlank>
                <div>
                    <Flex justify="center" style={{ paddingLeft: 55, height: 50, backgroundColor: "white" }}>
                        <Flex.Item style={{ color: "#999" }}><span style={{ color: "red" }}>0</span> 关注</Flex.Item>
                        <Flex.Item style={{
                            color: "#999"
                        }}><span style={{ color: "red" }}>0</span> 粉丝</Flex.Item>
                        <Flex.Item style={{ color: "#999" }}><span style={{ color: "red" }}>0</span> 菜谱</Flex.Item>
                    </Flex>
                </div>
                <div style={{ backgroundColor: "white", height: 80 }}>
                    <h3 style={{ color: "#333", fontSize: 16,marginLeft:15 }}>荣耀勋章</h3>
                    <div style={{ marginTop: "-6px",marginLeft:5 }}>
                        <Grid data={tp}
                            columnNum={7}
                            renderItem={dataItem => (
                                <div>
                                    <img src={dataItem} style={{ width: '38px', height: "35px", }} alt="" />
                                </div>
                            )}
                        />
                    </div>
                </div>
                <List style={{ marginTop: -20 }}>
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        arrow="horizontal"
                        onClick={() => { }}
                        extra="免费兑换"
                    >积分商城</Item>
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                        onClick={() => { }}
                        arrow="horizontal"
                    >
                        消息通知
        </Item>
        <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        arrow="horizontal"
                        onClick={() => { }}
                    >我的发布</Item>
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                        onClick={() => { }}
                        arrow="horizontal"
                    >
                       我的收藏
        </Item>
        <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                        onClick={() => { }}
                        arrow="horizontal"
                    >
                        关于我们
        </Item>
                </List>
            </div>
        )
    }

}
export default collect