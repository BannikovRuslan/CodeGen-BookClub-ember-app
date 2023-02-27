import ListFormController from 'ember-flexberry/controllers/list-form';
import { defaultFotoComponent, defaultSpeakerFoto } from '../utils/default-data';

import { computed } from '@ember/object';

export default ListFormController.extend({
  /**
    Name of related edit form route.

    @property editFormRoute
    @type String
    @default 'i-i-s-book-club-2-1-speaker-e'
   */
  editFormRoute: 'i-i-s-book-club-2-1-speaker-e',
  actions: {
    configurateRow(status, speaker) {
      // if (!speaker.foto) {
      //   speaker.set("foto", defaultSpeakerFoto);
      // }
    },
    showMeetings() {

    }
  },

  getCellComponent: function(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (bindingPath == "foto") {
      cellComponent = defaultFotoComponent;
    }

    return cellComponent;
  },

  olvCustomButtons: computed('', function () {
    return [{
      buttonName: "Список выступлений", // текст кнопки
      buttonAction: "showMeetings", // Действие, вызываемое при нажатие, должно быть передано в шаблоне
      buttonClasses: 'green', // css класссы кнопки
      buttonTitle: "Выводит список связанных с выбранным спикером выступлений" // всплывающее сообщение
    }];
  }),

});
