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

  modelClass.defineProjection('PresentationBook', 'i-i-s-book-club-2-1-presentation', {
    date: attr('????????', { index: 0 }),
    speaker: belongsTo('i-i-s-book-club-2-1-speaker', '??????????????', {
      lastName: attr('??????????????', { index: 1 }),
      firstName: attr('??????', { index: 2 }),
      middleName: attr('????????????????', { index: 3 })
    }, { index: -1, hidden: true }),
    meeting: belongsTo('i-i-s-book-club-2-1-meeting', '', {
      date: attr('', { index: 4, hidden: true })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('PresentationE', 'i-i-s-book-club-2-1-presentation', {
    date: attr('???????? ??????????????', { index: 0 }),
    rating: attr('???????????? ??????????', { index: 1 }),
    urlPresentation: attr('?????????????????????? (url)', { index: 2 }),
    urlVideo: attr('?????????? (url)', { index: 3 }),
    review: attr('????????????????', { index: 4 }),
    speaker: belongsTo('i-i-s-book-club-2-1-speaker', '????????????', {
      firstName: attr('~', { index: 6, hidden: true }),
      middleName: attr('~', { index: 7, hidden: true }),
      lastName: attr('~', { index: 8, hidden: true })
    }, { index: 5, displayMemberPath: 'firstName' }),
    book: belongsTo('i-i-s-book-club-2-1-book', '??????????', {
      title: attr('~', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'title' })
  });

  modelClass.defineProjection('PresentationSpeaker', 'i-i-s-book-club-2-1-presentation', {
    date: attr('???????? ??????????????????????', { index: 0 }),
    book: belongsTo('i-i-s-book-club-2-1-book', '??????????????????', {
      title: attr('??????????????????', { index: 1 }),
      author: attr('??????????', { index: 2 }),
      description: attr('???????????????? / ????????????', { index: 3 })
    }, { index: -1, hidden: true }),
    meeting: belongsTo('i-i-s-book-club-2-1-meeting', '', {
      date: attr('', { index: 4, hidden: true })
    }, { index: -1, hidden: true })
  });
};
