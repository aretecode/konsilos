Router.plugin('dataNotFound', { notFoundTemplate: 'NotFound' });

Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.route('/', { name: 'home' });
Router.route('/me', { name: 'profile' });
