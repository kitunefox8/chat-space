







 $(function(){
  
  var search_list = $("#user-search-result");

  var user_list = $(".js-add-user");





  function appendUser(user) {
     var html =`<div class="chat-group-user clearfix" id="users">
                    <p class="chat-group-user__name">${user.name}</p>
                    <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                  </div>`



                
    search_list.append(html);
  }





  function appendErrMsgToHTML(msg) {
    var html = `<div class="chat-group-user clearfix" id="users">
                  <p class="chat-group-user__name" >${msg}</p>
                  
                </div>`
    search_list.append(html);
  }






  function buildHTML(name, user_id){
     
    var html =   `<div class='chat-group-user'>
                    <input name='group[user_ids][]' type='hidden' value='${user_id}'>
                    <p class='chat-group-user__name'>${name}</p>
                    <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
                  </div>`
                    
    user_list.append(html);
    
    }







  
    $("#user-search-field-list").on("keyup", function() {
      var input = $("#user-search-field-list").val();
      if(input == ""){
        $("#user-search-result").empty();
        return false;
      }
      



      
      $.ajax({ 
        url: '/users', 
        type: 'GET', 
        data: {keyword: input}, 
        dataType: 'json'
        })
        

        .done(function(users) {
          
          $("#users").empty();
          if (users.length !== 0) {
            users.forEach(function(user){
              appendUser(user);
            });
          }
          else {
            appendErrMsgToHTML("一致する映画はありません");
          }

          
        })
      
        .fail(function() {
          alert('error');
        })
      });
    

$(function(){  
  
  $(document).on('click', '.user-search-add', function(e){
    e.preventDefault();
    $('#users').remove("");
    
    

    
    
    
  
  var name = $(this).attr('data-user-name');
  var user_id = $(this).attr('data-user-id');

  buildHTML(name, user_id);
})
});

 

  $(function(){  
    $(document).on('click', '.user-search-remove', function(){
      $(this).parent().remove("");

    
     
    });
  });
});

 
  





 
