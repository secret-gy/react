import React from "react";
import axios from 'axios'
import { Card,Button,Table,message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {reqCategorys} from '../../api/index'
import LinkButton from "../../components/link_button";
export default class Category extends React.Component{

    state = {
        categorys:[],
    }

    initColumns = () => {
        this.columns = [
            {
                title: '家用电器',
                dataIndex: 'name',
            },
            {
                title: '操作',
                width:300,
                render: () => (
                    <span>
                        <LinkButton>修改分类</LinkButton>
                        <LinkButton>查看子类</LinkButton>
                    </span>
                )
            }

        ];
    }

    getcategrorys = async () =>{

        // const result = await axios.get('http://localhost5000/manage/category/list?parentId=0')
        // console.log(result)
       const result = await reqCategorys('0')
        if(result.status===0){
            const categorys = result.data
            this.setState({
                categorys
            })
        }else {
            console.log(result)
            message.error('获取列表失败')
        }
    }


    componentWillMount() {
        this.initColumns()
    }

    componentDidMount() {
        this.getcategrorys()
    }

    render() {
        const {categorys} = this.state
        const title = '一级分类列表'
        const  extra = (
            <Button type="primary">
                <PlusOutlined />
                添加
            </Button>
        )
        return (
            <Card title={title} extra={<a href="#">{extra}</a>} >
                <Table bordered dataSource={categorys} columns={this.columns} />
            </Card>

        );
    }
}