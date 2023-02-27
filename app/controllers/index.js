import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: 'i-i-s-book-club-2-1-book-l',
          icon: 'book',
          caption: i18n.t('forms.application.sitemap.книги.caption'),
          title: i18n.t('forms.application.sitemap.книги.title'),
          children: null
        }, {
          link: 'i-i-s-book-club-2-1-speaker-l',
          icon: 'briefcase',
          caption: i18n.t('forms.application.sitemap.спикеры.caption'),
          title: i18n.t('forms.application.sitemap.спикеры.title'),
          children: null
        }, {
          link: 'i-i-s-book-club-2-1-meeting-l',
          icon: 'calendar alternate',
          caption: i18n.t('forms.application.sitemap.встречи.caption'),
          title: i18n.t('forms.application.sitemap.встречи.title'),
          children: null
        }
      ]
    };
  }),
})