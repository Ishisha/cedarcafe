("#myBtn").click(function(){
  $("#myModal").modal();
});

$('.btn').button(){
};

$ (document).ready (function() { 
    $('div').click (function() {
      $('div').hide();
    });
    
});

$(".box").click(function() {
	$(this).addClass("selected").siblings(".selected").removeClass("selected");
});
$(".submit").click(function() {
	var n1 = $(".a.selected").length;
	var n2 = $(".b.selected").length;
	if ((n1 >= n2)) {
		$("span").html("Try A Veggie Dish");
	}
	if ((n2 > n1)) {
		$("span").html("Try Any of Our Regular Dishes");
	}
});

var quotes = ['Lamb and Rice','Sprouts Mediterreano','Organic Insalate','Tasting Dishes','Stuffed Tomatoes','Kebab Platter','Falafel','Parfait','Lemon Cake', ]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}