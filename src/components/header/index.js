import React from "react";
import './index.css'
import {Redirect, withRouter} from 'react-router-dom'
import { Modal, Button, Space } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import LinkButton from "../link_button";
import { formateDate } from '../../utils/dateUtils'
import memoryutils from "../../utils/memoryutils";
import storageUtils from "../../utils/storageUtils";
import menuList from "../../config/menuConfig";
import { reqWeather} from '../../api/index'


class HeaderNav extends React.Component{

    state = {
        currentTime:formateDate(Date.now()),
        weather:''
    }

    getTitle = () => {
        const path = this.props.location.pathname
        let title
        menuList.forEach(item => {
            if (item.key === path){
                title = item.title
            }else if (item.children){
                const cItem = item.children.find(cItem => cItem.key === path)
                if (cItem){
                    title = cItem.title
                }
            }
        })
        return title
    }

    outLogin = () =>{
        Modal.confirm({
            icon: <ExclamationCircleOutlined />,
            content: '确定退出么',
            onOk:() =>{
                storageUtils.removeUser()
                memoryutils.user = {}
                this.props.history.replace('/login')
            }
        })
    }

    getTime = () => {
        this.IntervalId = setInterval(() => {
            const currentTime = formateDate(Date.now())
            this.setState({currentTime})
        },1000)
    }

    getWeather = async () =>{
        const {weather} = await reqWeather('上海')
        this.setState({weather})
    }

    componentDidMount() {
        this.getTime()
        // this.getWeather()
    }

    componentWillUnmount() {
        clearInterval(this.IntervalId)
    }

    render() {
        const {currentTime, weather} = this.state
        const username = memoryutils.user.username
        return (
            <div className='header'>
                <div className='header-top'>
                    <span>欢迎,{username}</span>
                    {/*<a href="#" onClick={this.outLogin}>退出</a>*/}
                    <LinkButton onClick={this.outLogin} className='link-button'>退出</LinkButton>
                </div>
                <div className='header-bottom'>
                    <div className='header-bottom-left'>
                        {this.getTitle()}
                    </div>
                    <div className='header-bottom-right'>
                        <span className='header-bottom-right-time'>{currentTime}</span>
                        <img src="" alt=""/>
                        <span>{weather}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(HeaderNav)