$(function(){
  function buildHTML(message){
    var image = '';
    if (message.image) {
      Image = '<img src = ${message.image} class = "lower-message__image">'
    }

    var html = `<div class="chat-main__members--box">
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
})
})
