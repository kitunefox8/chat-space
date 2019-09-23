
$(function(){
  function buildHTML(message){
    var content = message.content ? `${ message.content }` : "";
    var img = message.image ? `<img src= ${ message.image }>` : "";
    var html =   `<div class="upper-message" data-id="${message.id}>
                    <div class="upper-message__user-name">
                       ${message.user_name}      
                    </div>
                    <div class="upper-message__date">
                       ${message.date }  
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">
                      ${content}
                    </p>
                      ${img}                                     
                  </div>`
                     
    return html;
  }
  
  function scrollBottom(){
    var target = $('.message').last();
    var position = target.offset().top + $('.messages').scrollTop();
    $('.messages').animate({
      scrollTop: position
    }, 300, 'swing');
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    // console.log(this);
    var formData = new FormData(this);
    var url = $(this).attr('action');
    // debugger;
    
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.new_message').val('')
      scrollBottom();
    })
    .fail(function(){
      alert('エラーが発生したためメッセージは送信できませんでした。');
    })
    .always(function(){
      $('.submit-btn').prop('disabled', false);
    })
  })
});

// == null) {.append(`</img>`)}
// else html = $(html).append(`<img class="lower-message__image" src=`+ message.image.url +`>`)
// {/* <img class="lower-message__image" src= ${message.image} ></img> */}