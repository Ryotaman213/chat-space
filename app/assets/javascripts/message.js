$(function(){
  function buildHTML(message){
    var image = '';
    if (message.image) {
      Image = '<img src = ${message.image} class = "lower-message__image">'
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
                  </div>
                </div>`;
    return html;
  }

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
      $('.Send').prop('disabled', false);
      scroll()
    })
    .fail(function(){
        alert('error')
        $('Send').prop('disabled', false);
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
