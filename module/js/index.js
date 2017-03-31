$(document).ready(function() {
  // mock data
  var message1 = {
    name: '布吉',
    time: '13:12:04',
    avatar: 'http://s7.mogujie.com/b7/avatar/130902/scccw_kqyvqn2dkfbewzcugfjeg5sckzsew_472x593.jpg',
    msgtype: '1',
    mtype: 'other',
    voiceid: '2014-04-28-110509-8423EF5C29B-2059-4c51-91ED-2D91D043F5541gqwv2',
    voicetime: '1分',
    voiceisread: 'true',
    content: 'hi'
  };

  var message10 = {
    name: '布吉',
    time: '13:12:04',
    avatar: 'http://s7.mogujie.com/b7/avatar/130902/scccw_kqyvqn2dkfbewzcugfjeg5sckzsew_472x593.jpg',
    msgtype: '1',
    mtype: 'other',
    voiceid: '2014-04-28-110509-8423EF5C29B-2059-4c51-91ED-2D91D043F5541gqwv2',
    voicetime: '1分',
    voiceisread: 'true',
    content: '我想要一个橘子'
  };

  var message11 = {
    name: '布吉',
    time: '13:12:04',
    avatar: 'http://s7.mogujie.com/b7/avatar/130902/scccw_kqyvqn2dkfbewzcugfjeg5sckzsew_472x593.jpg',
    msgtype: '1',
    mtype: 'me',
    voiceid: '2014-04-28-110509-8423EF5C29B-2059-4c51-91ED-2D91D043F5541gqwv2',
    voicetime: '1分',
    voiceisread: 'true',
    content: '好，给你一个橘子,好，给你一个橘子,好，给你一个橘子,好，给你一个橘子,好，给你一个橘子,好，给你一个橘子,'
  };

  var message6 = {
    name: '布吉',
    time: '13:12:04',
    avatar: 'http://s7.mogujie.com/b7/avatar/130902/scccw_kqyvqn2dkfbewzcugfjeg5sckzsew_472x593.jpg',
    msgtype: '6',
    mtype: 'me',
    voiceid: '2014-04-28-110509-8423EF5C29B-2059-4c51-91ED-2D91D043F5541gqwv2',
    voicetime: '1分',
    voiceisread: 'false'
  };

  // handle data
  message1 = JSON.stringify(message1);
  message6 = JSON.stringify(message6);

  message10 = JSON.stringify(message10);
  message11 = JSON.stringify(message11);

  // simulate send data
  sendMessage(message1);

  setTimeout(function() {
    sendMessage(message6);
    sendMessage(message10);
    sendMessage(message11);
    // historyMessage(message1);
  }, 1000);

  if ($('body').on) {
    // show dropdown
    if ($('body').mousedown) {
      $('body').on('mousedown', '.message_content', function(e){
        var target = $(e.currentTarget);

        if ( e.which === 3 && target.find('.message_text').length > 0 ) {
          e.preventDefault ? e.preventDefault() : (e.returnValue = false);
          $('.dropdown').hide();
          target.parents('.message').siblings('.dropdown').show();
          e.stopPropagation();
        }
      });
    } else {
      $('body').click(function(e){
        var target = $(e.currentTarget);

        if(target.className === 'message_content') {
          $('.dropdown').hide();
          target.parents('.message').siblings('.dropdown').show();
          e.stopPropagation();
        }
      });
    }

    // close dropdown
    $('body').on('click', function(e){
      var target = $(e.currentTarget);

      if(target.closest('.dropdown').length === 0){
        $('.dropdown').hide();
      }
    });

    // copy
    $('body').on('click', '.dropdown .copy', function(){
      $('.dropdown').hide();
    });

    // delete
    $('body').on('click', '.dropdown .delete', function(e){
      $('.dropdown').hide();
      $(e.currentTarget).closest('.messages').remove();
    });

    // 播放语音
    $('body').on('click', '.voice', function(e){
      var target = $(e.currentTarget);
      var voiceid = target.find('.J_voicebtn').attr('data-id');
      window.playVoice(voiceid);
    });
  }

});
