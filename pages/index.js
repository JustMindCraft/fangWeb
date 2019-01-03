/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PcHead from '../src/components/PcHead';
import PcFooter from '../src/components/PcFooter';
import dataProvider from '../src/services/dataProvider';


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

class Index extends React.Component {
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
      <React.Fragment>
        <PcHead />
      <main className={classes.layout}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            主打套餐
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" component="p">
            我们提供一些能够快速启动的电商应用，满足电商主体极速的启动的需求。
          </Typography>
        </div>
        {/* End hero unit */}
        <Grid container spacing={40} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ￥{tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /月
                    </Typography>
                  </div>
                  {tier.description.map(line => (
                    <Typography variant="subtitle1" align="center" key={line}>
                      {line}
                    </Typography>
                  ))}
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid><br/>
        <Button component="a" href="/market" size="large" variant="contained" style={{
          width: "100%",
          backgroundColor: 'rgba(58, 13, 66, 0.6)',
          color: 'white'

        }}>
        在我们的市场中探索更多的服务</Button>
      </main>
      {/* Footer */}
      <PcFooter />
      </React.Fragment>
    );
  }
}




export default withStyles(styles)(Index);
