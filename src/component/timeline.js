import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import back from "../image/back5.jpg";
import pic1 from "../image/01.jpg";
import pic2 from "../image/2.jpg";
import pic3 from "../image/261939.jpg";
import pic4 from "../image/4.jpg";
import pic5 from "../image/5.jpg";
import pic6 from "../image/6.jpg";
import pic7 from "../image/7.jpg";
import pic8 from "../image/8.jpg";
import pic9 from "../image/9.jpg";
import pic10 from "../image/10.jpg";
import pic11 from "../image/11.jpg";
import pic12 from "../image/12.jpg";
import pic13 from "../image/13.jpg";
import pic14 from "../image/14.jpg";
import pic15 from "../image/15.jpg";
import pic16 from "../image/16.jpg";
import pic17 from "../image/17.jpg";
import pic18 from "../image/18.jpg";
import pic19 from "../image/19.jpg";
import pic20 from "../image/20.jpg";
import pic21 from "../image/21.jpg";
import pic22 from "../image/22.jpg";
//import pic23 from "../image/23.jpg";
import ImgMediaCard from "../component/card";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  fullscreen: {
    backgroundImage: `url(${back})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: "fixed",
    // height: "100vh"
  },
  root: {
    maxWidth: 600,
  },
  container: {
    "&:hover > div": {
        opacity: 1
      }
  },
  overlay: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    bottom: 0, 
    background: "rgb(0, 0, 0)",
    background: "rgba(0, 0, 0, 0.5)", /* Black see-through */
    color: "#f1f1f1", 
    width: "100%",
    height: "100%",
    transition: ".5s ease",
    opacity: 0,
    color: "white",
    fontSize: "20px",
    padding: "0px",
    textAlign: "center",
    "& > p" : {
        textAlign: "center",
        width: "calc(100% - 40px)",
        whiteSpace: "normal",
        wordWrap: "break-word",
      }
  }
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
      <div className={classes.fullscreen}>
<Timeline align="alternate" style={{margin: 0}}>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="h4" color="textSecondary">
            Day 0 
          </Typography>
          <Typography variant="h6" color="textSecondary">
            2020.10.17
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined"/>
          <TimelineConnector className={classes.secondaryTail}/>
        </TimelineSeparator>
        <TimelineContent>
        <Card className={classes.root}>
            <CardActionArea className={classes.container}>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="500"
                image={pic1}
                title="Contemplative Reptile"
                />
                <div className={classes.overlay}><p>《勇敢的一步》<br></br>
                    <br></br>
                    永遠會記得這天 我們在象山公園裡盪鞦韆<br></br>
                    兩個心照不宣的人卻說著一些不著邊際的話<br></br>
                    "好啦"<br></br>
                    妳叫我再問一次的時候 我聽到了我期盼很久很久很久的答案<br></br>
                    那瞬間 我覺得我是世界上最幸運的人<br></br>
                    因為那個在心底的樣子終於清晰了起來<br></br> 
                    那個讓我魂牽夢引 閉上眼睛都會想到的最美畫面<br></br>
                    就是在飄著雨的文化大學晚上 和獵戶座相互映照著 的<br></br>
                    妳的樣子<br></br>
                    <br></br>
                    消失的情人節 雖然是我們的定情片(?)<br></br>
                    但接下來我們的每一個情人節 我都不會讓它消失♡</p></div>
            </CardActionArea>
        </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
        <Typography variant="h4" color="textSecondary">
            Day 4 
          </Typography>
          <Typography variant="h6" color="textSecondary">
            2020.10.21
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined"/>
          <TimelineConnector className={classes.secondaryTail}/>
        </TimelineSeparator>
        <TimelineContent style={{display: "flex", justifyContent: "flex-end"}}>
        <Card className={classes.root}>
            <CardActionArea className={classes.container}>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="400"
                image={pic2}
                title="Contemplative Reptile"
                />
                <div className={classes.overlay}><p>《第一次約會》<br></br>
                    <br></br>
                    雖然本意是來讀書 但看著世界上最可愛的兩種生物怎麼讀的下?<br></br>
                    </p></div>
            </CardActionArea>
        </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
            <Typography variant="h4" color="textSecondary">
                Day 6 
             </Typography>
             <Typography variant="h6" color="textSecondary">
             2020.10.23
             </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined"/>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
        <Card className={classes.root}>
            <CardActionArea className={classes.container}>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="400"
                image={pic3}
                title="Contemplative Reptile"
                />
                <div className={classes.overlay}><p>《第一次牽手》<br></br>
                    <br></br>
                    ＂妳說的喔＂<br></br>
                    <br></br>
                    用作弊的方式牽了妳的手 超爽der (灬ºωº灬)</p></div>
            </CardActionArea>
        </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
            <Typography variant="h4" color="textSecondary">
             Day 11 
             </Typography>
            <Typography variant="h6" color="textSecondary">
             2020.10.28
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined"/>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent style={{display: "flex", justifyContent: "flex-end"}}>
        <Card className={classes.root}>
            <CardActionArea className={classes.container}>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="700"
                image={pic4}
                title="Contemplative Reptile"
                />
                <div className={classes.overlay}><p>《尬尬的白袍典禮》<br></br>
                    <br></br>
                    (逐漸靠近的me)<br></br>
                    "欸拍正常的啦"<br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    ...<br></br>
                    (當天半夜)<br></br>
                    ＂沒拍可愛的照片好像真的有點可惜欸＂<br></br>
                    ＂要不我們叫貞愛起床(??)＂
                    </p></div>
            </CardActionArea>
        </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
         <TimelineOppositeContent>
            <Typography variant="h4" color="textSecondary">
                Day 12 
             </Typography>
             <Typography variant="h6" color="textSecondary">
                2020.10.29
             </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined"/>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
        <Card className={classes.root}>
            <CardActionArea className={classes.container}>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="450"
                image={pic5}
                title="Contemplative Reptile"
                />
                <div className={classes.overlay}><p>《又是北投!》<br></br>
                    <br></br>
                    除了天氣容易烙賽外 我們還很沒創意的成為了北投達人
                    </p></div>
            </CardActionArea>
        </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
         <TimelineOppositeContent>
            <Typography variant="h4" color="textSecondary">
                Day 14 
             </Typography>
             <Typography variant="h6" color="textSecondary">
                2020.10.31
             </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined"/>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent style={{display: "flex", justifyContent: "flex-end"}}>
        <Card className={classes.root}>
            <CardActionArea className={classes.container}>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="500"
                image={pic6}
                title="Contemplative Reptile"
                />
                <div className={classes.overlay}><p>《藍月亮與企鵝》<br></br>
                    <br></br>
                    ＂啊你覺得我像什麼動物啊＂<br></br>
                    ＂呃...企鵝吧？？＂<br></br>
                    ＂為什麼是企鵝＂<br></br>
                    ＂企鵝很棒啊　肥肥的很可愛＂<br></br>
                    ...<br></br>
                    ＂可以不要肥肥的嗎＂<br></br>
                    </p></div>
            </CardActionArea>
        </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
            <Typography variant="h4" color="textSecondary">
                Day 32 
             </Typography>
             <Typography variant="h6" color="textSecondary">
                2020.11.18
             </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined"/>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
        <Card className={classes.root}>
            <CardActionArea className={classes.container}>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="450"
                image={pic7}
                title="Contemplative Reptile"
                />
                <div className={classes.overlay}><p>《忙裡偷閒的假退休生活》<br></br>
                    <br></br>
                    藍天 白雲 青草 我 妳<br></br>
                    閉上眼睛享受微風輕撫<br></br>
                    靠在最愛的人身上 感受著妳的心跳 妳的體溫<br></br>
                    <br></br>
                    好希望時間靜止　因為這就是我想要的生活<br></br>，<br></br>
                    沒有壓力 有妳<br></br>
                    </p></div>
            </CardActionArea>
        </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
            <Typography variant="h4" color="textSecondary">
                Day 41 
             </Typography>
             <Typography variant="h6" color="textSecondary">
                2020.11.27
             </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined"/>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent style={{display: "flex", justifyContent: "flex-end"}}>
        <Card className={classes.root}>
            <CardActionArea className={classes.container}>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="550"
                image={pic8}
                title="Contemplative Reptile"
                />
                <div className={classes.overlay}><p>《淡水與烤雞》<br></br>
                    <br></br>
                    (騎車去淡水)<br></br>
                    <br></br>
                    (下雨)<br></br>
                    <br></br>
                    我們下次真的要相信天氣預報。<br></br>
                    </p></div>
            </CardActionArea>
        </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
         <TimelineOppositeContent>
            <Typography variant="h4" color="textSecondary">
                Day 49 
             </Typography>
             <Typography variant="h6" color="textSecondary">
                2020.12.5
             </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined"/>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
        <Card className={classes.root}>
            <CardActionArea className={classes.container}>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="450"
                image={pic9}
                title="Contemplative Reptile"
                />
                <div className={classes.overlay}><p>《謝謝月老爺爺》<br></br>
                    <br></br>
                    再次感謝不放棄的妳我<br></br>
                    和妳過的每一天都幸福得要命<br></br>
                    坐在大稻埕岸邊 看著老鼠(?)和激動的魚群<br></br>
                    輕鬆地講著我們想說的話<br></br>
                    <br></br>
                    兩個人的心如此地近<br></br>
                    </p></div>
            </CardActionArea>
        </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
            <Typography variant="h4" color="textSecondary">
                Day 54 
             </Typography>
             <Typography variant="h6" color="textSecondary">
                2020.12.10
             </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined"/>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent style={{display: "flex", justifyContent: "flex-end"}}>
        <Card className={classes.root}>
            <CardActionArea className={classes.container}>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="300"
                image={pic10}
                title="Contemplative Reptile"
                />
                <div className={classes.overlay}><p>《企鵝?》<br></br>
                    <br></br>
                    雖然被暴雷了 但好像是除了生日以外妳送我的第一個東西<br></br>
                    不太好吃。因為太甜了<br></br>
                    整個心裡都甜滋滋的<br></br>(*´∀`*)
                    </p></div>
            </CardActionArea>
        </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
            <Typography variant="h4" color="textSecondary">
                Day 57 
             </Typography>
             <Typography variant="h6" color="textSecondary">
                2020.12.13
             </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined"/>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
        <Card className={classes.root}>
            <CardActionArea className={classes.container}>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="350"
                image={pic11}
                title="Contemplative Reptile"
                />
                <div className={classes.overlay}><p>《唉咚蛋斯趴踢》<br></br>
                    <br></br>
                    早就想去看妳跳舞了<br></br>
                    只是以前的我都會說 除非妳想要我去 我才會去w<br></br>
                    但這次 就算妳不想要我去我也會去啦XD<br></br>
                    Surprise!<br></br>
                    看到妳每天練舞到那麼晚 真是辛苦啦<br></br>最後成果讚讚ˊˇˋ
                    </p></div>
            </CardActionArea>
        </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
            <Typography variant="h4" color="textSecondary">
                Day 63 
             </Typography>
             <Typography variant="h6" color="textSecondary">
                2020.12.19
             </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined"/>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent style={{display: "flex", justifyContent: "flex-end"}}>
        <Card className={classes.root}>
            <CardActionArea className={classes.container}>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="500"
                image={pic12}
                title="Contemplative Reptile"
                />
                <div className={classes.overlay}><p>《猝不及防的心臟爆擊》<br></br>
                    <br></br>
                    To my 永遠的小太陽：<br></br>
                    謝謝妳給我了生命裡的光與溫暖<br></br>
                    我也願意一天24小時都繞著妳而旋轉♡
                    </p></div>
            </CardActionArea>
        </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
            <Typography variant="h4" color="textSecondary">
                Day 69 
             </Typography>
             <Typography variant="h6" color="textSecondary">
                2020.12.25
             </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined"/>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
        <Card className={classes.root}>
            <CardActionArea className={classes.container}>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="550"
                image={pic13}
                title="Contemplative Reptile"
                />
                <div className={classes.overlay}><p>《第一個聖誕》<br></br>
                    <br></br>
                    突然發現離我送(?)妳鯊鯊 居然過了一年OAO<br></br>
                    過得好快<br></br>
                    說長不長說短不短的光陰 是由無限想念堆積而成<br></br>
                    ＂Merry Christmas＂<br></br>
                    雖然期末緊追在後 但只要有妳的聖誕 就是最棒的交換禮物了<br></br>
                    <br></br>
                    這是第一個 而我們之後還有好多好多<br></br>
                    就讓我來當妳的紅色胖子吧 ##
                    </p></div>
            </CardActionArea>
        </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
            <Typography variant="h4" color="textSecondary">
                Day 75 
             </Typography>
             <Typography variant="h6" color="textSecondary">
                2020.12.31
             </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined"/>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent style={{display: "flex", justifyContent: "flex-end"}}>
        <Card className={classes.root}>
            <CardActionArea className={classes.container}>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="600"
                image={pic14}
                title="Contemplative Reptile"
                />
                <div className={classes.overlay}><p>《2020-2021》<br></br>
                    <br></br>
                    2020對很多人來說 可能是個悲慘的一年<br></br>
                    但我的2020卻因為妳的存在 而美好了起來<br></br>
                    <br></br>
                    牽著妳的手 迎接未來的每一分一秒<br></br>
                    希望2021的我們 能夠一樣快樂
                    </p></div>
            </CardActionArea>
        </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
            <Typography variant="h4" color="textSecondary">
                Day 76 
             </Typography>
             <Typography variant="h6" color="textSecondary">
                2021.1.1
             </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined"/>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
        <Card className={classes.root}>
            <CardActionArea className={classes.container}>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="700"
                image={pic15}
                title="Contemplative Reptile"
                />
                <div className={classes.overlay}><p>《元旦走走》<br></br>
                    <br></br>
                    就算沒有規劃 在台北到處走走<br></br>
                    只要有妳<br></br>
                    鯨魚肩胛骨、進不去的北一女<br></br>都變得無比有趣<br></br>
                    </p></div>
            </CardActionArea>
        </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
            <Typography variant="h4" color="textSecondary">
                Day 89 
             </Typography>
             <Typography variant="h6" color="textSecondary">
                2021.1.14
             </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined"/>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent style={{display: "flex", justifyContent: "flex-end"}}>
        <Card className={classes.root}>
            <CardActionArea className={classes.container}>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="500"
                image={pic16}
                title="Contemplative Reptile"
                />
                <div className={classes.overlay}><p>《企鵝跟企鵝》<br></br>
                    <br></br>
                    小別勝新婚！<br></br>
                    謝謝尼陪我看了除了企鵝以外沒什麼的水族館XD<br></br>
                    妳跟企鵝真的都好可愛www<br></br>
                    幸福感爆棚
                    </p></div>
            </CardActionArea>
        </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
            <Typography variant="h4" color="textSecondary">
                Day 91 
             </Typography>
             <Typography variant="h6" color="textSecondary">
                2021.1.16
             </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined"/>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
        <Card className={classes.root}>
            <CardActionArea className={classes.container}>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="750"
                image={pic17}
                title="Contemplative Reptile"
                />
                <div className={classes.overlay}><p>《又是一個走走day》<br></br>
                    <br></br>
                    見尼朋友其實蠻緊張的 但還好她們人都很好 我很快樂XD<br></br>
                    但這天好像其實沒什麼好寫的<br></br>
                    就溜溜冰 吃吃 看看燈<br></br>
                    簡單得很幸福<br></br>
                    <br></br>
                    有很多張蠻棒的照片 但我也不知道我為什麼選這張<br></br>
                    大概 就 腳腳很可愛吧(?<br></br>
                    </p></div>
            </CardActionArea>
        </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
            <Typography variant="h4" color="textSecondary">
                Day 96 
             </Typography>
             <Typography variant="h6" color="textSecondary">
                2021.1.21
             </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined"/>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent style={{display: "flex", justifyContent: "flex-end"}}>
        <Card className={classes.root}>
            <CardActionArea className={classes.container}>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="600"
                image={pic18}
                title="Contemplative Reptile"
                />
                <div className={classes.overlay}><p>《第一次出遠門》<br></br>
                    <br></br>
                    光是地點就決定好久<br></br>
                    但我們這次有相信天氣預報果然是正確的<br></br>
                    不過<br></br>
                    就算小時候去過 就算寒體營剛去過<br></br>
                    只要人是對的 真的哪裡都好好玩 (•ө•)♡<br></br>
                    <br></br>
                    最幸福的事莫過於<br></br>
                    一早睜開眼第一個映入眼簾的 是妳的身影<br></br>
                    </p></div>
            </CardActionArea>
        </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
            <Typography variant="h4" color="textSecondary">
                Day 100 
             </Typography>
             <Typography variant="h6" color="textSecondary">
                2021.1.25
             </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined"/>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
        <Card className={classes.root}>
            <CardActionArea className={classes.container}>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="800"
                image={pic19}
                title="Contemplative Reptile"
                />
                <div className={classes.overlay}><p>《One Hundred Days》<br></br>
                    <br></br>
                    妳作弊！！！！！！！！犯規！！！！！！<br></br>
                    居然偷偷給我一個大爆擊！！！<br></br>
                    妳的文字真的很能打動我　害我在宿舍裡害羞的亂叫＞＜<br></br>
                    我真的無法想像我要怎麼更去喜歡妳了<br></br>
                    因為我感覺我已經用盡了所有ˊˇˋ<br></br>
                    <br></br>
                    在這一百天裡 只要想到尼 真的做夢都會笑w<br></br>
                    悲傷的事只要有妳 就好像不那麼難過了<br></br>
                    謝謝妳讓我感受到了愛與無限的快樂<br></br>
                    在認識妳之後 我才發現自己可以這樣情願的付出<br></br>
                    就是因為如此珍貴 所以才要好好珍惜<br></br>
                    好想要大聲地說<br></br> 
                    我愛妳♡
                    </p></div>
            </CardActionArea>
        </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
            <Typography variant="h4" color="textSecondary">
                Day 107 
             </Typography>
             <Typography variant="h6" color="textSecondary">
                2021.2.1
             </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined"/>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent style={{display: "flex", justifyContent: "flex-end"}}>
        <Card className={classes.root}>
            <CardActionArea className={classes.container}>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="600"
                image={pic20}
                title="Contemplative Reptile"
                />
                <div className={classes.overlay}><p>《台中遊》<br></br>
                    <br></br>
                    帶妳看看我家鄉感覺是蠻不錯的啦<br></br>
                    只是行程有點神祕XDDDDDD<br></br>
                    不如去我家看貓(x <br></br>
                    沒 好啦 我先去自首<br></br>
                    (上車)<br></br>
                    <br></br>
                    btw 這張圖是準備抱住爆衝的尼喔＞＜<br></br>
                    </p></div>
            </CardActionArea>
        </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
            <Typography variant="h4" color="textSecondary">
                Day 111 
             </Typography>
             <Typography variant="h6" color="textSecondary">
                2021.2.5
             </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined"/>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
        <Card className={classes.root}>
            <CardActionArea className={classes.container}>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="700"
                image={pic21}
                title="Contemplative Reptile"
                />
                <div className={classes.overlay}><p>《肥宅展&博恩》<br></br>
                    <br></br>
                    陪了我看了一天我想看的東西 真是辛苦妳啦(拍拍)<br></br>
                    妳也喜歡真是太好了ˊˇˋ<br></br>
                    下次再來找躺躺的行程XDDDDD<br></br>
                    </p></div>
            </CardActionArea>
        </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
            <Typography variant="h4" color="textSecondary">
                Day 120 
             </Typography>
             <Typography variant="h6" color="textSecondary">
                2021.2.14
             </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined"/>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent style={{display: "flex", justifyContent: "flex-end"}}>
        <Card className={classes.root}>
            <CardActionArea className={classes.container}>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="750"
                image={pic22}
                title="Contemplative Reptile"
                />
                <div className={classes.overlay}><p>《Happy Valentine's Day》<br></br>
                    <br></br>
                    在和妳走過的這些日子裡 每一天都好精彩<br></br>
                    這些點點滴滴 都會是我最珍貴的寶藏<br></br>
                    謝謝妳每次發生了什麼的時候 都會願意坐下來好好跟我縮<br></br>
                    讓我們一起面對問題<br></br>
                    和妳一起談論情感 情緒 大大小小的思考<br></br>
                    做什麼都能很輕鬆 願意把自己的真誠交給妳<br></br>
                    能遇見妳 是命中注定 也是最幸運的事<br></br>
                    <br></br>
                    妳的愛、包容、信任與鼓勵 深深打動著我心裡的每個細胞<br></br>
                    我的理科腦 跟時不時發作的中二病 希望沒造成困擾XD<br></br>
                    而妳的少根筋 在我眼中卻是多麼的可愛<br></br>
                    我們都不是完美的 但愛能融化一切<br></br>
                    正因為有彼此 所以我們才能一起變好<br></br>
                    是我們一起具現化了愛～～
                    <br></br>
                    之後還有很多很多在等的我們<br></br>
                    希望我們都能一起離自己的憧憬更進一步<br></br> 成為自己想成為的樣子<br></br>
                    <br></br>
                    最後 請原諒我這時候不在妳身邊<br></br>
                    (但我的心已經在妳那了XD 妳有收到嗎)<br></br>
                    情人節快樂 我愛尼 (•ө•)♡(•ө•)
                    <br></br>
                    </p></div>
            </CardActionArea>
        </Card>
        </TimelineContent>
      </TimelineItem>
            <Typography variant="h4" component="h1" style={{textAlign: "center", margin: "20px"}}>
              To Be Continued ...
            </Typography>
    </Timeline>
      </div>
  );
}
