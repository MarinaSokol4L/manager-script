Meteor.methods({
    'accounts.getAccountDetail': function(address) {
        this.unblock(); 
        let url = sanitizeUrl(API + '/auth/accounts/' + address);


      'accounts.getDelegation' (address, validator) {
        this.unblock();
        let url = `/cosmos/staking/v1beta1/validators/${validator}/delegations/${address}`;
        let delegations = fetchFromUrl(url);
        console.log(delegations);
        delegations = delegations && delegations.data.delegation_response;
        if (delegations && delegations.delegation.shares)
            delegations.delegation.shares = parseFloat(delegations.delegation.shares);
