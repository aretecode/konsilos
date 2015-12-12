T9n.setLanguage('en');

Router.configure({
    layoutTemplate: 'ApplicationLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'PageNotFound',
    yieldTemplates: {
        NavigationBar: { to: 'nav' },
        Footer: { to: 'footer' },
    }
});

////////////////
// Before hooks:
////////////////

// Render loading spinner if user is still being logged in:
Router.onBeforeAction(function(){
    if (Meteor.loggingIn()) {
        this.render('Loading')
    } else {
        this.next();
    }
});

//TODO should we change to "DataNotFound"?
Router.plugin('dataNotFound', { notFoundTemplate: 'PageNotFound' });

//Routes
Router.route('/', { name: 'home' });
Router.route('/me', { name: 'profile' });
Router.route('/my-advices', { name: 'my-advices' });
Router.route('/my-family', { name: 'my-family' });
Router.route('/sign-out', {
    name: 'sign-out',
    onBeforeAction: () => {
        AccountsTemplates.logout();
        this.next();
    }
});

//TODO Home page with login
Router.plugin('ensureSignedIn');

AccountsTemplates.configure({
    //defaultLayout: 'emptyLayout',
    showForgotPasswordLink: true,
    overrideLoginErrors: true,
    enablePasswordChange: true,
    sendVerificationEmail: true,

    //enforceEmailVerification: true,
    //confirmPassword: true,
    //continuousValidation: false,
    //displayFormLabels: true,
    //forbidClientAccountCreation: false,
    //formValidationFeedback: true,
    //homeRoutePath: '/',
    //showAddRemoveServices: false,
    //showPlaceholders: true,

    negativeValidation: true,
    positiveValidation:true,
    negativeFeedback: false,
    positiveFeedback:true,

    // Privacy Policy and Terms of Use
    //privacyUrl: 'privacy',
    //termsUrl: 'terms-of-use',
});

AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
