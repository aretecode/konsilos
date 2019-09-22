import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          page_title__advice: 'Advice',
          page_title__family: 'Family',

          nav__home: 'Home',
          nav__advice: 'Advice',
          nav__family: 'Family',
          nav__profile: 'Profile',
          nav__login: 'Login',
          nav__logout: 'Logout',
          copyright: 'All rights reserved',

          eternalize_advice__title: 'Eternize advices to your children',
          eternalize_advice__body: `Think of all advices and experiences that have impacted you
          positively. Now image your children's future if you could share
          all of these in the right moment of their lives.`,

          leave_your_legacy__title: 'Leave your legacy',
          leave_your_legacy__body_1: `Think about advices, books, movies, experiences and everything
          else that helped you become a better and more prepared person. Now
          imagine being able to transform them in powerful and inspiring
          advices to your children too! We want to help you remember to
          share them in the right occasion or the ideal age, even if you are
          not there anymore.`,
          leave_your_legacy__body_2: `We want to help you remember to share them in the right occasion
          or the ideal age, even if you are not there anymore.`,

          simple__title: `Simple. Powerful. Konsilos.`,
          simple__body: ` We believe good advices can change people. Konsilos is an
          initiative to encourage parents to eternize advices to their
          children through an easy platform, secure and free. From a
          computer or mobile device, anyone can create an account, start to
          register advices, be notified in the future and let everything to
          their children eternized in time capsules.`,

          macbook_section__title: `Register Several Advices`,
          macbook_section__body: `They can be about life, books to be read, movies to be watched
          or whatever you want. Choose who will receive the advice and
          point out why it matters. You can edit them at any time.`,

          ipad_section__title: `Notifications and Time Capsule`,
          ipad_section__body: `You are in control. You decide when and we will remind you to
          give an advice. It can be a specific date or when your children
          reach a certain age. Additionally, your children will be able to
          access all advices in time capsule programmed by you. Just
          imagine their reaction when seeing different advices being
          unlocked in different moments of their lives.`,

          features_free__title_1: `Free,`,
          features_free__title_2: `Forever!`,
          features_free__body: `We're a nonprofit and open source initiative, thought and built
          by volunteers who share our values from different places around
          the world. We also benefit from the support from people and
          companies that believe in our idea.`,

          features_privacy__title_1: `Your Advices,`,
          features_privacy__title_2: `Forever Yours`,
          features_privacy__body: `Security, privacy, backup, freedom and availability. Only you
          and your children have access to the advices. And you are free
          to download your advices and leave the system at any time.`,

          time_capsule: 'Time Capsule',
          subscribe: 'Subscribe',

          form_advice__kind: '',
        },
      },
      pt: {
        translations: {
          time_capsule: 'Cápsula do Tempo',

          copyright: 'Um amanhã melhor, hoje.',
          copyright2: 'Todos os direitos reservados',
          subscribe: 'Inscrever-se',

          eternalize_advice__title: 'Eternize conselhos para seus filhos',
          eternalize_advice__body: `Pense em todos os conselhos e experiências que te impactaram positivamente. Agora imagine o futuro dos seus filhos se você puder compartilhar tudo isso no momento certo da vida deles.`,

          leave_your_legacy__title: 'Deixe seu legado',
          leave_your_legacy__body_1: `Pense nos conselhos, livros, filmes, experiências e tudo mais que te tornou uma pessoa melhor e mais preparada para a vida. Imagine agora ser capaz de transformá-los em poderosos e inspiradores conselhos para seus filhos também!`,
          leave_your_legacy__body_2: `Nós queremos te ajudar a lembrar de transmiti-los na ocasião ou idade ideal, mesmo quando você não estiver mais presente. Registrar e ser relembrado no tempo certo desses conselhos pode fazer toda a diferença na vida deles.`,

          simple__title: `Simples. Poderoso. Konsilos.`,
          simple__body: `Acreditamos que bons conselhos podem mudar as pessoas. Por isso o Konsilos é uma iniciativa para encorajar pais a eternizarem conselhos para seus filhos através de uma plataforma simples, segura e gratuita. Usando um computador ou dispositivo móvel, qualquer pessoa pode criar uma conta, começar a registrar conselhos, ser notificado no futuro e deixar tudo eternizado para seus filhos em cápsulas do tempo.`,

          macbook_section__title: `Registre Vários Conselhos`,
          macbook_section__body: `Eles podem ser sobre a vida, livros a serem lidos, filmes a serem assistidos ou o que você quiser. Escolha quem vai receber o conselho e fale da sua importância. Você pode editá-los a qualquer momento.`,

          ipad_section__title: `Notificações e Cápsula do Tempo`,
          ipad_section__body: `Você está no controle. Você diz quando e nós te notificaremos para transmitir cada conselho. Pode ser em uma situação específica ou em uma determinada idade do seu filho. Além disso, seus filhos poderão acessar todos os conselhos em cápsulas do tempo programadas por você. Imagine só a emoção deles ao verem conselhos desbloqueados em diferentes momentos de suas vidas.`,

          features_free__title_1: `Gratuito,`,
          features_free__title_2: `Para Sempre!`,
          features_free__body: `Somos uma iniciativa sem fins lucrativos e de código livre, idealizada e construída por voluntários de diferentes lugares do mundo que compartilham dos mesmos valores. Além disso, contamos com o apoio de pessoas e empresas que acreditam no nosso ideal.`,

          features_privacy__title_1: `Seus Conselhos,`,
          features_privacy__title_2: `Sempre Seus!`,
          features_privacy__body: `Segurança, privacidade e liberdade. Somente você e seus filhos têm acesso aos conselhos. Você é livre para a qualquer momento exportá-los e deixar de usar o sistema. As cápsulas do tempo só podem ser acessadas por chaves que só você sabe. Entregue-as para seus filhos quando achar que é o momento certo.`,

          add_advice: 'Adicionar um novo conselho',
          add_family_member: 'Adicionar novo membro da família...',

          advice_type_life: 'Sobre a Vida',
          advice_type_experience: 'Ter uma Experiência',
          advice_type_advice: 'Apenas um Conselho',
          advice_type_book: 'Ler um Livro',
          advice_type_movie: 'Assistir um Filme',

          form_advice__kind: 'Que tipo de conselho você quer eternizar?',
          form_advice__family_member: ' Filho(a)',
          form_advice__happened_on: 'Numa data específica...',
          form_advice__available_on: ' Escolha a data',

          verify: 'Clique para verificar seu email',
          advices_creation_title: 'Registre Vários Conselhos',
          advices_creation_body: `Eles podem ser sobre a vida, livros a serem lidos, filmes a serem assistidos ou o que você quiser. Escolha quem vai receber o conselho e fale da sua importância. Você pode editá-los a qualquer momento.`,

          // no-advice-yet: Sem conselhos eternizados ainda! O futuro lhe aguarda! Vá em frente e adicione alguns!
          // not-here-yet: 'Ainda não está aqui:'
        },
      },
    },
    fallbackLng: 'en',
    debug: false,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    // we use content as keys
    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
