import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

import { defaultSpeakerFoto } from '../../../utils/default-data';

export let Model = Mixin.create({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  middleName: DS.attr('string'),
  foto: DS.attr('file-with-default', {default: defaultSpeakerFoto})
});

export let ValidationRules = {
  firstName: {
    descriptionKey: 'models.i-i-s-book-club-2-1-speaker.validations.firstName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  lastName: {
    descriptionKey: 'models.i-i-s-book-club-2-1-speaker.validations.lastName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  middleName: {
    descriptionKey: 'models.i-i-s-book-club-2-1-speaker.validations.middleName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  foto: {
    descriptionKey: 'models.i-i-s-book-club-2-1-speaker.validations.foto.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('bcember_SpeakerE', 'i-i-s-book-club-2-1-speaker', {
    firstName: attr('First name', { index: 0 }),
    lastName: attr('Last name', { index: 1 }),
    middleName: attr('Middle name', { index: 2 }),
    foto: attr('Foto', { index: 3 })
  });

  modelClass.defineProjection('bcember_SpeakerL', 'i-i-s-book-club-2-1-speaker', {
    firstName: attr('First name', { index: 0 }),
    lastName: attr('Last name', { index: 1 }),
    middleName: attr('Middle name', { index: 2 }),
    foto: attr('Foto', { index: 3 })
  });

  modelClass.defineProjection('fdesigner_SpeakerE', 'i-i-s-book-club-2-1-speaker', {
    firstName: attr('First name', { index: 0 }),
    lastName: attr('Last name', { index: 1 }),
    middleName: attr('Middle name', { index: 2 }),
    foto: attr('Foto', { index: 3 })
  });

  modelClass.defineProjection('fdesigner_SpeakerL', 'i-i-s-book-club-2-1-speaker', {
    firstName: attr('First name', { index: 0 }),
    lastName: attr('Last name', { index: 1 }),
    middleName: attr('Middle name', { index: 2 }),
    foto: attr('Foto', { index: 3 })
  });

  modelClass.defineProjection('SpeakerE', 'i-i-s-book-club-2-1-speaker', {
    firstName: attr('Имя', { index: 0 }),
    lastName: attr('Фамилия', { index: 1 }),
    middleName: attr('Отчество', { index: 2 }),
    foto: attr('Фотография', { index: 3 })
  });

  modelClass.defineProjection('SpeakerL', 'i-i-s-book-club-2-1-speaker', {
    firstName: attr('Имя', { index: 1 }),
    lastName: attr('Фамилия', { index: 2 }),
    middleName: attr('Отчество', { index: 3 }),
    foto: attr('Фотография', { index: 0 })
  });
};
