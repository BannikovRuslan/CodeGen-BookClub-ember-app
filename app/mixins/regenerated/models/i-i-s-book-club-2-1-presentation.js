import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  date: DS.attr('date'),
  rating: DS.attr('number'),
  urlPresentation: DS.attr('string'),
  urlVideo: DS.attr('string'),
  review: DS.attr('string'),
  speaker: DS.belongsTo('i-i-s-book-club-2-1-speaker', { inverse: null, async: false }),
  book: DS.belongsTo('i-i-s-book-club-2-1-book', { inverse: null, async: false }),
  meeting: DS.belongsTo('i-i-s-book-club-2-1-meeting', { inverse: 'presentation', async: false })
});

export let ValidationRules = {
  date: {
    descriptionKey: 'models.i-i-s-book-club-2-1-presentation.validations.date.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  rating: {
    descriptionKey: 'models.i-i-s-book-club-2-1-presentation.validations.rating.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  urlPresentation: {
    descriptionKey: 'models.i-i-s-book-club-2-1-presentation.validations.urlPresentation.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  urlVideo: {
    descriptionKey: 'models.i-i-s-book-club-2-1-presentation.validations.urlVideo.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  review: {
    descriptionKey: 'models.i-i-s-book-club-2-1-presentation.validations.review.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  speaker: {
    descriptionKey: 'models.i-i-s-book-club-2-1-presentation.validations.speaker.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  book: {
    descriptionKey: 'models.i-i-s-book-club-2-1-presentation.validations.book.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  meeting: {
    descriptionKey: 'models.i-i-s-book-club-2-1-presentation.validations.meeting.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('bcember_PresentationE', 'i-i-s-book-club-2-1-presentation', {
    date: attr('Date', { index: 0 }),
    rating: attr('Rating', { index: 1 }),
    urlPresentation: attr('Url presentation', { index: 2 }),
    urlVideo: attr('Url video', { index: 3 }),
    review: attr('Review', { index: 4 }),
    speaker: belongsTo('i-i-s-book-club-2-1-speaker', 'Speaker', {
      firstName: attr('First name', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'firstName' }),
    book: belongsTo('i-i-s-book-club-2-1-book', 'Book', {
      title: attr('Title', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'title' })
  });

  modelClass.defineProjection('fdesigner_PresentationE', 'i-i-s-book-club-2-1-presentation', {
    date: attr('Date', { index: 0 }),
    rating: attr('Rating', { index: 1 }),
    urlPresentation: attr('Url presentation', { index: 2 }),
    urlVideo: attr('Url video', { index: 3 }),
    review: attr('Review', { index: 4 }),
    speaker: belongsTo('i-i-s-book-club-2-1-speaker', 'Speaker', {
      firstName: attr('First name', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'firstName' }),
    book: belongsTo('i-i-s-book-club-2-1-book', 'Book', {
      title: attr('Title', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'title' })
  });

  modelClass.defineProjection('PresentationE', 'i-i-s-book-club-2-1-presentation', {
    date: attr('Дата Доклада', { index: 0 }),
    rating: attr('Оценка книги', { index: 1 }),
    urlPresentation: attr('Презентация (url)', { index: 2 }),
    urlVideo: attr('Видео (url)', { index: 3 }),
    review: attr('Рецензия', { index: 4 }),
    speaker: belongsTo('i-i-s-book-club-2-1-speaker', 'Спикер', {
      firstName: attr('~', { index: 6, hidden: true }),
      middleName: attr('~', { index: 7, hidden: true }),
      lastName: attr('~', { index: 8, hidden: true })
    }, { index: 5, displayMemberPath: 'firstName' }),
    book: belongsTo('i-i-s-book-club-2-1-book', 'Книга', {
      title: attr('~', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'title' })
  });
};
