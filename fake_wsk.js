//
// the is for demo purposes
//
var providerName = process.argv[2] || "github";
require('./lib/oauth_login').doLoginWithProvider(providerName);

