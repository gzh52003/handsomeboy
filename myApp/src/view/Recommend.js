import React from 'react'
import { Grid, Tag, Tabs, WhiteSpace, Badge, Carousel, WingBlank, SearchBar } from 'antd-mobile';
class Recommend extends React.Component {
    state = {
        imgHeight: 285,
        tp: [
            {
                imgurl: "/img1/s2378886_157849275739320.jpg",
                text: '鸡蛋葱花饼'
            }, {
                imgurl: "/img1/s3324407_157848572121201.jpg",
                text: '一个人也要好好的'
            }
        ],
        tps: [
            {
                imgurl: "/img1/s2378886_157849275739320.jpg",
                text: '鸡蛋葱花饼'
            }, {
                imgurl: "/img1/s3324407_157848572121201.jpg",
                text: '一个人也要好好的'
            },
            {
                imgurl: "/img1/s2378886_157849275739320.jpg",
                text: '鸡蛋葱花饼'
            }, {
                imgurl: "/img1/s3324407_157848572121201.jpg",
                text: '一个人也要好好的'
            },
            {
                imgurl: "/img1/s2378886_157849275739320.jpg",
                text: '鸡蛋葱花饼'
            }, {
                imgurl: "/img1/s3324407_157848572121201.jpg",
                text: '一个人也要好好的'
            },
            {
                imgurl: "/img1/s2378886_157849275739320.jpg",
                text: '鸡蛋葱花饼'
            }, {
                imgurl: "/img1/s3324407_157848572121201.jpg",
                text: '一个人也要好好的'
            },
            {
                imgurl: "/img1/s2378886_157849275739320.jpg",
                text: '鸡蛋葱花饼'
            }, {
                imgurl: "/img1/s3324407_157848572121201.jpg",
                text: '一个人也要好好的'
            }
        ],
        tabs: [
            { title: <Badge >早餐</Badge> },
            { title: <Badge text={'赞'}>午餐</Badge> },
            { title: <Badge dot>下午茶</Badge> },
            { title: <Badge >晚餐</Badge> },
            { title: <Badge >夜宵</Badge> },
        ],
        tas: [
            { title: <Badge >推荐</Badge> },
            { title: <Badge text={'赞'}>时令</Badge> },
            { title: <Badge dot>食肉</Badge> },
            { title: <Badge >素食</Badge> },
            { title: <Badge >烘培</Badge> },
        ],
        imgs: [
            "/img/banner01.jpg",
            "/img/banner02.jpg",
            "/img/banner03.jpg"
        ],
        lit: [
            {
                icon: 'iconfont icon-tuijian1',
                text: '每日推荐'
            },
            {
                icon: 'iconfont icon-tuijian1',
                text: '食材大全'
            },
            {
                icon: 'iconfont icon-tuijian1',
                text: '热门专题'
            },
            {
                icon: 'iconfont icon-tuijian1',
                text: '菜谱分类'
            },
            {
                icon: 'iconfont icon-tuijian1',
                text: '本周流行'
            },
            {
                icon: 'iconfont icon-tuijian1',
                text: '视频菜谱'
            }
        ],
        imgss: [
            "./img1/20200918172823_468.jpg",
            "./img1/20200921021129_785.jpg",
            "./img1/20200922004846_814.jpg"
        ]
    };
    clear = () => {
        this.setState({ value: '' });
    };
    handleClick = () => {
        this.manualFocusInst.focus();
    }
    render() {
        const { imgs, imgHeight, lit, tabs, tp, imgss,tas,tps } = this.state
        const data = tp.map((item) => {
            return item
        });
        const data1 = tps.map((item) => {
            return item
        });
        return (
            <div className="remcommen">
                <SearchBar
                    placeholder="搜索百万免费菜谱"
                    ref={ref => this.manualFocusInst = ref}
                    onFocus={() => console.log('onFocus')}
                />
                <div className="down">
                    <span className="txt">今日更新</span>
                </div>
                <WingBlank className="win" >
                    <Carousel
                        dots={false}
                        autoplay={false}
                        infinite
                        cellSpacing={10}
                        slideWidth={0.8}
                    >
                        {imgs.map(val => (
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{
                                    display: 'inline-block', width: '100%', height: { imgHeight }, borderRadius: "25px"
                                }}
                            >
                                <img
                                    src={val}
                                    alt=""
                                    style={{ width: '100%', height: "285px", verticalAlign: 'top', borderRadius: "25px" }}
                                    onLoad={() => {
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                <div className="down down1">
                    <i className="txt">为你推荐</i>
                </div>
                <div className="tag-container">
                    <Tag style={{ backgroundColor: "pink", color: "white" }}>
                        <i style={{ color: "white" }} className="iconfont icon-tuijian
ico" ></i>
                    每日推荐
                    </Tag>
                    <Tag >
                        <i className="iconfont icon-HOMEMESSAGE
ico"></i>
                    食材大全
                    </Tag>
                    <Tag>
                        <i className="iconfont icon-tuijian1 ico"></i>
                    热门专题
                    </Tag>
                    <Tag>
                        <i className="iconfont icon-fenlei ico"></i>
                    菜谱分类
                    </Tag>
                    <Tag>
                        <i className="iconfont icon-tuijian1 ico"></i>
                    本周流行
                    </Tag>
                    <Tag>
                        <i className="iconfont icon-26 ico"></i>
                    视频菜谱
                    </Tag>

                </div>
                <h6 className="txt2">每日三餐</h6>
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', 123); }}
                    onTabClick={(tab, index) => {
                        switch (index) {
                            case 0:
                                console.log("早餐", tab);
                                return 0
                            case 1:
                                console.log("午餐");
                                return 1
                            case 2:
                                console.log("下午茶");
                                return 2
                            case 3:
                                console.log("晚餐");
                                return 3
                            case 4:
                                console.log("夜宵");
                                return 4
                            default:
                                console.log('啊啊');
                        }
                    }}
                >
                    <div style={{ marginTop: "-6px", height: "335px", }}>
                        <Grid data={data}
                            columnNum={2}
                            renderItem={dataItem => (
                                <div >
                                    <img src={dataItem.imgurl} style={{ width: '170px', height: "214px" }} alt="" />
                                    <div style={{ color: '#888', fontSize: '18px', marginTop: "2px" }}>
                                        <span>{dataItem.text}</span><br />
                                        <div >
                                            <span style={{ display: "block", width: "16px", height: "14px", backgroundColor: "#ff8d8d", fontSize: "14px", lineHeight: "14px", color: "white" }}>养</span>
                                            <span style={{ display: "block", height: "18px", fontSize: "14px", color: "#ff8d8d", marginLeft: "-50px", fontWeight: "bold" }}>美味可口,营养丰富</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                    </div>
                    {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        午餐
      </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        下午茶
      </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        晚餐
      </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        夜宵
      </div> */}
                </Tabs>
                <WhiteSpace />
                <WingBlank >
                    <Carousel
                        style={{ marginTop: "-40px", height: "143px", backgroundColor: "red" }}
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                        {imgss.map(val => (
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={val}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top', height: "143px" }}
                                    onLoad={() => {
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                <h6 className="txt2"style={{marginTop:"20px"}}>大家都在做</h6>

                <Tabs tabs={tas}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', 123); }}
                    onTabClick={(tab, index) => {
                        switch (index) {
                            case 0:
                                console.log("早餐", tab);
                                return 0
                            case 1:
                                console.log("午餐");
                                return 1
                            case 2:
                                console.log("下午茶");
                                return 2
                            case 3:
                                console.log("晚餐");
                                return 3
                            case 4:
                                console.log("夜宵");
                                return 4
                            default:
                                console.log('啊啊');
                        }
                    }}
                >
                    <div style={{ marginTop: "-6px", height: "1540px", }}>
                        <Grid data={data1}
                            columnNum={2}
                            renderItem={dataItem => (
                                <div >
                                    <img src={dataItem.imgurl} style={{ width: '170px', height: "214px" }} alt="" />
                                    <div style={{ color: '#888', fontSize: '18px', marginTop: "2px" }}>
                                        <span>{dataItem.text}</span><br />
                                        <div >
                                            <span style={{ display: "block", width: "16px", height: "14px", backgroundColor: "#ff8d8d", fontSize: "14px", lineHeight: "14px", color: "white" }}>养</span>
                                            <span style={{ display: "block", height: "18px", fontSize: "14px", color: "#ff8d8d", marginLeft: "-50px", fontWeight: "bold" }}>美味可口,营养丰富</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                    </div>
                </Tabs>
            </div>);
    }
}
export default Recommend