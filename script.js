$(".login").click(function() {
  let mes=$("input").val();
  alert("请输入你的用户名")
  $("h2").text(mes+"登陆成功");
});