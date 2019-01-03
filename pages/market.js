/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import PcHead from '../src/components/PcHead';
import PcFooter from '../src/components/PcFooter';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import zIndex from '@material-ui/core/styles/zIndex';

const styles = theme => ( {
  card: {
    maxWidth: 345,
    width: "400px",
    minWidth: 150,
    margin: 5
  },
  media: {
    height: 140,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: "100%",
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
});

const cards = [
  {
    image:"https://res.cloudinary.com/da7efhqvt/image/upload/v1545225684/zhengjue/imgs/vip1.jpg",
    title: "正觉会员卡",
    subTile: "多种功能，能够挣钱的会员卡",
    price: "365/张",
    btnText1: "立即购买",
    btnText2: "加入购物车"
  },
  {
    image: "https://res.cloudinary.com/da7efhqvt/image/upload/v1545225684/zhengjue/imgs/shop1.jpg",
    title: "电商套餐基础版",
    subTile: "基础社交微商城",
    price: "99.89/月",
    btnText1: "立即购买",
    btnText2: "加入购物车"
  },
  {
    image: "https://res.cloudinary.com/da7efhqvt/image/upload/v1545225682/zhengjue/imgs/cust3.jpg",
    title: "WooCommerce本土化电商解决方案",
    subTile: "帮助搭建开源而功能强大的电商体系",
    price: "400/月",
    btnText1: "立即购买",
    btnText2: "加入购物车",
  },
  {
    image: 'https://res.cloudinary.com/da7efhqvt/image/upload/v1545225683/zhengjue/imgs/upgrade.png',
    title: "电商套餐升级包",
    subTile: "对基础电商的功能的升级和加强，需要先购买电商套餐基础版，特色为分销系统",
    price: "58/月",
    btnText1: "立即购买",
    btnText2: "加入购物车"
  },
  {
    image: "https://res.cloudinary.com/da7efhqvt/image/upload/v1545225683/zhengjue/imgs/wechatpay.jpg",
    title: "微信支付服务代申请服务",
    subTile: "为电商和其他有订单系统的应用提供微信服务号以及微信支付功能",
    price: "199/次",
    btnText1: "立即购买",
    btnText2: "加入购物车"
  },
  {
    image: "https://res.cloudinary.com/da7efhqvt/image/upload/v1545225682/zhengjue/imgs/alipay.jpg",
    title: "支付宝支付服务代申请服务",
    subTile: "为电商和其他有订单系统的应用提供支付宝商家号以及支付宝支付功能",
    price: "199/次",
    btnText1: "立即购买",
    btnText2: "加入购物车"
  },
  {
    image: "https://res.cloudinary.com/da7efhqvt/image/upload/v1545225684/zhengjue/imgs/weixin1.jpg",
    title: "微信电商小程序",
    subTile: "配合我们的电商应用，一键拥有微信小程序客户端",
    price: "39/月",
    btnText1: "立即购买",
    btnText2: "加入购物车"
  },
  {
    image: "https://res.cloudinary.com/da7efhqvt/image/upload/v1545225683/zhengjue/imgs/store1.jpg",
    title: "定制服务",
    subTile: "有更多复杂需求的技术支持",
    price: "",
    btnText1: "立即询价",
    btnText2: "沟通",
  },
  {
    image: "https://res.cloudinary.com/da7efhqvt/image/upload/v1545225682/zhengjue/imgs/ios1.jpg",
    title: "IOS原生电商应用",
    subTile: "配合我们的电商应用，快速拥有自己的IOS应用",
    price: "600/月",
    btnText1: "立即购买",
    btnText2: "加入购物车",
  },
  {
    image: "https://res.cloudinary.com/da7efhqvt/image/upload/v1545225682/zhengjue/imgs/android1.jpg",
    title: "Android原生电商应用",
    subTile: "配合我们的电商应用，快速拥有自己的android应用",
    price: "400/月",
    btnText1: "立即购买",
    btnText2: "加入购物车",
  },
  {
    image: "https://res.cloudinary.com/da7efhqvt/image/upload/v1545225683/zhengjue/imgs/store1.jpg",
    title: "小企业私有云存储",
    subTile: "基于区块链的廉价而高效的文件图片视频存储服务",
    price: "1/G/月",
    btnText1: "立即购买",
    btnText2: "加入购物车",
  },
  {
    image: "https://res.cloudinary.com/da7efhqvt/image/upload/v1545225683/zhengjue/imgs/wechat2.jpg",
    title: "新开公众号粉丝运营",
    subTile: "承诺达到15000人",
    price: "8000/次",
    btnText1: "立即购买",
    btnText2: "加入购物车",
  },
  
]

class Market extends React.Component {
  

  render() {
    const { classes } = this.props;
    
    return (
      <React.Fragment>
        <PcHead />
      <main className={classes.layout}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            市场
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" component="p">
            探索我们的产品
          </Typography>
        </div>
        {/* End hero unit */}
        <div style={{
          display: 'flex',
          flexWrap: "wrap",
          width: "100%",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center"
        }}>
        {
          cards.map((item, index) => 
            <Card key={index} className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={item.image}
                    title={item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}&nbsp;￥{item.price}
                    </Typography>
                    <Typography component="p">
                      {item.subTile}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    {item.btnText1}
                  </Button>
                  <Button size="small" color="primary">
                    
                    {item.btnText2}

                  </Button>
                </CardActions>
              </Card>
            )
        }
        </div>
        
        
      </main>
      {/* Footer */}
      <PcFooter />
      </React.Fragment>
    );
  }
}

Market.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(Market);
