const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
	{
        name: '欢迎您',
        artist: '光临',
        url: 'https://tsn.baidu.com/text2audio?tex=你好呀，欢迎您光临我的博客，有问题您可以点击右下角的在线客服，我会第一时间联系您，您也可以在留言区留言或者文章底部留言&lan=zh&cuid=123456&ctp=1&tok=24.9eea09bfce2e1f93f357997feaf25437.2592000.1565633141.282335-16799902',
        cover: 'http://img.ytmp3.cn/image/8.jpg',
      },
	{
        name: '黄沙',
        artist: '名决',
        url: 'http://www.ytmp3.cn/down/72418.mp3',
        cover: 'http://img.ytmp3.cn/image/8.jpg',
      },
	{
        name: '这个年纪',
        artist: '齐一',
        url: 'http://www.ytmp3.cn/down/35879.mp3',
        cover: 'http://img.ytmp3.cn/image/22.jpg',
      },
	  {
        name: '当真',
        artist: '蒋家驹[蒋蒋]&曲肖冰',
        url: 'http://www.ytmp3.cn/down/51714.mp3',
        cover: 'http://img.ytmp3.cn/image/80.jpg',
      },
	{
        name: "平凡之路",
        artist: '朴树',
        url: 'http://www.ytmp3.cn/down/59211.mp3',
        cover: 'http://p1.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg?param=130y130',
      },
	  {
        name: '这些民谣 - 一次听个够',
        artist: '翁大涵',
        url: 'http://www.ytmp3.cn/down/60222.mp3',
        cover: 'http://p2.music.126.net/Wx5GNJEpay2JbfVUJc4Aew==/109951163094853876.jpg?param=130y130',
      },
      {
        name: '你的酒馆对我打了烊',
        artist: '陈雪凝',
        url: 'http://www.ytmp3.cn/down/59770.mp3',
        cover: 'http://p1.music.126.net/LiRR__0pJHSivqBHZzbMUw==/109951163816225567.jpg?param=130y130',
      },
	  //爱毛毛，（毛不易）
	  {
        name: '像我这样的人',
        artist: '毛不易',
        url: 'http://www.ytmp3.cn/down/50667.mp3',
        cover: 'http://img.ytmp3.cn/image/71.jpg',
      },
	  {
        name: '消愁',
        artist: '毛不易',
        url: 'http://www.ytmp3.cn/down/53813.mp3',
        cover: 'http://img.ytmp3.cn/image/29.jpg',
      },
	  {
        name: '牧马城市',
        artist: '毛不易',
        url: 'http://www.ytmp3.cn/down/73199.mp3',
        cover: 'http://img.ytmp3.cn/image/96.jpg',
      },
	  
	  
	  //爱五月天，人生永远五月天
	  {
        name: '突然好想你',
        artist: '五月天',
        url: 'http://www.ytmp3.cn/down/31795.mp3',
        cover: 'http://img.ytmp3.cn/image/53.jpg',
      },
	  {
        name: '你不是真正的快乐',
        artist: '五月天',
        url: 'http://www.ytmp3.cn/down/52105.mp3',
        cover: 'http://img.ytmp3.cn/image/62.jpg',
      },
	  
	  //回不去的记忆  剑网三
	  {
        name: '眉间雪',
        artist: '诺言jason',
        url: 'http://www.ytmp3.cn/down/39112.mp3',
        cover: 'http://img.ytmp3.cn/image/75.jpg',
      },
	  {
        name: '业火苍云歌',
        artist: '诺言jason',
        url: 'http://www.ytmp3.cn/down/37022.mp3',
        cover: 'http://img.ytmp3.cn/image/51.jpg',
      }
    ]
});