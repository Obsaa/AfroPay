$('.message a').click(function(){
	$('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

$(".register-form").validate({
	rules: 
	{
		password:
		{
			required: true,
			minlength: 6,
			maxlength: 15
		},
		cfmPassword: 
		{
			equalTo: "#password",
			minlength: 6,
			maxlength: 15
		}
	},
	messages:
	{
		password:
		{
			required:"the password is required"
		}
	}
});