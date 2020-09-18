import React from "react";
import { Link, withRouter } from 'react-router-dom'
import './index.css'
import logo from '../../assets/images/timgg.png'
import menuList from "../../config/menuConfig";

import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;


class LeftNav extends React.Component{
    getMenuNodes = (menuList) =>{
        const path = this.props.location.pathname
        return menuList.map(item => {
            if (item.children){
                // const openKey = item.children.key===path?path:item.key
                // this.openKey = openKey

                const cItem = item.children.find(cItem => cItem.key===path)
                if (cItem){
                    this.openKey = item.key
                }

                return(
                    <SubMenu key={item.key} icon={<MailOutlined />} title={item.title}>
                        {/*<Menu.Item key={item.key} icon={<MailOutlined />}>*/}
                        {/*    <Link to={item.key}>*/}
                        {/*        <span>{item.title}</span>*/}
                        {/*    </Link>*/}
                        {/*</Menu.Item>*/}
                        {/*<Menu.Item key={item.key} icon={<MailOutlined />}>{item.title}</Menu.Item>*/}
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                )
            }else {
                return (
                    <Menu.Item key={item.key} icon={<PieChartOutlined />}>
                        <Link to={item.key}>{item.title}</Link>
                    </Menu.Item>
                )
            }
        })
    }

    // componentDidMount() {
    //     this.menuNodes = this.getMenuNodes(menuList)
    // }

    render() {
        const menuNodes = this.getMenuNodes(menuList)
        const path = this.props.location.pathname
        // console.log(path)
        // const path = ''
        const openkey = this.openKey
        return (
            <div className='left-nav'>
                <Link to='/' className='left-nav-header'>
                    <img src={logo} alt=""/>
                    <h1>硅谷后台</h1>
                </Link>

                <Menu
                    mode="inline"
                    theme="dark"
                    selectedKeys={[path]}
                    defaultOpenKeys={[openkey]}
                >
                    {/*<Menu.Item key="1" icon={<PieChartOutlined />}>*/}
                    {/*    <Link to='/'>首页</Link>*/}
                    {/*</Menu.Item>*/}
                    {/*<SubMenu key="sub1" icon={<MailOutlined />} title="商品">*/}
                    {/*    <Menu.Item key="2" icon={<MailOutlined />}>*/}
                    {/*        <Link to='/category'>*/}
                    {/*            <span>品类管理</span>*/}
                    {/*        </Link>*/}
                    {/*    </Menu.Item>*/}
                    {/*    <Menu.Item key="3" icon={<MailOutlined />}>商品管理</Menu.Item>*/}
                    {/*</SubMenu>*/}

                    {menuNodes}

                </Menu>
            </div>

        );
    }
}

export default withRouter(LeftNav);