Welcome to Greendizer Boilerplate

#Contents
This is a JavaScript starter project using OAuth 2.0/BasicAuth for authentication.
This boilerplate enables you to start your first Javascript powered Greendizer application.
The provided code enables you (as a seller) to display the user settings along with listing invoices and hourly digests. Consult the greendizer reference if need be.

Greendizer is a new kind of invoicing system.
It turns the invoices sent with it to an extremely rich source of data for business intelligence and process automation.
Check out [the Greendizer website](https://www.greendizer.com/) for more information.

#Requirements
In order to use this boilerplate you need to include the following:
* [Greendizer Javascript Library](https://js.greendizer.com) which includes OAuth and BasicAuth

#About authentication
The OAuth flow used is the "Authorization Code Grant" for client/server applications
In order to perform authentication, please modify the credentials by the ones provided to you upon registration of your application; namely:
* client_id
* client_secret
* email

BasicAuth requires:
* A valid email registered at Greendizer
* A password