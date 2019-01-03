/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from 'next/link';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const tiers = [
  {
    title: '基础包',
    price: '99.89',
    description: ['基本电商功能', '2000用户限制', '集成订单管理', '2GB的商品图片限制'],
    buttonText: '立刻购买',
    buttonVariant: 'outlined',
  },
  {
    title: '标准包',
    subheader: '最受欢迎的',
    price: '286.78',
    description: [
      '带分销功能标准多店电商',
      '10000用户限制',
      '微信支付代申请',
      '10GB的电商图片和视频限制',
    ],
    buttonText: '立刻购买',
    buttonVariant: 'contained',
  },
  {
    title: '豪华套餐',
    price: '800+',
    description: [
      '多级别的全功能电商',
      '无限制用户',
      '支付宝微信代申请',
      '1TB超大云存储',
    ],
    buttonText: '联系我们',
    buttonVariant: 'outlined',
  },
];
const footers = [
  {
    title: '公司',
    description: ['团队', '历史', '联系方式', '地区'],
  },
  {
    title: '特点',
    description: ['轻电商', '身份', '区块链', '插件系统', '小程序'],
  },
  {
    title: '资源',
    description: ['合作伙伴', '商务洽谈', '大型企业解决方案', '开源贡献'],
  },
  {
    title: '条款',
    description: ['注册条款', '使用条款'],
  },
];

class PcHead extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;

    return (
     
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          
          <Button component="a" href="/" size="large">正觉工场</Button>
           
            
          </Typography>
          <Button component="a" href="/">首页</Button>
          <Button component="a" href="/market">市场</Button>
          <Button component="a" href="/login" color="primary" variant="outlined">
            登录
          </Button>
        </Toolbar>
        
      </AppBar>
     
    );
  }
}

PcHead.propTypes = {
  classes: PropTypes.object.isRequired,
};





export default withStyles(styles)(PcHead);
