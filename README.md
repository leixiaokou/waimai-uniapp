美团饿了么外卖优惠券小程序

##### 写在前言 

小程序本身很简单，具体原理就是个跳转。可以根据同名公众号里的文章实现。

介于加我的人咨询的比较多，啥奇怪的，问题都有，所以：
1、参考公众号里的文章，https://mp.weixin.qq.com/s/JHDWqBvntD0-p-dXEntSQQ
2、如果对具体的某个链接获取有疑惑请加知识星球，1对1，回答任何问题


3、实现不行，可以700全套源码，额外200包安装上线。

##### 采用手动后台管理模式来显示优惠券

所以只要请求一个管理后台列表 或者 把pages/index/index 的project写死即可。

##### 安装配置

接口请求地址：

* common/authorize.js 第1行的baseUrl基础请求地址，第75行左右的登录请求路经
* common/service.js 第13行左右config.baseUrl的全局l基础请求地址

应用相关配置：

Vue.prototype.wechatAppId = "12313"
Vue.prototype.templateId = "发送消息的模板" 
Vue.prototype.shareImage = "分享预览图"
Vue.prototype.contactImage = "用户联系方式地址"
Vue.prototype.raiseImage="赞赏码地址"

##### 线上demo

《吃喝优惠券》 ![img](https://www.indiehackers.net/uploads/photo/2020/0e158257-2495-47ac-ae62-6161ab757bde.png)

##### 联系作者

如有疑问请联系 phpcoder666， 或者关注《一只码》查阅文章获取小程序跳转链接
