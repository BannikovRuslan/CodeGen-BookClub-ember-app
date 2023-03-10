import EditFormController from 'ember-flexberry/controllers/edit-form';

import MultiListController from 'ember-flexberry/mixins/multi-list-controller';

export default EditFormController.extend(MultiListController, {
  parentRoute: 'i-i-s-book-club-2-1-speaker-l',

  actions: {
    rowClick(model, content) {
      switch (content.modelName) {
        case "i-i-s-book-club-2-1-presentation":
          this.transitionToRoute(content.editFormRoute, model.meeting.id);
          break;
      
        default:
          break;
      }
    }
  }

});
