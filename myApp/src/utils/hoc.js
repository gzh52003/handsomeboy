//高阶组件
import React from 'react'
import { Redirect } from 'react-router-dom'
//应用一：属性代理
export function withUser(InnerComponent) {
    //函数组件
    // return function OuterComponent(props){
    //     return (
    //         <InnerComponent {...props}currentUser={currenUser}/>
    //     )
    // }
    //类名组件
    return class OuterComponent extends React.Component {
        render() {
            let currentUser = localStorage.getItem('currentUser')
            try {
                currentUser = JSON.parse(currentUser)
            } catch (err) {
                currentUser = currentUser
            }
            if (!currentUser) {
                currentUser = {}
            }
            return (
                <InnerComponent {...this.props} currentUser={currentUser} />
                //  {...this.props} 等效与 history={this.props.history} location={this.props.location}
                //props里面有history、location、match
            )
        }
    }
}
export function withStrorage(key) {
    const value = localStorage.getItem(key)
    const data = {
        //字符串作为变量的时候用[]
        [key]: value
    }
    return function (InnerComponent) {
        return function OuterComponent(props) {
            return <InnerComponent {...props}{...data} />
        }
    }
}
//应用二：反向继承==》可以实现路由拦截
export function withAuth(InnerComponent) {
    return class OuterComponent extends InnerComponent {
        // constructor(props){
        //     super(props)
        // }
        //页面挂载完之后
        componentDidMount() {
            console.log('OuterComponent')
            //super指的是父类，这里是调用父类的生命周期函数，使之不被覆盖，就是那个props里面的三个方法，不被后面的覆盖
            super.componentDidMount()
        }
        render() {
            console.log('OuterComponent.props=', this.props)
            //根据条件是否渲染InnerComponent
            if (this.props.currentUser.username) {
                return super.render()
            }
            // return <div>未登录无法访问</div>
            return <Redirect to='./login' />
        }
    }
}
export default{
    withUser,
    withStrorage,
    withAuth
}