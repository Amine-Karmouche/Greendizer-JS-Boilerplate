/*Javascript Authentification

BasicAuth
*/
var client = new greendizer.authentication.BasicAuthClient('sellers', 'your@email.com', 'password');	
	client.init(function(){
		user = client.getUser();
		user.load(function(){
		}, function(response){
			console.error(response.getStatusCode());
		});
	}, true);


/*OAuth 2.0*/
var client_id ='123456';
var client_secret ='00000000000';
var scope ='read_account read_invoices';
var redirect_uri ='http://localhost/yourproject/index.html';
var implicitRedirectUri = 'http://localhost/yourproject/redirect.html';
var options = "";
var authParams = {"oAuthClientId":client_id, "oAuthRedirectUri":redirect_uri, "oAuthImplicitRedirectUri":implicitRedirectUri, "oAuthScopes":scope};
var client = new greendizer.oauth.SellerApplication(authParams,options);
client.init(function(authenticated, error){
	if(!authenticated)
		console.error(error);
	user = client.getUser();
	user.load(function(){
	}, function(response){
		console.error(response.getStatusCode());
	});
}, true);

/*Access Invoices*/
this.invoices = function(){
	var emails_node = user.getEmails().getAll();
	emails_node.init(function(authenticated, error){
		if(!authenticated)
			console.error(error);
		var res = emails_node.populate(function(res){
			for(i in res){
				var em_res = res[i].getInvoices().getAll();
				var uri = res[i].getInvoices().getURI();
			}	
		}
			);
	}, function(response){
		console.error(response.getStatusCode());
	}, true);
}

/*Access Settings*/
this.settings = function (){
	var settings = user.getSettings();
};

/*Access Digests*/
this.buyerhourlydigests = function (){
	var buyers_node = user.getBuyers().getAll();
	buyers_node.init(function(authenticated, error){
		if(!authenticated)
			console.error(error);
		var res = buyers_node.populate(function(res){
			var uri = res[0].getHours().getURI();
			for(i in res){
				var em_res = res[i].getHours().getAll();					
			}	
		}
			);
	}, function(response){
		console.error(response.getStatusCode());
	}, true);
};
