getHeaderLanguage = (context) => {
    const acceptedLanguagesString = headers.get('accept-language') || '';
    const acceptedLanguages = acceptedLanguagesString.split(/[,;]/).filter(e => e.indexOf('q=') === -1);
    const availableLanguages = T9n.getLanguages();
    const possibleLanguages = _.intersection(acceptedLanguages, availableLanguages);

    const acceptedLanguage = possibleLanguages && possibleLanguages[0];

    return acceptedLanguage;
}
getProfileLanguage = () => Meteor.user() && Meteor.user().profile.language;
getUserLanguage = () => getProfileLanguage() || getHeaderLanguage() || 'en';

if (Meteor.isClient) {
    Meteor.startup(() => {
        Session.set('showLoadingIndicator', true);

        Tracker.autorun(() => {
            const userLanguage = getUserLanguage();
            T9n.setLanguage(userLanguage);
            TAPi18n.setLanguage(userLanguage)
                .done(() => {
                    Session.set('showLoadingIndicator', false);
                    document.title = TAPi18n.__('future-advices');
                    Meteor.call('configureEmailTemplates', userLanguage);
                })
                .fail((error_message) => {
                    console.log(error_message);
                });
        });
    });
}
