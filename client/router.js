Router.plugin('dataNotFound', { notFoundTemplate: 'NotFound' });

Router.route('/', function () {
    this.render('Home');
});

Router.route('/me', function () {
    this.render('Profile');
});

Router.configure({
    layoutTemplate: 'ApplicationLayout'
});
