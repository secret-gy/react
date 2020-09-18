import React from "react";
import { withRouter } from 'react-router'
import memoryutils from "../../utils/memoryutils";
import {Redirect,Route,Switch,BrowserRouter} from 'react-router-dom'
import { Layout } from 'antd';
import HeaderNav from "../../components/header";
import LeftNav from "../../components/left_nav";
import Category from "../category/category";
import Bar from "../charts/bar";
import User from "../user/user";
import Product from "../product/product";
import Line from "../charts/line";
import Pie from "../charts/pie";
import Home from "../home/home";


const { Header, Footer, Sider, Content } = Layout;

export default class Admin extends React.Component{
    render() {
        const user = memoryutils.user
        if (!user || !user._id){
            return <Redirect to='/login'/>
        }
        return (
            <Layout style={{height:'100%'}} >
                <Sider>
                    <LeftNav />
                </Sider>
                <Layout>
                    <HeaderNav style={{backgroundColor:'white',padding:0}} >heard</HeaderNav>
                    {/*<header>header</header>*/}
                    <Content style={{margin: 20, backgroundColor: '#fff'}}>
                        <Switch>
                            <Route path='/home' component={Home}/>
                            <Route path="/category" component={Category}/>
                            <Route path='/product' component={Product}/>
                            <Route path='/user' component={User}/>
                            <Route path='/bar' component={Bar}/>
                            <Route path='/line' component={Line}/>
                            <Route path='/pie' component={Pie}/>
                            <Redirect to='/home' component={Home}/>
                        </Switch>
                    </Content>
                    <Footer style={{textAlign:'center', color:'#cccccc'}}>推荐使用谷歌浏览器</Footer>
                </Layout>
            </Layout>
        );
    }
}

