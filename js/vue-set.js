var newsc1 = new Vue({
  el: '#newsc1',
  data: {
    title: '新闻1标题',
	subtitle: '新闻1副标题',
	destext: "新闻1 介绍<br />支持html",
	media: 'https://cdn.mozhua.org/Media?name=16D86936BFEEC29A4F71E9714DBD6FF3.png',
	btn_click: "window.location.href='./news/first.html';",
	btn_text: "查看详情"
  }
}); //新闻卡片

var sharec1 = new Vue({
  el: '#sharec1',
  data: {
    title: '裁决者', //卡片标题
	subtitle: '作者：MBZZW漫步者之王', //副标题
	destext: "类型：第一人称平面狙击游戏<br />主要玩法：根据任务指示，狙杀所有敌人或指定敌人<br />游戏特色：枪械种类较丰富，弹药种类丰富，可装载不同弹药，有弹道系统，效果很赞的后坐力表现，卡壳等故障系统<br />进度：<br />武器已完成，可能会新增<br />贴图基本完成，后续关卡会增加<br />游戏机制基本完成", //介绍，有引号记得用转义符
	media: 'https://cdn.mozhua.org/Media?name=89303DA91F8D91288ED7452A1A3993C2.png', //头图
	btn_click: "window.open('https://www.aerfaying.com/Projects/364573');", //按钮点击触发的JS
	btn_text: "阿儿法营" //按钮文本
  }
}) //推荐作品

// 致DAY开发人员：食用方法
// 首先，到index.html 89行附近，复制一个卡片粘贴到下面，更改div的id
// 然后，回到这儿复制一个对应的设置，修改var名称及el绑定的div id
// 修改相应内容就可以了
// 删除卡片方法同理
// 妈妈再也不怕我的眼睛瞎了（bushi