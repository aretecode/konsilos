import '../template/navigation-bar.html'

Template.NavigationBar.onRendered(function() {
    this.$('.user.dropdown').dropdown();
});
