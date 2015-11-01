Router.plugin('dataNotFound', { notFoundTemplate: 'NotFound' });

Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.route('/', { name: 'home' });
Router.route('/me', { name: 'profile' });
Router.route('/my-advices', { name: 'my-advices' });
