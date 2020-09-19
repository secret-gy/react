import React from "react";
import { Card,Select,Button,Input,Table } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import product from "./product";
import LinkButton from "../../components/link_button";
export default class ProductHome extends React.Component{
    state = {
        dataSource:[],
    }

    componentWillMount() {
        this.columns = [
            {
                title: '商品名称',
                dataIndex: 'name',
            },
            {
                title: '商品描述',
                dataIndex: 'desc',
            },
            {
                title: '价格',
                dataIndex: 'price',
                render: price => '$' + price,
            },
            {
                title: '状态',
                dataIndex: 'status',
                render: (status) => {
                    if (status === 1){
                        return (
                            <div>
                                <Button type="primary">下架</Button>
                                <span>在售</span>
                            </div>
                        )
                    }
                }
            },
            {
                width:200,
                title: '操作',
                render: product => {
                    return(
                        <div>
                            <LinkButton>详情</LinkButton>
                            <LinkButton>修改</LinkButton>
                        </div>
                    )
                }
            },
        ];
    }

    render() {
        const {Option} = Select
        const title = (
            <span>
                <Select defaultValue="1">
                    <Option value="1">按名称搜索</Option>
                    <Option value="2">按描述搜索</Option>
                </Select>
                <Input placeholder="关键字" style={{width:150, margin:"0 15px"}} />
                <Button type="primary">
                搜索
                </Button>
            </span>
        )

        const extra = (
            <Button type="primary">
                <PlusOutlined />
                添加商品
            </Button>
        )

        const dataSource = [
            {
                status:1,
                _id:"123jkhjkafs12341384asdfaksfh",
                name:"华硕(ASUS) 飞行堡垒",
                desc:"超大电影屏幕",
                price:6900,
                pCategoryId:"zxcvuadfkjasdbfjkashfuhzxkcvbjaksdf",
                categoryId:"afhasdfkalkdfjlaksjdfl1aksjdf"
            },
            {
                status:1,
                _id:"fasdfsgasd5a56f465as4df6a4sdfasf",
                name:"机械革命",
                desc:"15.6英寸窄边框游戏笔记本电脑",
                price:6900,
                pCategoryId:"asdfasdf213a12f5646",
                categoryId:"qewrqwersdfasdfasfa2aksjdf"
            },
            {
                status:1,
                _id:"123jkhjkafs123413184asd222faksfh",
                name:"华硕(ASUS) 飞行堡垒",
                desc:"超大电影屏幕",
                price:6900,
                pCategoryId:"zxcvuadfkjasdbfjkashfuhzxkcvbjaksdf",
                categoryId:"afhasdfkalkdfjlaksjdfl3aksjdf"
            },
            {
                status:1,
                _id:"fasdfsgasd15a56f465as4df6a4sdfasf",
                name:"机械革命",
                desc:"15.6英寸窄边框游戏笔记本电脑",
                price:6900,
                pCategoryId:"asdfasdf213a12f5646",
                categoryId:"qewrqwersdfasdfasfa;aksjdf"
            },
            {
                status:1,
                _id:"123jkhjkafs123413184asdfaksfh",
                name:"华硕(ASUS) 飞行堡垒",
                desc:"超大电影屏幕",
                price:6900,
                pCategoryId:"zxcvuadfkjasdbfjkashfuhzxkcvbjaksdf",
                categoryId:"afhasdfkalkdfjlaksjdfl;aksjdf"
            },
            {
                status:1,
                _id:"fasdfsgas1d5a56f465as4df6a4sdfasf",
                name:"机械革命",
                desc:"15.6英寸窄边框游戏笔记本电脑",
                price:6900,
                pCategoryId:"asdfasdf213a12f5646",
                categoryId:"qewrqwersdfasdfasfa;aksjdf"
            },
            {
                status:1,
                _id:"123jkhjkafs12341384a1sdfaksfh",
                name:"华硕(ASUS) 飞行堡垒",
                desc:"超大电影屏幕",
                price:6900,
                pCategoryId:"zxcvuadfkjasdbfjkashfuhzxkcvbjaksdf",
                categoryId:"afhasdfkalkdfjlaksjdfl;aksjdf"
            },
            {
                status:1,
                _id:"fasdfsgasd51a56f465as4df6a4sdfasf",
                name:"机械革命",
                desc:"15.6英寸窄边框游戏笔记本电脑",
                price:6900,
                pCategoryId:"asdfasdf213a12f5646",
                categoryId:"qewrqwersdfasdfasfa;aksjdf"
            },
            {
                status:1,
                _id:"123jkhjkafs12341384as1dfaksfh",
                name:"华硕(ASUS) 飞行堡垒",
                desc:"超大电影屏幕",
                price:6900,
                pCategoryId:"zxcvuadfkjasdbfjkashfuhzxkcvbjaksdf",
                categoryId:"afhasdfkalkdfjlaksjdfl;aksjdf"
            },
            {
                status:1,
                _id:"fasdfsgasd5a56f4165as4df6a4sdfasf",
                name:"机械革命",
                desc:"15.6英寸窄边框游戏笔记本电脑",
                price:6900,
                pCategoryId:"asdfasdf213a12f5646",
                categoryId:"qewrqwersdfasdfasfa;aksjdf"
            },
            {
                status:1,
                _id:"1213jkhjkafs12341384asdfaksfh",
                name:"华硕(ASUS) 飞行堡垒",
                desc:"超大电影屏幕",
                price:6900,
                pCategoryId:"zxcvuadfkjasdbfjkashfuhzxkcvbjaksdf",
                categoryId:"afhasdfkalkdfjlaksjdfl;aksjdf"
            },
            {
                status:1,
                _id:"123413184a3sfhas4df6a4sdfasf",
                name:"机械革命",
                desc:"15.6英寸窄边框游戏笔记本电脑",
                price:6900,
                pCategoryId:"asdfasdf213a12f5646",
                categoryId:"qewrqwersdfasdfasfa;aksjdf"
            },
        ];


        return (
            <Card title={title} extra={extra} style={{ width: '100%' }}>
                <Table dataSource={dataSource} columns={this.columns} bordered rowKey="_id" />
            </Card>
        );
    }
}