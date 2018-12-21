$(function(){
  function buildHTML(message){
    var image = '';
    if (message.image) {
      console.log('aaaaaaa');
     var image = `<img class="lower-message__image" src=${ message.image }>`
    }

    var html = `<div class="chat-main__members--box" data-message-id="${message.id}">
                  <div class="chat-main__members--chat">
                    ${ message.user_name }
                  </div>
                  <div class="message-date">
                    ${ message.time }
                  </div>
                  <div class="members-meesage">
                    <p class="message-content">
                      ${ message.content }
                    </p>
                    ${ image }
                  </div>
                </div>`;
    return html;
  }
  $(function(){
  setTimeout("$('.notice').fadeOut('slow')", 1000)
})

  function scroll() {
    $('.chat-container').animate({scrollTop: $('.chat-container')[0].scrollHeight});
}
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })

    .done(function(data){
      var html = buildHTML(data);
      $('.chat-container').append(html);
      $('.form__message').val('');
      $('input.Send').prop('disabled', false);
      $('form')[0].reset();
      scroll()
    })
    .fail(function(){
        alert('error')
        $('input.Send').prop('disabled', false);

    })
  $(function(){
    setInterval(update, 5000);
  });
  function update(){
  if (window.location.href.match(/\/groups\/\d+\/messages/))
      var message_id = $('.chat-main__members--box:last').data('message-id');
    $.ajax({
      url: location.href,
      type: 'GET',
      data: {
        id: message_id
      },
      dataType: 'json'
    })
    .done(function(messages){
      messages.forEach(function(message){
      var html =  buildHTML(message);
      $('.chat-container').append(html);
      $('.chat-container').animate({scrollTop: $('.chat-container')[0].scrollHeight});
      });
    });
  }
});
})
