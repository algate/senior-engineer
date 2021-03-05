/* 
    笔墨纸砚添加音乐播放器
    位置：algate\node_modules\@docusaurus\theme-classic\lib-next\theme\Layout\index.js
    有待优化，歌曲列表调用接口！🌹
*/
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import SkipToContent from '@theme/SkipToContent';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import LayoutProviders from '@theme/LayoutProviders';
import LayoutHead from '@theme/LayoutHead';
import useKeyboardNavigation from '@theme/hooks/useKeyboardNavigation';
import './styles.css';

// 添加react-aplayer
import ReactAplayer from 'react-aplayer';

// 请求播放别表 - 请求接口，页面无法加载音乐列表
/* let Music = [];
let api = 'https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r';
let url = api;
url = url.replace(":server", "tencent");
url = url.replace(":type", "playlist");
url = url.replace(":id", "1528246446");
url = url.replace(":r", Math.random());
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
            let response = JSON.parse(xhr.responseText);
            // Build(response);
            Music = response;
            console.log(JSON.stringify(Music, null, 4));
        }
    }
};
xhr.open('get', url, true);
xhr.send(null); */
let Music = [
  {
      "title": "用力活着",
      "author": "张茜",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002bB5aL3osY5r&auth=abcfb36ce0e946e1e2fe861c33a3f7facda7db29",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002VMYeB3hF0MQ&auth=f6b2fa4451f453e8d6b3990fe69c4f23d57acd60",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002bB5aL3osY5r&auth=3311392125e263306221cd74c985e4201567e762"
  },
  {
      "title": "干饭人之歌",
      "author": "张老板阿",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002JAGCk0BTygU&auth=332f626ee382271e8456aa6e8778c186c374cfa1",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=00076fWF4gBIlP&auth=994517809966d7f293acb9ff8b2c4fffcac0aa28",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002JAGCk0BTygU&auth=df719cc576238c5d6627315479a0e81a62456354"
  },
  {
      "title": "可可托海的牧羊人",
      "author": "王琪",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001GYUN142PhVx&auth=e1b4baa5b648325d3ebb1e8218ef5e6e0c0eb886",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002sYQ3h4Fgp4d&auth=6c88690d09af871840ce24d6683e1a6bcee237d5",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001GYUN142PhVx&auth=f47f7a9ee86ced0616c9700714e015d5f6e02d75"
  },
  {
      "title": "Mr.Man",
      "author": "满江",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003XidqX3TLTXk&auth=13a198707d0424aa3ca4a7b3bc4938b4ea06cb79",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002C4qL44RmrHd&auth=7591c131c65ff03e74acfe184b313436b433cac0",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003XidqX3TLTXk&auth=bddee58e1c7fe853b5922d29bc8ea6f20d5776a1"
  },
  {
      "title": "我爱你不问归期",
      "author": "白小白",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=0015LkaZ20fy1P&auth=a45133538fec203e3873bcd7586f141dcdaad897",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003Z67tp1En5jM&auth=1699c88c4cdcd7d3e69743f267b079662b743379",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=0015LkaZ20fy1P&auth=6e84821105522e2412b0755f61012f07ea097470"
  },
  {
      "title": "爱过了也伤过了",
      "author": "张海滨",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003NFbx30S4AZT&auth=3c5d87201a431b7d1ad1a52d5752e12cdd0c67c6",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002Zpd041loHvD&auth=d914eab024bd534a90c69d9d8ed251d366b43494",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003NFbx30S4AZT&auth=6a0cc2f7297ab04d2e78d069a266d61aa6351ef8"
  },
  {
      "title": "光明",
      "author": "汪峰",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001F529y3KnCwU&auth=766b9b173a6deb93862d557e9fac129cc5dabd2a",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=000JzZ9M1L8k1T&auth=be901d9269030ce3cbb19892def6002a332e4a85",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001F529y3KnCwU&auth=9eb53c3c1bae87bfc63c6d6ff8e91b5ef8675b5c"
  },
  {
      "title": "热火斯卡拉",
      "author": "承利",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=004LVfER07NpfJ&auth=2414c56cca6516be04ae8832a8fc6ec8e4e8f44c",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003w0qT7048r8Q&auth=ae1b984406824837b0ad7d4cb9a2a15fb847ef75",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=004LVfER07NpfJ&auth=35012f17fdeb2e0e2708af2166dd2ec083e4c082"
  },
  {
      "title": "Die Young",
      "author": "Kesha",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000nYy5h19F8ix&auth=4806e24c621b6280f7e6d5852943e9d925f0122e",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=000e2PxH0vXXkT&auth=a988ff1498fe30195206208226566f58eafaee92",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000nYy5h19F8ix&auth=d2f77bc954838304d5b37d9d0d8606337fd37cbe"
  },
  {
      "title": "等一分钟",
      "author": "徐誉滕",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002CQ7e82p2SCl&auth=9171456a49aab3261dfcbc4c1661592ec0279e34",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=004fkgLh2f7UY8&auth=f46e60c625c970d56126f38d5e1be62952e4803e",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002CQ7e82p2SCl&auth=2997c48a3c63d7fb9f97fb58aceb8b3fc482ee41"
  },
  {
      "title": "春泥",
      "author": "庾澄庆",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=004IFKfx2ol4LU&auth=9b3612b501a7ca00d11f37fc3e36202d18449ae6",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=004AnyL73LCOJP&auth=a50137f7c66aa970fbe64bc2b9dea3fac241a113",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=004IFKfx2ol4LU&auth=64fb41025677d5fab0169c8223062c725f1f635b"
  },
  {
      "title": "好几年",
      "author": "刘心",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=0014kAhz2bqXQB&auth=f09d7b454d9d9a57520e6869c4171571997b6aa4",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=000NN3aT4gcGJG&auth=cbd2302abbab129be56c555e18e7dcdec381d2c7",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=0014kAhz2bqXQB&auth=a2c762c3266c15d0a5a95010ce87ec24b9b3a861"
  },
  {
      "title": "Call Me Maybe",
      "author": "Carly Rae Jepsen",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000yVT9t05ZGRt&auth=448a3111753de23808f7494194c28848fbc2fdbe",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=004RM80k2qTnxo&auth=64d789d862393ace34b3724768b8d71cbea473dc",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000yVT9t05ZGRt&auth=31aa8855a581d39876c1e46406e7e77791e6aac7"
  },
  {
      "title": "像鱼",
      "author": "王贰浪",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000NHikR1jV7Zz&auth=43c70ab5b74aee9f1dc2dfcc5fe0f8419c45aa54",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001Zrk6t0urxvG&auth=de90a1bc158d7e3c73ab71a805238cbc20507ea7",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000NHikR1jV7Zz&auth=7ffd13d22d008ee68b4761a8d00539acc87033ba"
  },
  {
      "title": "我这一生",
      "author": "半吨兄弟",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002mny3a49m118&auth=8482b6f999e93177ea0d120dd8b02c48b64d84ca",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003pYx7E2y0Ubv&auth=993047ce3674c1dbda9ae9669eb9f9ee07ba0626",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002mny3a49m118&auth=f1ad43abc935d508273182e245bfb423deec814d"
  },
  {
      "title": "In the eyes",
      "author": "江映东",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=0024iyId0CfeFw&auth=11ecfa4d2bb6e83722710632d8b6a07940ae29b6",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002kyZ1V1RbnEa&auth=4460ed65019feb038c496d82b14558389a75ea76",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=0024iyId0CfeFw&auth=3cce6c3d14eb60a2c6a0c32020ae03cd46833082"
  },
  {
      "title": "Reality",
      "author": "Lost Frequencies / Janieck Devy",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003diyrR1rmlkj&auth=96b42659e3b36a775b03cce5a0b3db1b2b5e5cca",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=000NHvXE0hHldo&auth=5d19fb35918e10d4d07644e46d3742d967852532",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003diyrR1rmlkj&auth=cdcad77e5129260ef4196ddad7035bd3fd967044"
  },
  {
      "title": "Alone",
      "author": "Alan Walker",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001nHOrr49sHM7&auth=85ed306272f273bbe9be078ab6b13e70a7079af3",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003ArgKV3mjzwp&auth=ed92ffaea7e3d23d56f045d9493bdcbb587d19aa",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001nHOrr49sHM7&auth=861d163733e99d0afc72fc57a3c0e8c979d2f289"
  },
  {
      "title": "点歌的人",
      "author": "海来阿木",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000d7Dmc3JEsaR&auth=c05a7a718904dd49c58aac618f28785a13f776c2",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001NvtHt3hFmxE&auth=564b5be54f56b4b78e0c582b18641a910b070592",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000d7Dmc3JEsaR&auth=47ef4f703db70b1dddcaad3efe25bb7975a14854"
  },
  {
      "title": "旧梦一场",
      "author": "阿悠悠",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=0049iR603EJHAY&auth=0a7850b2e71542f15bac39c3104e81f19b169a58",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001ooeyd1kAh9w&auth=bd0d64b0964e41cccf1806e6a3045f9c208b268c",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=0049iR603EJHAY&auth=8104d29788a160efdc02bbb9d7e1fc64899d9085"
  },
  {
      "title": "K歌之王",
      "author": "陈奕迅",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=0049bTOJ3yvgUt&auth=1e9cf8f000a840781998591a43cb2771fa0740c3",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=004WcjmQ3fOaN9&auth=f3d24dd4ace6221603e4edadaf4670d5e2172a5e",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=0049bTOJ3yvgUt&auth=08015ffd3e3371ac1dbf54f9731878b8fca7d318"
  },
  {
      "title": "7 Things",
      "author": "Miley Cyrus",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001g1PRy0sIrey&auth=c2d22b221db4c119bf0be1ed73108910e23b0f4b",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0013gLtr1iZZwq&auth=8065f95c679b20c242085a79d17d74f25525365c",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001g1PRy0sIrey&auth=cff99f86b4f31b26624a7f8416d3953ee3e1a6c8"
  },
  {
      "title": "All Falls Down",
      "author": "Alan Walker / Noah Cyrus / Digital Farm Animals / Juliander",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=0014ahiq40MFQ5&auth=d19d7f907646fece01f8eca0a43e6fa1837848b4",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=00459X8Y1wfcQ7&auth=018f9a673601c6bea87a194927cc93e1477160cc",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=0014ahiq40MFQ5&auth=62d73dd3f13acf870b86c0d04cdb2d7b995896c5"
  },
  {
      "title": "Move Your Body",
      "author": "Sia",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002fucxO4YRfYv&auth=f73ed591212b884f58ea5ba986791a3cc0656aad",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001AI4X719lsax&auth=516b6ee620f8573a2ff1ec2568911d555daf199c",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002fucxO4YRfYv&auth=ff5b1b21d3ff0f205298ac4313cd380baa984704"
  },
  {
      "title": "マイペース",
      "author": "SunSet Swish",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001UMi7N12auTR&auth=7edcbdaa50cc9dadb6cd46e6d96f66367be65c1d",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0038GAEy2ihwvL&auth=a1e99e344aa946c6381931b27cc8f3cd0b3c946a",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001UMi7N12auTR&auth=cb4c47280c3ebe3a73862ea993d8ea2489ec6b63"
  },
  {
      "title": "X.U.",
      "author": "SawanoHiroyuki[nZk] / R!N/Gemie",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001GytUx3nTpRP&auth=d14d321f813178e7d303b950e170597e2a81e47c",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001ySmBc0JqmJn&auth=76ff681e9a3e5229756a68e990221b49b91cdb25",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001GytUx3nTpRP&auth=c9c998de9f338853f5c2bfb54e882a07294e3b0a"
  },
  {
      "title": "少年",
      "author": "梦然",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000S7TGL43hhBO&auth=8e91eb4ea5af92ace6b34e9ff4b34855925a2985",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=000EI9tu27e5iy&auth=37e3436a0c34452cfd147b395717425e350f13c8",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000S7TGL43hhBO&auth=baf16f9ffd7d5083ba005fa22186a9271874a1d3"
  },
  {
      "title": "In The End",
      "author": "Voodoo / Mellen Gi / Tommee Profitt",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000EGjh43vS6BN&auth=8955030ba12f0c306a6d3de0aa3de2d9b935632a",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=000Sn7Un3GbOM9&auth=1ecdb33f0a26103047f9090ba63fab29959252c4",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000EGjh43vS6BN&auth=6912dc3e09334e04d90583a68a774adc4063bc31"
  },
  {
      "title": "世界这么大还是遇见你",
      "author": "程响",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001xLIXo2w9V7U&auth=ff0b7f3f616899ea30f8c54f7753805d2484941e",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003Ls5Jo4EFBIH&auth=b94c84c9f3b16adabfd2b516b76f9f09228806a2",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001xLIXo2w9V7U&auth=b5fafb449417f46c42224b9819079590f2f67d35"
  },
  {
      "title": "世间美好与你环环相扣",
      "author": "赵玺",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000v1UOe2kBLH5&auth=3f2033a11cfb86a8cc8cb5da8f7445bb02fe5d61",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001u8wBq1n1mlX&auth=be4e93b8dde2577c849433798c22afdad2993cf3",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000v1UOe2kBLH5&auth=621320de6b2477afbef5d696f3672926e8be627c"
  },
  {
      "title": "爱情堡垒",
      "author": "杨小壮",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000xPX0O3XWTAX&auth=326e2b279d910515bd4d76bede6dffeb28aabe3c",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001yJE6u2Uvm6w&auth=4d2c9832b60f633959cc71cf7cf7d37be60e10ea",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000xPX0O3XWTAX&auth=bc5caf5707aa1aef2100308f78039e0bd175a03f"
  },
  {
      "title": "桥边姑娘",
      "author": "海伦",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001zLvbN1NYMuv&auth=0891d53c67d3fe80cbec20de82794013125f1f55",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0037Yq3H3RznaX&auth=59166e4e4816297c1de5792fd11dfb9754a761ee",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001zLvbN1NYMuv&auth=d43da0f49fbd3b1f121f9cc5812b251afb5499f8"
  },
  {
      "title": "私奔到月球",
      "author": "五月天 / 陈绮贞",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003LTBWR0CT6bg&auth=4f270ea96e1fed1c0a43a60b73865ae13f92605e",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002R4FBH0UFddO&auth=41aaf3723c5a349c25f86671eb371806aba14275",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003LTBWR0CT6bg&auth=dd7111bbfd7a0a4492505b49adbd0087b5c4592b"
  },
  {
      "title": "突然好想你",
      "author": "五月天",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000mzb9b1FsOGn&auth=ab91348972e7f1517a5d51b81c4070fbad8c1ec0",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001mNqgX29D6Ej&auth=6e29a315c92064ad470d4295581fa1345803c1c7",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000mzb9b1FsOGn&auth=07a4309fe92aa67c0179cb14f0d2a11980573a6d"
  },
  {
      "title": "风雨无阻",
      "author": "周华健",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=0025GslA2cMgqe&auth=2180a30e3659383f9dcdb808b62ef82dcc410b9a",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=00123MdS1ARksE&auth=ad4059daa736b956575e22918baf00013459eb43",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=0025GslA2cMgqe&auth=0c0942ee5675fbe724de298473aaccbf21463504"
  },
  {
      "title": "画",
      "author": "G.E.M. 邓紫棋",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000P8peU0HhORi&auth=949fb1fadc959a0f04fe412e0346fd87c411a795",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002obDH53uiSTk&auth=ab6930c3d0dd27ad5e454d72ab1b7fcf0adb952e",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000P8peU0HhORi&auth=4e457d514418457525e738091c71eea8acd66197"
  },
  {
      "title": "温柔",
      "author": "五月天",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003L6xyk0vvEeA&auth=6971f18ea0d1609c2570b4f8100fb226f642d4a0",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0042miPf28nzum&auth=0dd5b1b9f1393b5f14f3a8915110261e4ae29fca",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003L6xyk0vvEeA&auth=7cda031494c3d30c48249ee6d0e7e267253d203a"
  },
  {
      "title": "离开地球表面",
      "author": "五月天",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001BAFqt1Ay4Vf&auth=aa521dd62922b94f6dd9953bc63303347a4e28bc",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002PYDbl3I5L2k&auth=040e8ba3f31d084ea3e944e4727580d441802d8c",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001BAFqt1Ay4Vf&auth=1312bd80f4cfc9a54e86f65f4d6c252f43a4b53a"
  },
  {
      "title": "倔强",
      "author": "五月天",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=004HyLC74RYiBC&auth=2929594825f3b153d76b1ab2e9ea105d64f5467a",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002plCgA0zOyYF&auth=4c4b2ed2c4c82f492c8ba314d5dae707deff6ff3",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=004HyLC74RYiBC&auth=a34687bfebcc880044de3cd7002eda8b910acc72"
  },
  {
      "title": "知足",
      "author": "五月天",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=0033P66R0qEtlT&auth=aedacf97a45905b3dcca0f441ccf91824359c4ab",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003PIMo40rxcAn&auth=b1a300c92c54d2bdb82ae5086b51608fd55ebbe2",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=0033P66R0qEtlT&auth=6b069e12e103263c28908624ffa4ca5da9fe1b2e"
  },
  {
      "title": "你的答案",
      "author": "阿冗",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003UAhhG2Bm3Nq&auth=e5f68a9a7bf68ebac3cfda5f8de7d149e25f3d14",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001ag9vZ3zT8OM&auth=821bcef73f76fd5ace74ab22d5c1b2f35f175022",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003UAhhG2Bm3Nq&auth=e04a85ffb84422f4ac3bc58e3b079f1dc4dfc0d3"
  },
  {
      "title": "Extreme Ways(Bourne's Legacy)",
      "author": "Moby",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002MtsC506D7Ye&auth=58e86bebc3f5e5b861afea57cf0c3198073b4ddf",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0011gwAF3F5KlV&auth=b1d3d245c4015b916f73f5a7590449a986103c06",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002MtsC506D7Ye&auth=1fa4b89d5ae9b992f174ad5e58144b2940cea367"
  },
  {
      "title": "双侠",
      "author": "陆小凤传奇",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=004SMh8X0Zo5Cu&auth=5641fc7a2f0a347b4209f47f14e61c1832b8538d",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001TMfei13Icf5&auth=69780c41657c1295e9634feec16a3184eed2e4a0",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=004SMh8X0Zo5Cu&auth=e5f48237e89dd702e50dbb0fc26d993ccc225516"
  },
  {
      "title": "你笑起来真好看",
      "author": "李昕融 / 樊桐舟 / 李凯稠",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002fePdX0zcfpQ&auth=e050e648555d311996c0d9a5b5593deef3d212a1",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003SsK2b0tvtiF&auth=f6cff2b77fb1117c2e9512b50e40558d67083dc8",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002fePdX0zcfpQ&auth=0af49bef962a0c3d8d6326dc651577934529c704"
  },
  {
      "title": "孤芳自赏",
      "author": "娄振宇",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002qcBb02wnyXg&auth=d9aad5a3bdc28eebe8d6ae38769962b6d2d1cc31",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001vm0Pf2jVwMk&auth=949405e660ae5dda19f153d729c5064603dbe288",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002qcBb02wnyXg&auth=a43207a43bdcf4820681a1b5c1a8485d29744e89"
  },
  {
      "title": "口是心非",
      "author": "丫蛋蛋（马启涵） / 崔铭嘉",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000YYIkI0rLJr6&auth=07742e892b9e2818c99e82f148959c915c33a607",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=004OFbiz2ysGit&auth=842520ab8fc1f33f66d3236c6f7ffb1bd8a7ffec",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000YYIkI0rLJr6&auth=8bb142bc7f69aecde88f14c1443943f105053dc7"
  },
  {
      "title": "赢在江湖",
      "author": "姜鹏",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003XarhT35CoEA&auth=440df3c7fd9e2c6ed16a21910f10f68f3fd9fcf2",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002AsAzl0fHsXP&auth=1321088cf69942b0b388b9260f09113a825db800",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003XarhT35CoEA&auth=0e1a39308572e6600d22cc974f9cb0e47760509f"
  },
  {
      "title": "芒种",
      "author": "音阙诗听 / 赵方婧",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=0020VnHM0U9uNh&auth=540ff17a3c1ef91528948fb895965352761d697e",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0035FWvO0bwXTo&auth=aa870f4c38dc6f58ac8b178e74afeba721dd712c",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=0020VnHM0U9uNh&auth=7fac03cbffa35b4699d1285a3ddf6543c3394d76"
  },
  {
      "title": "欠我个未来",
      "author": "艾岩",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003V8DGh32L4fK&auth=ba5bd6dc08adc46403ceadfd37d9d4cd4f3c51a0",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0002G0dd2pKZcj&auth=f99e9468a0271f30ea254de82f69e0f636637b2d",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003V8DGh32L4fK&auth=bda9ae4e7003e25be6f08624498eb904d9d23167"
  },
  {
      "title": "Home We'll Go",
      "author": "Walk Off the Earth",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000MGHHm4A2PjI&auth=6e88b6da0326e02a72ed1ac40e5116f7c03f66aa",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002MZFVF4MAyIN&auth=d385fead73621407367fc58b5572bb591118c978",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000MGHHm4A2PjI&auth=43d2bde4ad4d2fa0a3cf53fe8a87e96995ba787d"
  },
  {
      "title": "当真",
      "author": "蒋蒋 / 曲肖冰",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000mYvlv2HvIg5&auth=82dca54d892be0b86e375fa3b1feae45d6b503de",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=000RgBrK06p5mH&auth=179e1d3430205dbc78af3c2e9430ab1549424d2d",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000mYvlv2HvIg5&auth=b8697a718ffb83b627f82c14b79566fd3ee44d52"
  },
  {
      "title": "醉千年",
      "author": "李袁杰 / 李俊佑",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=004AmsSX4LvSG5&auth=563cf1efd1624174065a107d935e7bd7afcae762",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003G48vx0gy8uj&auth=9a06ea6b6dfa7dc73b813029b3edef2ec7785962",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=004AmsSX4LvSG5&auth=3e9a22b1c4d4d82ae4b7c016aae7864405eda450"
  },
  {
      "title": "一曲相思",
      "author": "半阳",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002u0fTY2HoJJp&auth=d8558821ef0617c58c88e465f9ca1e0bd4e99a72",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=000ujFf61gJy8A&auth=d0b550e8fadffa356bc155281f938c1e808f88c3",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002u0fTY2HoJJp&auth=aa06b35e1d793025dfd36ae401fecf37069ffc1e"
  },
  {
      "title": "风吹麦浪",
      "author": "李健",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000MTKcL2olUSu&auth=640b06159becb898f5dd0b7dc0805753a02f25c2",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=000mR8hY0Kmwwx&auth=21ab5f645df1479f7b0dcdb6985c6819efac6cf8",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000MTKcL2olUSu&auth=98ad0b9c902493786dc32975e456d6e5dcaff8d9"
  },
  {
      "title": "7 Things",
      "author": "Miley Cyrus",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002Ibmvl0vjPB8&auth=74715e252d89f83bef2feb7182a15c6807b59482",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=000VDpuW4GcALZ&auth=c8f76bbfdd255b4def3ae2cf2a224de80c3bdf21",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002Ibmvl0vjPB8&auth=611bcceae95c70fb8908ccee98902bd4f86fbdb2"
  },
  {
      "title": "我曾",
      "author": "马也_Crabbit",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=004Au8xQ0OO1QR&auth=01c43ff30233f271c5bf8448223b8194644119c3",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002305ia1nx8d5&auth=b64a2aef10413d44db5c56f005c5926b355afd03",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=004Au8xQ0OO1QR&auth=49b2a8043b1426bd58de7c48384b80e52e94743e"
  },
  {
      "title": "Something Just Like This",
      "author": "The Chainsmokers / Coldplay",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=004RuyIi2GPuyC&auth=13819062b6b778e7660f8eccb225157798a2dacd",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002cQvf907CCtm&auth=f441cdda5a8de1712a2c29449d1e54ea677b51d3",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=004RuyIi2GPuyC&auth=664850ee528dba8849625f23f936432c67838dec"
  },
  {
      "title": "五天几年",
      "author": "林凡",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002HDoB80oHarT&auth=9163c6e007191d5b508b7b2add836000f0e22ba5",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001R6qux1LnGww&auth=a006948d8a3eab4076865f54018e8793138988da",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002HDoB80oHarT&auth=0e7a7fa8eb7ebf7aa5bf36d3362e457a7f40f3a7"
  },
  {
      "title": "生活不止眼前的苟且",
      "author": "许巍",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=0007gGzt0Oi4iy&auth=e30976326e8972dcbaa0260a70d4abfaa050d563",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002mht8Z3aUVQS&auth=f3093788488d893707715eae769c2b24b10dd825",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=0007gGzt0Oi4iy&auth=7d79be96caae22f8cdb50df5d7a9277f34558b50"
  },
  {
      "title": "Let me hear",
      "author": "dnaEdit",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=0012NSUO43r7av&auth=01d10f92709fad288e346854f24d68247dedcf0d",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001ZaCQY2OxVMg&auth=d0c0f36399d923ff85fd7f93677c1343ef5ce785",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=0012NSUO43r7av&auth=d22696a8d70299877173279860c006fd3bf621bd"
  },
  {
      "title": "Good Time",
      "author": "Owl City / Carly Rae Jepsen",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=004anWbm2S4qaq&auth=12d0e8f4898698748d503b8fb2f7d0a7505d6a34",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001mat8F3tAzsu&auth=83b9e2c0b1517ff9bda2b661804e5cc07f242ff7",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=004anWbm2S4qaq&auth=b5da7c45552088b86d96e4b3044e7499341c6da6"
  },
  {
      "title": "泡沫",
      "author": "G.E.M. 邓紫棋",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001X0PDf0W4lBq&auth=13c0bf597a645599de579533c1be64a26182f610",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002YFufr4bXZyI&auth=f8d46fbc55821cb1ba52ee00e1d26f45a5654c37",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001X0PDf0W4lBq&auth=edd856c16e743c4a077011006a1fa8cf329eafdf"
  },
  {
      "title": "回忆总想哭",
      "author": "南宫嘉骏 / 姜玉阳",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001F3eum3FtG1a&auth=e48b9c6f216a86600c6b4840c1eb479122594f84",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=004Atrnp3U2NrA&auth=89234567eeb4f6126e7592d1fa19abd3f2f9b594",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001F3eum3FtG1a&auth=1f657ac8a00cbe29dab4509f4e3cad38dc6d1e89"
  },
  {
      "title": "男人好难",
      "author": "沙宝亮 / 黄渤",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=0026bav818qxjB&auth=6e9e60ecebc12cfc40f310bbd85d9b29cecba4e5",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002LGGC127ITbO&auth=40c4e5d8d2e0dd9b863ea03d39cce489a26aae93",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=0026bav818qxjB&auth=57de2a73f33f33f0c6fc562a8c05827fb43c7412"
  },
  {
      "title": "光阴的故事",
      "author": "黄晓明 / 邓超 / 佟大为",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000KFFxP2gJhhH&auth=451689dfeb339f387d186d8abfa8f408ce5001c0",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003vQqqR1U3xzD&auth=5d963ac734295a9c163e2420760ed0b53eb48768",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000KFFxP2gJhhH&auth=3914cdc74000a6a952592cd6c495943d2e0caf38"
  },
  {
      "title": "海阔天空",
      "author": "BEYOND",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001yS0N33yPm1B&auth=e6efb86bd97fb9647d2c4f57f6b79ee57a2f32f6",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002qcJuX3lO3EZ&auth=5c96b8b8296df249be76802eead36fef23feddcf",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001yS0N33yPm1B&auth=34b3ca934c97f65a660114b3034fa9e62683f8be"
  },
  {
      "title": "光辉岁月",
      "author": "BEYOND",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000WuNI11su5zl&auth=c6b079d1081cb8e642b69c553d326205e53388a3",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001sQ4Rr0HirDm&auth=bc9f54fbb03bfd90f0424ff97522fd1777f5da34",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000WuNI11su5zl&auth=b3ddd7226faf92da6ea13828bdc8f9c8e9954a8d"
  },
  {
      "title": "生僻字",
      "author": "陈柯宇",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001KxFBr3ZrMIk&auth=1dab1c3955eb90c34bdbcb2b0a3257b6e2f74d90",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001uqfEQ0JKN6V&auth=11a94b69af400e7f1c7bb204e4320a1fc6d1fffb",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001KxFBr3ZrMIk&auth=6c679e9bf96ff35e369df1a74ddf5f9f4bdb9861"
  },
  {
      "title": "Bye Bye Bye",
      "author": "Lovestoned",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=0031iCeb0EmUlY&auth=ed38cba2d24fb72686c0d7928bad2298fa011bd1",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=004BoV2s32W6at&auth=9414cd48f2ada3da5c470ae9c1fe071f2cc7cf80",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=0031iCeb0EmUlY&auth=9e2337d95e233c1e3ea472fb10620916bba79792"
  },
  {
      "title": "从夜晚，到清晨",
      "author": "贰佰",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001e3Dzk0k0rS7&auth=2f30043f588cdd08d8c22ab98b7ca1b8b2cc230b",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003BD2bW2TFv31&auth=81ca9cfb7851eb7cf041863ab2419c45ee2253a1",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001e3Dzk0k0rS7&auth=cee6266ae6b9926a160e9e21af7e81c45c03bbba"
  },
  {
      "title": "张三的歌",
      "author": "李寿全",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=004SoZzZ0Juiny&auth=65decbffa581980a5a737a25d46c9989b3c2399f",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002oIQSl0RQIoT&auth=a459dbdeaff8dc5c5e58c22e7b4a689af3f28f47",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=004SoZzZ0Juiny&auth=5474161465fa658e1e23a033baabc86e719e500c"
  },
  {
      "title": "最美的期待",
      "author": "周笔畅",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003YC3p31HyR96&auth=5565b873299aff5aada4ac2abbfae7ee96ba9a3b",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001Qn04n29RAmP&auth=fc4ad5af2ca4f1fe2417fd2453f09919b483a6ba",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003YC3p31HyR96&auth=6deb00ac23cc033ff00a22a8e9391627f97c8238"
  },
  {
      "title": "Get Ready For It",
      "author": "Take That",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000wN0gb3Ix64T&auth=e232047710c76f6207b675d624cec6f1fad9d356",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0004MGso4WElp9&auth=2f2fbff95d076d9dfccf9123b118c7c8a6c66190",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000wN0gb3Ix64T&auth=eb89273ca318f72339d1c9f02e4d3d705ba0f99f"
  },
  {
      "title": "Take Me Home,Country Road",
      "author": "John Denver",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003MXJLb0kdYBg&auth=0c07e98330879c2e120ec2bb45912f22b5a0d097",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003W0mSR3epyh4&auth=c9799884bdd0ce6e3e3851a41b6dbc08114dd4b8",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003MXJLb0kdYBg&auth=07b1f47c3dc79b49b4ba2067992166b8cd2bdd0d"
  },
  {
      "title": "Beautiful Now",
      "author": "Zedd / Jon Bellion",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001Y2zoo36u1bP&auth=809b5f6291418450d1b73d5dbe8e5123121fb5c3",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001Pquv93KJu7p&auth=46abfa8646f0a5524ddaa14181fe8e092de888ea",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001Y2zoo36u1bP&auth=e37dfa96e61658d2cbb1bd914e802cc80fb104b3"
  },
  {
      "title": "我们的时光",
      "author": "赵雷",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003ITzMw2CRNZX&auth=2a1f4da5e751c1664b8e494aa7c1b3884027682d",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0007ujpB2dTrlW&auth=4f93f6a2d444f1c9775b2f48d419a922a0d987e8",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003ITzMw2CRNZX&auth=cc0dc3638ade9cef0e3da38f4f9e2181a9c616ee"
  },
  {
      "title": "Time To Pretend",
      "author": "MGMT",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=004MSi9720qzef&auth=dc44bdb720c5002c69843159667a07978c1957c6",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003upTuZ2mpAlh&auth=77dc73574142488bc5b05649a36ea72c10d593eb",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=004MSi9720qzef&auth=7e622d6adca61c58c1327f0b75c9c8cbc840bd3f"
  },
  {
      "title": "太早",
      "author": "刘允乐",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003ikqTz3tYjps&auth=f691121b7d6bbe3fdf0a9c377ab2ffc3d73a733e",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002IFHKY18Kssd&auth=02433a87a7a3ce3258f09c8cff1b9eeefc022a7d",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003ikqTz3tYjps&auth=debab76d7488001ed9d6325be55b5f3f1080db83"
  },
  {
      "title": "衡山路",
      "author": "小海",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=004VSeQx1n8Xeo&auth=2ec0b9fea043275d4dec17adacc719e615702cbd",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001dpcH61Xgaih&auth=bed553c9bde219f25a627c755861f84bb2ed4e6f",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=004VSeQx1n8Xeo&auth=e1262bd860be53bcd490341829a2e850cd880761"
  },
  {
      "title": "父亲写的散文诗",
      "author": "许飞",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001Z7M2S3GZVB0&auth=53aeddf56e9c915d7e17b4c4f73d0d555b36df01",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0019fEB249Kj98&auth=297da709937fab4df8f8ad308086b8f146eb821b",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001Z7M2S3GZVB0&auth=574d0610a6c100fa65a1e2fdfa98d83736c6d896"
  },
  {
      "title": "带着梦想去旅行",
      "author": "庄心妍",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003ezWUI4SrnJl&auth=5811c1827b48fdeb3220d181254c69379dd19dd6",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001atdrM4FqheR&auth=a99f9a86a80b1bc7a25fb4128cd23dc972166494",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003ezWUI4SrnJl&auth=e3bd535d530cc0f56250a36e498965b30aa8bfdb"
  },
  {
      "title": "许多年以后",
      "author": "赵鑫",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002EnySd2XNo46&auth=ec123ba9810db97183d0bede2968a67346bb483c",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=000y55NJ2Zjur6&auth=4fa9ab284654ffe9cb97507fc0dbfd642fa309c8",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002EnySd2XNo46&auth=c134fd4a88476d2147dfd1738e7600dc1558991f"
  },
  {
      "title": "See You Again",
      "author": "Wiz Khalifa / Charlie Puth",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=004RVNwY1KGhBM&auth=7b565bb442a308f39cf641bc26a9ec2111a41ee6",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003K7HZQ04YTIF&auth=4f3e447fe6b144cd99b647e576a50df1d6f337f4",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=004RVNwY1KGhBM&auth=21d398b5e7dc5e496263454ca23a2eabaf04e5f5"
  },
  {
      "title": "我要的光荣",
      "author": "MC吴迪",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=0040XBjI3anSqA&auth=51ba978d2e9b58c8379b5afff0146f6bba159f1c",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001zhlVx09nMkQ&auth=252579f50e4095849fd01b1d59bff6c2f1eccffe",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=0040XBjI3anSqA&auth=c7e832a8481a73dba1524eaacbaa96815f320834"
  },
  {
      "title": "Coming Home",
      "author": "Diddy - Dirty Money / Skylar Grey",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003z62Kq09B4AI&auth=f1cc9b67bf9fbb5ae3465db3639f5494f66fd779",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003KECmU0AH1e3&auth=78bd723f3df5ddc2100482c599e62653f5db6c7f",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003z62Kq09B4AI&auth=ef47cbc60860d362ff89a70e02c3e10971c77056"
  },
  {
      "title": "再见 再见",
      "author": "逃跑计划",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003qffit1l4mrq&auth=d1fbc2995403bba738a281f0868cc0b728b7701e",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=000wr4zc1gls3e&auth=27da721c474b2af925fea5d37cad02a5a3a21f6b",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003qffit1l4mrq&auth=92e55ce4d199b83f565cf8a3a7e92a1dcde39a60"
  },
  {
      "title": "重来",
      "author": "逃跑计划",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003G0sVN0lWqid&auth=3eb573402a7b01a84bbad2998398d06aa9d7622a",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002tusQo0OEBKz&auth=16b702bea0a46d7c260ff4a5f8c65511f3ed029a",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003G0sVN0lWqid&auth=52cb4392c157b7b90e426e2dc16ed8df9df41ccb"
  },
  {
      "title": "Look At You Girl",
      "author": "Chris Ledoux",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=0041diGm35PXpQ&auth=66d31c3be18754444a8f8a2d5827130642d2d7a3",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001yuPIC3V170c&auth=f1d6c72d9c2c6bcfdfd2dce5911e0fb20c80cee1",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=0041diGm35PXpQ&auth=8e598cf37a565010fc9813505b43fd8e90cc262f"
  },
  {
      "title": "Seve",
      "author": "Tez Cadey",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=004cNibC11gcZB&auth=5bee8bc7b3d9eee24f225c08b6a257d9da88150d",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002FamlA1vA69p&auth=6980cc024afb3b68b3d26c47afc79bcd92a6357f",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=004cNibC11gcZB&auth=34e26e989212badebeee21c6d5df8dcd24b20618"
  },
  {
      "title": "Mr.Man",
      "author": "满江",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=004bR1704XjT2f&auth=ae0108fd59ebe3864aa8e3b93d387811a7a86f62",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0007lSWH17iJbW&auth=b59271845a3d2f97157df8894f83fcb8187c4219",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=004bR1704XjT2f&auth=17137f08e3e9cef548fc73038f29f7641bf71648"
  },
  {
      "title": "有太多人",
      "author": "高进",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001jirBx1Oa80b&auth=50692528697afe81bb7495635893acd60ebfb733",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001eJvSx4KDaRy&auth=4110a63404b3a745177c4766e55b9c47e5cf0c47",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001jirBx1Oa80b&auth=bf9a5830a39b2d020711e488ab6157b2df618639"
  },
  {
      "title": "我们不一样",
      "author": "大壮",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003fxYr41uJVRG&auth=4af689ff3154bcf325201aa8aa590eeab963025b",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003fk65m1ZaCG2&auth=1fa9b12697875f9143e396494ae92ea2831e70b1",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003fxYr41uJVRG&auth=63361d0f1f154dadaa55b12dc48f2f640e6e7529"
  },
  {
      "title": "没那么简单",
      "author": "黄小琥",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003Ue6Ia32q4gl&auth=006becc890e1fea3ba1205a7359406f7a1847f20",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002Gbc9W0oOAS3&auth=ce9d824190f2c598a6edad6fc3a9f3c751164ed9",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003Ue6Ia32q4gl&auth=e3fbaebc0787af154475286be2285e87f3625d21"
  },
  {
      "title": "世外桃源",
      "author": "许巍",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=004XuHnz1XTup9&auth=53c9c568baffe5a6ad538e843aa12d2b43abe198",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003rsKF44GyaSk&auth=21e111f2c53fa4be5f857346612d15b3823d1fb0",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=004XuHnz1XTup9&auth=d0fb006da46bebfe21ce76e04583e808013bc4ba"
  },
  {
      "title": "平凡先生",
      "author": "贺一航",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=004eWLsY3gjtiD&auth=b0825f7e41f88fd58ae436b8e0f0e91903f84c62",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0016Bznb0Gp8Mh&auth=da9296a231fd2f0c7c72269cb0048a452565354d",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=004eWLsY3gjtiD&auth=6d9db33bd53d3dfe2c8eca04e3eb3f187bd63fc6"
  },
  {
      "title": "无限可能",
      "author": "丢火车乐队",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002TqHzK3c4dh5&auth=cc1c0b2c4135e6d830757aaee94ad4e51b2e47c1",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001mbG164E1j7C&auth=0459e8b2c6f47f51a734d385e3eb9868273d7003",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002TqHzK3c4dh5&auth=ab05f5c081edd25a0af587bb7a3b57599448df99"
  },
  {
      "title": "勉为其难",
      "author": "王冕",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002afwcR2qzs3y&auth=40780a64b74f7b5a0be0a37193a5f9ccbc372af4",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0048Pthf2KOhgc&auth=7b8e8a708519fa171147a7d4dad3f1a1f821697b",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002afwcR2qzs3y&auth=69450dae21def20b2327c1dda0ff38cbb2227a60"
  },
  {
      "title": "悟空传",
      "author": "赵英俊",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=0025im4p0vZYqx&auth=bca10b2a64f7047a8d553e478a5baf4c0b723171",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002RyzDh1e4Z1b&auth=31c18f1b74d309220b512c4fc49301441d242fa5",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=0025im4p0vZYqx&auth=37a7228b8806cd3a0a500f7b367130d7196a1f39"
  },
  {
      "title": "花街的流星",
      "author": "李克勤",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001bBBw41f89MK&auth=4c9f30561c37f3a7724a4a7bf126be07155a2698",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001c8ERn3oIjo9&auth=1b9e5b81e5999cd07769b937022e0fa7640e421c",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001bBBw41f89MK&auth=b154f3a410e8eecf2ac2bf04ec6720b895157e91"
  },
  {
      "title": "温柔乡",
      "author": "陈雅森",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=004bCDtr1vgt5V&auth=89964f340d85dd9b4e782a82b2bc9991a3c86d96",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003GVRHY09Wvem&auth=3094c769d4210e601677ad8c3db3029b60917132",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=004bCDtr1vgt5V&auth=87f81040995ffd6ebe0686634e49771b723d237c"
  },
  {
      "title": "不再犹豫",
      "author": "BEYOND",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=0033N6Jr4DvOl9&auth=e2ef546b9f444e68d4f0894a95eef1f7bc2f0112",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001Gikfw1MiLRm&auth=3d7cb671d999ea1c14abfa884ecb476888604fe4",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=0033N6Jr4DvOl9&auth=72de38171ce1e1ff0886f0b6f9d7f2811340461d"
  },
  {
      "title": "塑料袋",
      "author": "缝纫机乐队",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002l7DrZ3ucrF8&auth=6258dc9b0965f61f6b10fc2c4f0bcd2455fe725f",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001YfPBA0OhnOS&auth=2f4d54206a20f3789b691fa851b43c1ce9a2fa92",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002l7DrZ3ucrF8&auth=13a3dd2439f4463417035a1417aeae34e7e1d00d"
  },
  {
      "title": "给你们",
      "author": "张宇",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003lghpv0jfFXG&auth=ac6393dc9a52df535b131f488ea9a6563180df45",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001XrcgD3eUhTU&auth=316c43e1d731a51c2b30a7b5076762b7d24fe1ff",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003lghpv0jfFXG&auth=a313da3cc2fd85e9b1fca40b2c303d7abbb541a4"
  },
  {
      "title": "我的好兄弟",
      "author": "高进 / 小沈阳",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003VRK1m0Flfrt&auth=398cbb364668a9d73a2aa732bdeb61a0868620c6",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003K3RgX2rCkrB&auth=f2e4dbc62c831a179de6e024fecb4ce99646ac87",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003VRK1m0Flfrt&auth=55df0174760df004325b6f0b96b62f7d906b7fc3"
  },
  {
      "title": "男人",
      "author": "葛林",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001TfwSO0TvA1I&auth=017c6d10dcf125119e21c665f6de45d7ab695741",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002VGUz03uULK4&auth=64851b735325ed8795edf534261b419319cfb5c9",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001TfwSO0TvA1I&auth=bd8d4afcf95ea544cef8c5e0caac4824a1a26915"
  },
  {
      "title": "春风十里",
      "author": "鹿先森乐队",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001ngtbP040Rzf&auth=d41b128d719f8b7875a980fe2c7672e73fe0d691",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=004DRp8x4IC6Ab&auth=0ad9560f2bb81f10cd3345d9f60b90dfb084325d",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001ngtbP040Rzf&auth=bc371c48ea47c86898b441e3605fcc185688d3dc"
  },
  {
      "title": "成都",
      "author": "赵雷",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003TLWoN0gQnP5&auth=99b8125c1c565beea08db30c8de167630189c233",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003ltiMR4RSrgo&auth=e5c8d0acf73f05df7f216322a8b8cd27e3e48d26",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003TLWoN0gQnP5&auth=76a3a9bf5c5728ec4e04621d158fc017f75a192d"
  },
  {
      "title": "非酋",
      "author": "薛黛霏 / 朱贺",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003Naz5p1bcB7h&auth=b3bac70f390c6c7ef2ed99c85d77898e2ced9ade",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002mWqFa3dx5lQ&auth=804c21770362758c7a4c51880d519a35e86ea6a6",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003Naz5p1bcB7h&auth=5dcc993f7086d882868543a3e5b3326b3bbf9a3e"
  },
  {
      "title": "活着",
      "author": "郝云",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003A5jI63H2aMZ&auth=fe536ec36a450ea089108e5950b2e96a81ac6321",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001NrPTy4ACr6C&auth=6ab5ed7d0335188a5e9fd376152790f835ae7dd8",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003A5jI63H2aMZ&auth=a78217fc5c98d918e65546a13ad14dc4d5ad8c80"
  },
  {
      "title": "归来",
      "author": "满江",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000Adcu40OBTCu&auth=2a8cc5ab1ba21c712d81c714657a47bc31bb3abe",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0007lSWH17iJbW&auth=b59271845a3d2f97157df8894f83fcb8187c4219",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000Adcu40OBTCu&auth=2b3fb8bfe9fdd2355e77863bb743eacdf133b6c6"
  },
  {
      "title": "爱一点",
      "author": "王力宏 / 章子怡",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002HsogO0iKhf2&auth=f445b685b6f972649aa575be963c14afbf27bd04",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0019rBkH0xdGVc&auth=36876f68e5f60dfff34f11266698e4d411f332cd",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002HsogO0iKhf2&auth=2d5543e9f1394aec378aef470850391cdfc374cf"
  },
  {
      "title": "一生中最爱",
      "author": "谭咏麟",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003evjhg3qIe9S&auth=b9c64664aa79b35299ef09ed0741a1271d7a7c07",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0018tEZm032RCk&auth=f46366978c7c34c24edb23549d21656784e7f410",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003evjhg3qIe9S&auth=33cb3f4a0141ee22b51d2fa6aaf931c70aee075c"
  },
  {
      "title": "远走高飞",
      "author": "金志文 / 徐佳莹",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001MVT301EZOQr&auth=faccb0eec446d9167c264185c4e3c3e468e30c0b",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=004U936F0HXo1B&auth=d788f5cdec0b6db8b0416047d6c3b3187bc6fac7",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001MVT301EZOQr&auth=5cb82494ef43c760f7fde0edf0cd0cf7ae223923"
  },
  {
      "title": "想把我唱给你听",
      "author": "老狼 / 王婧",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001dsnaq0z9dYk&auth=99ab135295c13cdeb662180134993d49b0f150a6",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=000PO0jU10ipSb&auth=8b2b72cdcf71c0d2dcdcd283624ec29a7df49455",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001dsnaq0z9dYk&auth=4d03c89d5e7dfe71b7eb3696fd12b6e0603791ef"
  },
  {
      "title": "杀手",
      "author": "林俊杰",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=0020CMqs1PFDi6&auth=0076639695eafadd93b257c3e0f482fb339d2d17",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002byTjo3vFz40&auth=adc38b0362b13c79ef7201af4e3ddbb773545174",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=0020CMqs1PFDi6&auth=56e861c06b2ec102a9ddefa80c2de625fd757322"
  },
  {
      "title": "我爱你亲爱的姑娘",
      "author": "布衣乐队",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001fba0F453r4J&auth=090b1d126b70559e528f64d57364f6ae98222168",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001MeTuJ3JwH7H&auth=764410caf55ff706097b02f96f080a1aaa7662dd",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001fba0F453r4J&auth=eca6b3d1e9631b00d6872046fde3d5dd236838a3"
  },
  {
      "title": "I Hate Myself for Loving You",
      "author": "Joan Jett / Joan Jett & The Blackhearts",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001KOCkp34j92E&auth=103b261084e6441265d8e3180b2b865c1a30d550",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0027EzLy08PxrX&auth=25075320ff3d4ce2e9ee1d081836524dca0bf716",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001KOCkp34j92E&auth=6400853bdde416dfd50365fa5e363975650c87d0"
  },
  {
      "title": "秋城",
      "author": "丢火车乐队",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002uoft431Kx9n&auth=c7bc7f9379561a356b5a161a7aa9ca3491c53149",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0000uim52GsdpD&auth=7e15a03455b497c99620fd404b42e57b52ec58ac",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002uoft431Kx9n&auth=af57954561acde990e7d464b2c60654fbc7aae63"
  },
  {
      "title": "天涯",
      "author": "爱乐团王超",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=004LzZ2D3GgV4K&auth=7907e8560629bad1f9753dc1f9feb48805130d05",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002IKaAV1PpyPx&auth=497dad787b9d0e132918dfa58832582a3c84deeb",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=004LzZ2D3GgV4K&auth=14836b83ab20f44ea2d15ee61428bfedd8d9cbd0"
  },
  {
      "title": "Look At Me Now",
      "author": "Charlie Puth",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=004P7XSf3sJ074&auth=bd05075608498eb7b7fa6e8b08600649bdf5c677",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002LKchS4D8riK&auth=1ea597d5a407c80e383474ecb2941e6bd1e22499",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=004P7XSf3sJ074&auth=2b4c40d6109a09130c490b166449b6aaba8576b4"
  },
  {
      "title": "盗心贼",
      "author": "黑龙",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=0008qX7D4UiyjF&auth=d0804632a53b5091f6143e7114976a0c7f4ff149",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003X84mi3Ros8p&auth=b5982213489de6deda8823c73dd89c6f730a8b07",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=0008qX7D4UiyjF&auth=e9386850c3e15c3536b009cd3f226ad3b2c3cfb9"
  },
  {
      "title": "Battle Symphony",
      "author": "Linkin Park",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=0000Mq2o1kRYlO&auth=43be9ae295e20f18b2a5bc4b73c1e57f521a9eba",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=004XEwud03XB6I&auth=e4a39abde5b329bd007f5b1249f41a12f7cc3cc8",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=0000Mq2o1kRYlO&auth=95ff8bf7ad52e3c1eccb29aaa5e35b7bc6f5bd99"
  },
  {
      "title": "Clsr",
      "author": "Aash Mehta / The Chainsmokers / Halsey",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002dSLwt0v3Nv2&auth=5fdf3798e16fcae07266642b6517a93d9628f9f8",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=004XVFVD4ZyFTe&auth=d4686b2498e1cba6deda708fcbea5bb7fa10b282",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002dSLwt0v3Nv2&auth=b5dfc54722d9c807b973c7730abc176310dca384"
  },
  {
      "title": "迎着风",
      "author": "蓝波",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003YyyPi4QT2GE&auth=f76f174ba6dd83742d06af871ee5ebb5c34f18b1",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002BEvjW0MxgLl&auth=8a4ba8ba80a7c9f61934a7d765081ed7921f9732",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003YyyPi4QT2GE&auth=d2af194882e189a223274e61c97faec29d690567"
  },
  {
      "title": "我要找到你",
      "author": "陈明",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002Vk9vM2sZRza&auth=a2827ec8a3c3a9303a97c596335766876570d7d4",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002RHsFE3RfFF3&auth=063c38c4a3c840b2b93b21edac5906d5eab02206",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002Vk9vM2sZRza&auth=9daab13ae4b696fb5219296ec0131ab906405634"
  },
  {
      "title": "Stuttering",
      "author": "Fefe Dobson",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000d4aMe2NksJU&auth=405f5b44c75cc072b0e10153ff3461008f8c11e9",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002ZBYmb3RV24M&auth=ec12f3798830f3af1f7f30c0326a888324e38dbb",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000d4aMe2NksJU&auth=3deca3cc71a9c6226ed2c1463f285af7edd4ba05"
  },
  {
      "title": "恋人心",
      "author": "魏新雨",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000AiNwg0VofTx&auth=0a413d65825908a78818762c8d04e07ecc5e6212",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=000dqTau0GYZdL&auth=cde55fe50ec0777db790fc5820ff66f965e1fc51",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000AiNwg0VofTx&auth=1c04863637b3fc2033b6105196db06c2a614790b"
  },
  {
      "title": "Cry On My Shoulder",
      "author": "Alexander Klaws / Juliette Schoppmann / Daniel Küblbck",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002Siavv2kQbJ7&auth=c065f132b2a008869a35bdf3a5d5847c41cdea6e",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002ma2S64Gjtgl&auth=dda1b865ff9eb1d6156cd2b297d2176f42c3c5b5",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002Siavv2kQbJ7&auth=fe1ca5350752d23d1554bfcdf617ef4f49281e4f"
  },
  {
      "title": "寻水的鱼",
      "author": "许飞",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=0040AvfA1Kohrf&auth=b996ff4519ee801ede30dfe99c2502c08f36bd7d",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=000YdTLo0I37D0&auth=276bd52ae15087394ae2873e1d31756862946bb1",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=0040AvfA1Kohrf&auth=bbdc2ab3c03f788346dec9b2ee35a922ff8ad449"
  },
  {
      "title": "玫瑰花的葬礼",
      "author": "许嵩",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003CMXGI2yRUDo&auth=f050d1cc77cbcdb39834594f1fd66faf54a349c0",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001jmC6x1RMfh0&auth=c7a3eceb2afa106e8061a19347ff97a943df91d6",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003CMXGI2yRUDo&auth=30b43ad80729b4cb4b3579096dde07cf657faa1d"
  },
  {
      "title": "无地自容",
      "author": "黑豹乐队",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001ySQ2U322Igf&auth=0fd14bb1262ce0390b3deb95044db0953967f31f",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0031twt00VRrRw&auth=fea473ae12488ad00fad5bf4bb2a0a43106c2889",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001ySQ2U322Igf&auth=c175357c45c71e6a2e5de0480cfa861fe65b5637"
  },
  {
      "title": "雨一直下",
      "author": "张宇",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001e9dH11YeXGp&auth=aff9f527ca73182f9382b3a7d4bc82b5cafed268",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001XrcgD3eUhTU&auth=316c43e1d731a51c2b30a7b5076762b7d24fe1ff",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001e9dH11YeXGp&auth=5f8cccdac96bfbef941ee4f66c0b125baf9669c2"
  },
  {
      "title": "逆流时光",
      "author": "安图声乐队",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002uIKCQ15Ojut&auth=8b6f9714f288a6aee4edc5a812cbc39b4b342f06",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003rLmMn373IMM&auth=61858c3800da148688d207b4e01e3a6e028b643c",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002uIKCQ15Ojut&auth=12c32f33f3a607d1d39c5325b129751ce85b3e8f"
  },
  {
      "title": "Summertrain",
      "author": "Greyson Chance",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002O2OG60C8FQS&auth=2877a95da43206fb30b22a93a1152c2842d78920",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003iFCqj1rZ76E&auth=402e01a2c764ea26ba82bd91fb17300c09df866b",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002O2OG60C8FQS&auth=183cfd29bf175f2569f23b4c08d35f97c97024b0"
  },
  {
      "title": "晚安",
      "author": "丢火车乐队",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002tuQEr0y9oDj&auth=4d19bab3d9990efcd91eec2f55fea63dfad211ca",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001n9pZ94RPvVf&auth=868661083b818970364553f78713398522873d95",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002tuQEr0y9oDj&auth=2be2aaf3959eddbaa30dce659b0305c3ee09682b"
  },
  {
      "title": "Try",
      "author": "Colbie Caillat",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000k1XBL418ihA&auth=cd69b913bcfe0b9dc4abc07b3d1bb6a5a8232888",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001pJZM12HuDid&auth=e1f05b9d0da3411a278662c4e00dac8c15eb1571",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000k1XBL418ihA&auth=e6267f3e75b5a529fc425ae9fc500e5f88822e4b"
  },
  {
      "title": "On My Own",
      "author": "Ashes Remain",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003tbrYN3QNgDf&auth=2db07cf69e46aa504f23989940a6becce93caef0",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003rBuKI45MxNr&auth=e47579ef2bb5cc113bdb0b4e10bf87bf4b119aa3",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003tbrYN3QNgDf&auth=f3e733709c5f14e20296d82fc2929e5215a02655"
  },
  {
      "title": "丫头",
      "author": "王童语",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000yuaPY4TbGwb&auth=a467ab9111b7776b9e6f31dff3a86114b965a29a",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0032S6If2R3pJg&auth=7643a17798a30a871d0270d8265cf260af48e8bf",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000yuaPY4TbGwb&auth=7629f161cab39a1e84a67abc8a952ee7433b9377"
  },
  {
      "title": "为情所伤",
      "author": "庄心妍",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000WN0p44c6fvD&auth=17c70ed53f5d4a8c91678f981b948c392f7f5854",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=000v2BGN2IQd5n&auth=dfdd4248d71b33b87195a6651016b1fb9ab8542d",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000WN0p44c6fvD&auth=61b4726301b9dcf97c7cd570b435f596921cd2df"
  },
  {
      "title": "Apologize",
      "author": "Timbaland / OneRepublic",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003goMP61RK1mV&auth=fad6907863ae10c2462f53062398d57bb0be85dd",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003V9BFL4aZjC3&auth=d3488d7e71b4e01186377687d372d00b9ad0ee4b",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003goMP61RK1mV&auth=c2c6b033bb424b2f34bab0ff4b5d4c37f5f9bb1e"
  },
  {
      "title": "花香",
      "author": "许绍洋",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=00204aba13yGQk&auth=50ae61ea138711e444b92a166bb91c54c280a195",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002g6I7Z4Zg3oL&auth=0faf438f9d78d0741e5d8aed7f8d21fee618354b",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=00204aba13yGQk&auth=f59c6c9d43de0ee9844a60c7d7c7bd9187f487b3"
  },
  {
      "title": "私奔",
      "author": "郑钧",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002D5N7t1ElG97&auth=2cc0bae2cc0ce6deaec5689004bcd1589ce5de20",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0000mldb3osg5F&auth=3b23cbffa9eacdea1793b69ee33261c2bfe36980",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002D5N7t1ElG97&auth=160fb968b880d95bb0def153c5d179f755ca27bb"
  },
  {
      "title": "一万次悲伤",
      "author": "逃跑计划",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003k5eSn4Sb9ex&auth=081a51ad5c9dd084e2ee7f7760076870636c8ca7",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=000wr4zc1gls3e&auth=27da721c474b2af925fea5d37cad02a5a3a21f6b",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003k5eSn4Sb9ex&auth=0496edced8cc167da36d61c9a4d7b11ea7cc42bb"
  },
  {
      "title": "We Don't Talk Anymore",
      "author": "Charlie Puth / Selena Gomez",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002umG2J2FlA7S&auth=b7760a989edf4340e833d8627f5e11ed43485788",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0001QUHr0ZY6kM&auth=08916b34a65eca16fdfd5a37d25f1146dbb00287",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002umG2J2FlA7S&auth=c789feb1f6e4da4e58183118b11f357186580d30"
  },
  {
      "title": "放过自己",
      "author": "庄心妍",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002k0qa50C6eFn&auth=ce1b58d69399a65afeb00b8e2026819224c89ca0",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003hg1Zc4GzGni&auth=d6a84057208ce03063dde7eb58f7018110964419",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002k0qa50C6eFn&auth=77c92974e6fe4c1754f25eb07249e19964713659"
  },
  {
      "title": "Traveling Light",
      "author": "Joel Hanson",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002aSsIE42JCrm&auth=0fb4166a328c9a9bdfb870f3b89836eccb362fa4",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001SNoiN4EEEb7&auth=289b4e035cf96a1fcf645e974bb368d830d77c4c",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002aSsIE42JCrm&auth=56943fcdb3cdf805735131e5660badd96fe03d45"
  },
  {
      "title": "林中鸟",
      "author": "葛林",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001atNb13Mk3um&auth=c457f727831e2a89ab2c87d99db873d4ed4dcd1a",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=000TSwQz4E7Y4E&auth=6d68cc56fcf739b6ed2c56cc8e9ce8eb05b82011",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001atNb13Mk3um&auth=84896ddb3213b41d3ad4b622807a4204b28250ae"
  },
  {
      "title": "讲不出再见",
      "author": "谭咏麟",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=0049FHAV06nSRN&auth=8447a9ba8d24d750f9e993335316f7199574e1cc",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003vT1FQ0TOj1T&auth=af693ee61acc9faa78bce1d30ecefa2325b3dba8",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=0049FHAV06nSRN&auth=1b9734c1610bbede9c3ae2939103ce72e1630bdc"
  },
  {
      "title": "Dream It Possible",
      "author": "Delacey",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=004OU61t2MDxaO&auth=f6a9f95cdc731b2aad96fc94834da392f67df043",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0009CVRZ12EMIE&auth=9922603717882f41435078ad54def0473f2158e6",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=004OU61t2MDxaO&auth=94a65203a20f4c2713cf3e85199c3a19a350a2a7"
  },
  {
      "title": "不再联系",
      "author": "夏天Alex",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003xcdD80qLLgh&auth=a9c3ee694ab1438a0274640ce58e9f3180037c85",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0021K0Vj4S5pAQ&auth=4d360157c1dd5ad8e04854d3dc068bc2e978d663",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003xcdD80qLLgh&auth=6b6844f41c4ed54292070a8c43196819b2d8ab7d"
  },
  {
      "title": "丑八怪",
      "author": "薛之谦",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000QwTVo0YHdcP&auth=f1a8a2bbbcc4492fb46a26d88ddf3d17a9ab906c",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=000QgFcm0v8WaF&auth=6556ccc8a2e4884abcdb6a4abdec693d5ae47fe0",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000QwTVo0YHdcP&auth=20d147fe2aede57c893a7e8e9874b91bf11613ae"
  },
  {
      "title": "关不上的窗",
      "author": "周传雄",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003ACATV3kb8b0&auth=fba2b3b8ee2cfbd29927bec580a4413de52bc8fc",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002dDK2v1LkvKq&auth=f5dd7e88a7d3d3cc7954dae281f5c1b6fe1b8ae2",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003ACATV3kb8b0&auth=2247d50bea2676e78baa631e48926eccb2dad11a"
  },
  {
      "title": "Sugar",
      "author": "Maroon 5",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001lrqyg0FcPKk&auth=3b3008b240b16bec2af3a93029ed46a845faf7f1",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0006ftqt2nAMYV&auth=1d45ced357dc2f93b1f268b8a96f30486023c38e",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001lrqyg0FcPKk&auth=60c2cffb8f561e35fa9981bcf9f0c8ecfd2f9f58"
  },
  {
      "title": "下个，路口，见",
      "author": "李宇春",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=0022pL3x4cUlcy&auth=e63f3f000298b8d571f22a68d60fb2d043160e5a",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0022ODcI2Pm15E&auth=c4813dd48023c7c38d3ce0ef7a6309903bcdc8a9",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=0022pL3x4cUlcy&auth=f0718409a8a7128d34bd83d565a43849cf8935c0"
  },
  {
      "title": "飘摇",
      "author": "周迅",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000524z9415pc9&auth=cb70411860581183b666c65062a4ff15ed8035a0",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0039yHNI0KSZGi&auth=c279b50a562a2ba5df7b9d194b1cbcc763224562",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000524z9415pc9&auth=5b13cf3de405e49a7da906291d45963240901121"
  },
  {
      "title": "没有什么不同",
      "author": "曲婉婷",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003gab3g2kUMwd&auth=a8e0fae114c1815ca8c420c57e9ab41b2952dfd3",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001ZEgp33CTpK9&auth=70363b03f5bfc995db2bd40feb59b47076f4d971",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003gab3g2kUMwd&auth=2686125638e2f7f9658e5f0db189c86e51a8740c"
  },
  {
      "title": "刚刚好",
      "author": "薛之谦",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001TXSYu1Gwuwv&auth=af9d7712ad9504ed4957c45de7a1a1830950868d",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=000dcZ9I1nzO62&auth=d12f3a191c395a5391068e2e400a2354c40058ca",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001TXSYu1Gwuwv&auth=96f315242ea902d9b323befee4f74beda8ffbf30"
  },
  {
      "title": "暧昧",
      "author": "薛之谦",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003v4UL61IYlTY&auth=0180ebd0eb554d13bdcfc971eb5829cc8174a62c",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=001L7UIu3GXVtT&auth=06e97c0883724498ab79dbf94f4be610c1813471",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003v4UL61IYlTY&auth=ec5a3e3daf5060b5f33526aebddfa9d73e8be0fa"
  },
  {
      "title": "演员",
      "author": "薛之谦",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001Qu4I30eVFYb&auth=3827faed3fbc58cff9b14160c66b7b8a444d8f96",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003y8dsH2wBHlo&auth=4828e048572d5c284f7c6a5216bdc07a20a8ab20",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001Qu4I30eVFYb&auth=b1e87d25cc6bcd0e4279a062884e4df0cf54ff75"
  },
  {
      "title": "天下",
      "author": "张杰",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001BwR1R1Tz2Lf&auth=44aa8ebb01dc472c24f2e8e4b5a62467a7c4e13a",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0034bzu226F71i&auth=8bb6bdfbf498c8a604a683cc0bf86895eed3b43f",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001BwR1R1Tz2Lf&auth=c254708181a37f2bd4821add0116f499d3e71cb9"
  },
  {
      "title": "着魔",
      "author": "张杰",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000wpbOx3f6UDZ&auth=310bd4a5b5249f7101b2276e0143579f22e93ce1",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0028fiec4SdnGr&auth=241e72a325ee510bfc86eed3b8f81763da3f5e5e",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000wpbOx3f6UDZ&auth=032c7ac415e32c952a3ef6fe13ab7194fe5cb98d"
  },
  {
      "title": "逆战",
      "author": "张杰",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001RdTuq0aarsS&auth=86e2d622fbd2760968a23ad474177bdd4a1c0494",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002gnOZC4T8gXF&auth=be211404f23179ba61055abd23986cc919e118d7",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001RdTuq0aarsS&auth=5c5ac77b64653cb1cb1c4bc896daa0de9679d8eb"
  },
  {
      "title": "好久不见",
      "author": "陈奕迅",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=004M3yRr3kOfnS&auth=1b74ca5e026b779c1ed9a6b41d33b3ef4137070e",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003yQidc3s7P65&auth=5f02497a4e5ed2ef40b4d2b569c92bc03221d811",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=004M3yRr3kOfnS&auth=1bc1b256bf06c51e7f7b1f095abaae987f7150bb"
  },
  {
      "title": "十年",
      "author": "陈奕迅",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001OyHbk2MSIi4&auth=c95c7d38892954941b5de968e659cc7d47eb0d82",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=000GDz8k03UOaI&auth=3b38de5d9ec181a2039b9ffad0e2a82cae89c0f0",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001OyHbk2MSIi4&auth=ddebd5f745e66efe44ac8031306b84065fb053c7"
  },
  {
      "title": "浮夸",
      "author": "陈奕迅",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002ejEdb4KTwBw&auth=a9e266c7095d9dd3130fdf5c0ecb5319024ef6e6",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003J6fvc0bVJon&auth=542bc7b46dadaac12ca31e5a5a1e7c86ec34ac16",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002ejEdb4KTwBw&auth=3c7d2dd996db8d3a85ab66019463b40bcfce9fca"
  },
  {
      "title": "K歌之王",
      "author": "陈奕迅",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=003hjhJP0C1Gxh&auth=183961679aae0cb54a09ab978977733438db3f9a",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002X5NAN24f6TQ&auth=3d8622ad27ddba18b080c05b0cb90740b75c3a30",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=003hjhJP0C1Gxh&auth=ea45d20f75c92537494d03d9f5750cab15d229b8"
  },
  {
      "title": "不要说话",
      "author": "陈奕迅",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002B2EAA3brD5b&auth=945aa66b238b3e5d2b7115d6bbee5a693330a53c",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=000J1pJ50cDCVE&auth=11ee0b0a0635a5cda8ef77310898b937138bbc20",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002B2EAA3brD5b&auth=69e0cf23d566ca6fbf2518983bc02009d70a5a67"
  },
  {
      "title": "太多",
      "author": "陈冠蒲",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000avZ7R1PADbh&auth=184228cb5c862c3dc77b0781d652adfafb2f7211",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=003KQjyV0iODqP&auth=40647ad365bf33b98390d6dfea9f4e0fa45d64b0",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000avZ7R1PADbh&auth=f325824fd7b9551b8a1a3acd09a2773306f35cbe"
  },
  {
      "title": "浮躁",
      "author": "王菲",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=000WHG2f2pDyqX&auth=cfa6021e4fb90436701851228aaafdd0baef462e",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=0002oEts1trJQd&auth=bc25c9af1429119c1e1bb2c00a58012f3132fb6d",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=000WHG2f2pDyqX&auth=91cb8dfc67d0a5820490a8379771e9df208636b2"
  },
  {
      "title": "星星",
      "author": "牛奶咖啡",
      "url": "https://api.i-meto.com/meting/api?server=tencent&type=url&id=001A59Q72O2Nxq&auth=e24ba536976fc9b0030c60f9ccee1ae4d49adeaf",
      "pic": "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002ODwBN0CsRYL&auth=6371c942da2a2745d7e87984f9874ee858fa8f92",
      "lrc": "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=001A59Q72O2Nxq&auth=61af0885c6bd7504c631008b29a59d094c14f08a"
  }
];

function Layout(props) {
  const {
    children,
    noFooter,
    wrapperClassName
  } = props;
  const onPlay = () => {
    console.log('on play');
  };
  const onPause = () => {
    console.log('on pause');
  };
  // example of access aplayer instance
  const onInit = () => {
    console.log('aplayer init');
  };

  useKeyboardNavigation();
  const musicProps = {
    theme: '#2dabff',
    lrcType: 3,
    fixed: true,
    mini: true,
    autoplay: true,
    audio: Music
    /* audio: [
      {
        author: "张茜",
        lrc: "https://api.i-meto.com/meting/api?server=tencent&type=lrc&id=002bB5aL3osY5r&auth=3311392125e263306221cd74c985e4201567e762",
        pic: "https://api.i-meto.com/meting/api?server=tencent&type=pic&id=002VMYeB3hF0MQ&auth=f6b2fa4451f453e8d6b3990fe69c4f23d57acd60",
        title: "用力活着",
        url: "https://api.i-meto.com/meting/api?server=tencent&type=url&id=002bB5aL3osY5r&auth=abcfb36ce0e946e1e2fe861c33a3f7facda7db29",
      }
    ] */
  };
  return <LayoutProviders>
      <LayoutHead {...props} />

      <SkipToContent />

      <AnnouncementBar />

      <Navbar />

      <ReactAplayer
        {...musicProps}
        onInit={onInit}
        onPlay={onPlay}
        onPause={onPause}
      />

      <div className={clsx('main-wrapper', wrapperClassName)}>{children}</div>

      {!noFooter && <Footer />}
    </LayoutProviders>;
}

export default Layout;