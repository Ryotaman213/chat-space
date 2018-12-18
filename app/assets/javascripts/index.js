// $(function() {

// var user_list = $(".user-search-result");

//   function appendUser(user){
//     var html = `<div class="chat-group-user clearfix">
//                   <p class="chat-group-user__name">${user.name}
//                   <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
//                   </p>
//                 </div>`
//   user_list.append(html)
//   }

//   function appendNoUser(user) {
//     var html = `<div class='chat-group-user clearfix'>該当のユーザーはいません</div>`
//     user_list.append(html);
//   }

//   function addUser(userName, userId){
//     var html = `<div class='chat-group-user clearfix js-chat-member' id=${userId}>
//                   <input name='group[user_ids][]' type='hidden' value=${userId}>
//                   <p class='chat-group-user__name'>${userName}
//                   <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除
//                   </p>
//                   </a>
//                 </div>`
//   $("#chat-group-users").append(html);
//   }



//   $(".chat-group-form__input").on("keyup", function() {
//     var input = $(this).val();

//     $.ajax({
//       type: 'GET',
//       url: '/users',
//       data: { keyword: input },
//       dataType: 'json'
//     })

//     .done(function(users) {
//       $(".user-search-result").empty();
//       if (users.length !== 0) {
//         users.forEach(function(user){
//           appendUser(user);
//         });
//       }
//       else {
//         appendNoUser('該当のユーザーはいません');
//       }
//     })
//     .fail(function() {
//       alert('ユーザー検索に失敗しました');
//     });
//   });
//     $(document).on('click', '.user-search-add', function(){
//     $(this).parent().remove();
//     var userName = $(this).data('userName');
//     var userId = $(this).data('userId');
//     addUser(userName, userId);
//   });
//   $(document).on('click', '.user-search-remove', function(){
//     $(this).parent().remove();
//   })
// });
