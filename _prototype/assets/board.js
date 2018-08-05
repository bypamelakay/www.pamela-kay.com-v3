$(document).ready(function() {
  $.ajax({
    url: '/assets/data.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function(data) {
      // console.log(data);
      $(data.index.board).each(function(index, value) {
        console.log(value.url);
        $("#board > div > div:nth(" + index + ")").attr("style", "background-image: url(" + value.url + ")");
      });
    }
  });
});
