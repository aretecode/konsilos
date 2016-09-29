normalizeLanguageString = languageString => {
    let [baseLanguage, dialect] = languageString.split(/-/)
    const hasDialect = !!dialect
    baseLanguage = baseLanguage.toLowerCase()
    dialect = hasDialect && dialect.toUpperCase()

    //TODO Bug in tap:i18n prevents us from using pt-BR. Gotta tone it down to pt. Waiting for fix
    // return hasDialect ? `${baseLanguage}-${dialect}` : baseLanguage
    return baseLanguage
}

getLanguageFromHeader = () => {
    const acceptedLanguagesString = headers.get('accept-language') || ''
    const acceptedLanguages = [].concat(
        acceptedLanguagesString
        .split(/[,;]/)
        .filter(e => e.indexOf('q=') === -1)
    )
    let acceptedLanguage = acceptedLanguages[0]
    const parsedLanguage = normalizeLanguageString(acceptedLanguage)

    return parsedLanguage
}

getLanguageFromUserProfile = () => Meteor.user() && Meteor.user().profile && Meteor.user().profile.language

getLanguageFromSession = () => Session.get('userLanguage')

const DEFAULT_LANGUAGE = 'en'
getUserLanguage = () => (
    getLanguageFromUserProfile() ||
    getLanguageFromSession() ||
    getLanguageFromHeader() ||
    DEFAULT_LANGUAGE
)

changeAppLanguage = newLanguage => {
    const parsedLanguage = normalizeLanguageString(newLanguage)

    Session.set('userLanguage', parsedLanguage)
    T9n.setLanguage(parsedLanguage)
    return TAPi18n
        .setLanguage(parsedLanguage)
        .fail(console.log)
}

if (Meteor.isClient) {
    Meteor.startup(() => {
        Session.set('showLoadingIndicator', true)

        Tracker.autorun(() => {
            const userLanguage = getUserLanguage()

            changeAppLanguage(userLanguage)
                .done(() => {
                    Session.set('showLoadingIndicator', false)
                    Meteor.call('configureEmailTemplates', userLanguage)
                })
                .fail(console.log)
        });
    });
}
