getHeaderLanguage = () => {
    const acceptedLanguagesString = headers.get('accept-language') || ''
    const acceptedLanguages = [].concat(
        acceptedLanguagesString
        .split(/[,;]/)
        .filter(e => e.indexOf('q=') === -1)
    )
    let acceptedLanguage = acceptedLanguages[0]
    let [baseLanguage, dialect] = acceptedLanguage.split(/-/)
    dialect = dialect && dialect.toUpperCase() || ''
    acceptedLanguage = `${baseLanguage}-${dialect}`

    //TODO Bug in tap:i18n prevents us from using pt-BR. Gotta tone it down to pt. Waiting for fix
    // return acceptedLanguage
    return baseLanguage
}

const DEFAULT_LANGUAGE = 'en'
getProfileLanguage = () => Meteor.user() && Meteor.user().profile.language
getUserLanguage = () => getProfileLanguage() || getHeaderLanguage() || DEFAULT_LANGUAGE

if (Meteor.isClient) {
    Meteor.startup(() => {
        Session.set('showLoadingIndicator', true)

        Tracker.autorun(() => {
            const userLanguage = getUserLanguage()

            T9n.setLanguage(userLanguage)
            TAPi18n
                .setLanguage(userLanguage)
                .done(() => {
                    Session.set('userLanguage', userLanguage)
                    Session.set('showLoadingIndicator', false)
                    Meteor.call('configureEmailTemplates', userLanguage)
                })
                .fail(console.log)
        });
    });
}
