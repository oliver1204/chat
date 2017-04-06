$(document).ready(function() {
  // 文本消息 data mock
  var message1 = {
    messageid: '1',
    name: '布吉',
    time: '13:12:04',
    avatar: 'http://s7.mogujie.com/b7/avatar/130902/scccw_kqyvqn2dkfbewzcugfjeg5sckzsew_472x593.jpg',
    msgtype: '1',
    mtype: 'other',
    content: '好，给你一个橘子,好，给你一个橘子,好，给你一个橘子,好，给你一个橘子,好，给你一个橘子,好，给你一个橘子,'
  };
  var message10 = {
    messageid: '10',
    name: '布吉',
    time: '13:12:04',
    avatar: 'http://s7.mogujie.com/b7/avatar/130902/scccw_kqyvqn2dkfbewzcugfjeg5sckzsew_472x593.jpg',
    msgtype: '1',
    mtype: 'me',
    content: '好，给你一个橘子'
  };

  // 图片消息 data mock
  var message2 = {
    messageid: '2',
    name: '布吉',
    time: '13:12:14',
    content: '消息内容，内容内容',
    avatar: 'http://s7.mogujie.com/b7/avatar/130902/scccw_kqyvqn2dkfbewzcugfjeg5sckzsew_472x593.jpg',
    src: 'http://s7.mogujie.com/b7/pic/130916/scccw_kqywsslikfbhszdwgfjeg5sckzsew_280x210.gif_100x100.jpg',
    width: '200',
    height: '200',
    goodsTitle: '2017新款欧美简约女装百搭时尚娃娃领镶钻无袖雪纺衫小衫背心上衣',
    goodsPrice: '89.00',
    goodsPicurl: 'http://s12.mogujie.cn/b7/bao/130819/q22xe_kqyuuq3ikfbg2rdwgfjeg5sckzsew_400x600.jpg_100x100.jpg',
    msgtype: '2',
    mtype: 'other'
  };
  var message20 = {
    messageid: '20',
    name: '布吉',
    time: '13:12:14',
    content: '消息内容，内容内容',
    avatar: 'http://s7.mogujie.com/b7/avatar/130902/scccw_kqyvqn2dkfbewzcugfjeg5sckzsew_472x593.jpg',
    src: 'http://s7.mogujie.com/b7/pic/130916/scccw_kqywsslikfbhszdwgfjeg5sckzsew_280x210.gif_100x100.jpg',
    width: '100',
    height: '100',
    goodsTitle: '2017新款欧美简约女装百搭时尚娃娃领镶钻无袖雪纺衫小衫背心上衣',
    goodsPrice: '89.00',
    goodsPicurl: 'http://s12.mogujie.cn/b7/bao/130819/q22xe_kqyuuq3ikfbg2rdwgfjeg5sckzsew_400x600.jpg_100x100.jpg',
    msgtype: '2',
    mtype: 'me'
  };

  // 商品消息 data mock
  var message30 = {
    messageid: '30',
    name: '布吉',
    time: '13:12:04',
    avatar: 'http://s7.mogujie.com/b7/avatar/130902/scccw_kqyvqn2dkfbewzcugfjeg5sckzsew_472x593.jpg',
    src: 'http://s7.mogujie.com/b7/pic/130916/scccw_kqywsslikfbhszdwgfjeg5sckzsew_280x210.gif_100x100.jpg',
    width: '100',
    height: '100',
    goodsMsgId: '11112',
    title: '钻无袖雪纺衫小衫背心上衣',
    price: '89.00',
    pic: 'http://s12.mogujie.cn/b7/bao/130819/q22xe_kqyuuq3ikfbg2rdwgfjeg5sckzsew_400x600.jpg_100x100.jpg',
    msgtype: '3',
    mtype: 'other',
    goodsUrl: 'www.baidu.com'
  };

  // 商品消息 data mock
  var message3 = {
    messageid: '3',
    name: '布吉',
    time: '13:12:04',
    avatar: 'http://s7.mogujie.com/b7/avatar/130902/scccw_kqyvqn2dkfbewzcugfjeg5sckzsew_472x593.jpg',
    src: 'http://s7.mogujie.com/b7/pic/130916/scccw_kqywsslikfbhszdwgfjeg5sckzsew_280x210.gif_100x100.jpg',
    width: '100',
    height: '100',
    goodsMsgId: '11111',
    title: '2017新款欧美简约女装百搭时尚娃娃领镶钻无袖雪纺衫小衫背心上衣,2017新款欧美简约女装百搭时尚娃娃领镶钻无袖雪纺衫小衫背心上衣',
    price: '89.00',
    pic: 'http://s12.mogujie.cn/b7/bao/130819/q22xe_kqyuuq3ikfbg2rdwgfjeg5sckzsew_400x600.jpg_100x100.jpg',
    msgtype: '3',
    mtype: 'me',
    goodsUrl: 'www.baidu.com'
  };

  // 语音 data mock
  var message6 = {
    messageid: '6',
    name: '布吉',
    time: '13:12:04',
    avatar: 'http://s7.mogujie.com/b7/avatar/130902/scccw_kqyvqn2dkfbewzcugfjeg5sckzsew_472x593.jpg',
    msgtype: '6',
    mtype: 'me',
    voiceid: '2014-04-28-110509-8423EF5C29B-2059-4c51-91ED-2D91D043F5541gqwv2',
    voicetime: '1分',
    voiceisread: 'false'
  };
  var message60 = {
    messageid: '60',
    name: '布吉',
    time: '13:12:04',
    avatar: 'http://s7.mogujie.com/b7/avatar/130902/scccw_kqyvqn2dkfbewzcugfjeg5sckzsew_472x593.jpg',
    msgtype: '6',
    mtype: 'other',
    voiceid: '2014-04-28-110509-8423EF5C29B-2059-4c51-91ED-2D91D043F5541gqwv2',
    voicetime: '1分',
    voiceisread: 'false'
  };

  // history data
  var historys = [{
        name: '快刀',
        time: '13:12:24',
        content: '消息内容，内容内容<a href="http://mogujie.com/fUnZk" target="_blank">http://mogujie.com/fUnZk</a>',
        avatar: 'http://s7.mogujie.com/b7/avatar/130902/scccw_kqyvqn2dkfbewzcugfjeg5sckzsew_472x593.jpg',
        src: 'http://s7.mogujie.com/b7/pic/130916/scccw_kqywsslikfbhszdwgfjeg5sckzsew_280x210.gif_100x100.jpg',
        width: '100',
        height: '100',
        goodsTitle: '2013新款欧美简约女装百搭时尚娃娃领镶钻无袖雪纺衫小衫背心上衣',
        goodsPrice: '89.00',
        goodsPicurl: 'http://s12.mogujie.cn/b7/bao/130819/q22xe_kqyuuq3ikfbg2rdwgfjeg5sckzsew_400x600.jpg_100x100.jpg',
        msgtype: '1',
        mtype: 'me'
      }, {
        name: '布吉',
        time: '13:12:04',
        content: 'ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp',
        avatar: 'http://s7.mogujie.com/b7/avatar/130902/scccw_kqyvqn2dkfbewzcugfjeg5sckzsew_472x593.jpg',
        src: 'http://s7.mogujie.com/b7/pic/130916/scccw_kqywsslikfbhszdwgfjeg5sckzsew_280x210.gif_100x100.jpg',
        width: '100',
        height: '100',
        goodsTitle: '2013新款欧美简约女装百搭时尚娃娃领镶钻无袖雪纺衫小衫背心上衣',
        goodsPrice: '89.00',
        goodsPicurl: 'http://s12.mogujie.cn/b7/bao/130819/q22xe_kqyuuq3ikfbg2rdwgfjeg5sckzsew_400x600.jpg_100x100.jpg',
        msgtype: '1',
        mtype: 'me'
      }, {
        messageid: '3',
        name: '布吉',
        time: '13:12:04',
        avatar: 'http://s7.mogujie.com/b7/avatar/130902/scccw_kqyvqn2dkfbewzcugfjeg5sckzsew_472x593.jpg',
        src: 'http://s7.mogujie.com/b7/pic/130916/scccw_kqywsslikfbhszdwgfjeg5sckzsew_280x210.gif_100x100.jpg',
        width: '100',
        height: '100',
        goodsMsgId: '11111',
        title: '2017新款欧美简约女装百搭时尚娃娃领镶钻无袖雪纺衫小衫背心上衣,2017新款欧美简约女装百搭时尚娃娃领镶钻无袖雪纺衫小衫背心上衣',
        price: '89.00',
        pic: 'http://s12.mogujie.cn/b7/bao/130819/q22xe_kqyuuq3ikfbg2rdwgfjeg5sckzsew_400x600.jpg_100x100.jpg',
        msgtype: '3',
        mtype: 'me',
        goodsUrl: 'www.baidu.com'
      }, {
	      name: '布吉',
        time: '13:12:04',
        avatar: 'http://s7.mogujie.com/b7/avatar/130902/scccw_kqyvqn2dkfbewzcugfjeg5sckzsew_472x593.jpg',
        msgtype: '6',
        mtype: 'other',
	      voiceid: '2014-04-28-110509-8423EF5C29B-2059-4c51-91ED-2D91D043F5541gqwv2',
	      voicetime: '1分',
	      voiceisread: 'true'
	    }];

  // handle data
  message1 = JSON.stringify(message1);
  message10 = JSON.stringify(message10);
  message2 = JSON.stringify(message2);
  message20 = JSON.stringify(message20);
  message30 = JSON.stringify(message30);
  message3 = JSON.stringify(message3);
  message6 = JSON.stringify(message6);
  message60 = JSON.stringify(message60);
  historys = JSON.stringify(historys);

  // simulate send data
  sendMessage(message1);
  sendMessage(message10);
  sendMessage(message2);
  sendMessage(message20);
  sendMessage(message30);
  sendMessage(message3);
  sendMessage(message6);
  sendMessage(message60);

  setTimeout(function() {
    historyMessage(historys);
    // resendMessage();
  }, 1000);

  // onMessageSendFaild('10');


  // if ($('body').on) {
  //   // show dropdown
  //   if ($('body').mousedown) {
  //     $('body').on('mousedown', '.message_content', function(e){
  //       var target = $(e.currentTarget);

  //       if ( e.which === 3 && target.find('.message_text').length > 0 ) {
  //         $('.dropdown').hide();
  //         target.parents('.message').siblings('.dropdown').show();
  //         e.stopPropagation();
  //       }
  //     });
  //     $('body').on('mousedown', '.content', function(e) {
  //       var target = $(e.currentTarget);

  //       if ( e.which === 3 && target.find('.message_img').length > 0) {
  //         $('.dropdown').hide();
  //         target.parents('.message').siblings('.dropdown').show();
  //         e.stopPropagation();
  //       }
  //     })
  //   } else {
  //     $('body').click(function(e){
  //       var target = $(e.currentTarget);

  //       if(target.className === 'message_content' || target.className === 'message_img') {
  //         $('.dropdown').hide();
  //         target.parents('.message').siblings('.dropdown').show();
  //         e.stopPropagation();
  //       }
  //     });
  //   }

    // close dropdown
    $('body').on('click', function(e){
      var target = $(e.currentTarget);

      if(target.closest('.dropdown').length === 0){
        $('.dropdown').hide();
      }
    });

    // copy
    $('body').on('click', '.dropdown .copyText', function(){
      $('.dropdown').hide();
    });

    // delete
    $('body').on('click', '.dropdown .delete', function(e){
      $('.dropdown').hide();
      $(e.currentTarget).closest('.messages').remove();
    });

    // Copy Picture
    $('body').on('click', '.dropdown .copyPic', function(){
      $('.dropdown').hide();
    });

    // Save To Location
    // $('body').on('click', '.dropdown .saveToLocation', function(){
    //   $('.dropdown').hide();
    // });

    // play voice
    $('body').on('click', '.voice', function(e){
      var target = $(e.currentTarget);
      var voiceid = target.find('.J_voicebtn').attr('data-id');
      window.playVoice(voiceid);
    });

    // the parts title overflow to show '...'
    $('.goods_title_text').each(function(){
      var maxwidth = 44;
      if($(this).text().length > maxwidth){
        $(this).text($(this).text().substring(0, maxwidth));
        $(this).html($(this).html()+'...');
      }
    });
  // }

});
