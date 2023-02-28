import EditFormRoute from 'ember-flexberry/routes/edit-form';

import { defaultSpeakerFoto } from '../utils/default-data';

import MultiListRoute from 'ember-flexberry/mixins/multi-list-route';
import MultiListModelEdit from 'ember-flexberry/mixins/multi-list-model-edit';
import ListParameters from 'ember-flexberry/objects/list-parameters';

import { SimplePredicate } from 'ember-flexberry-data/query/predicate';
import FilterOperator from 'ember-flexberry-data/query/filter-operator';

import Builder from 'ember-flexberry-data/query/builder';

export default EditFormRoute.extend(MultiListRoute, MultiListModelEdit, {
  modelProjection: 'SpeakerE',
  modelName: 'i-i-s-book-club-2-1-speaker',

  async init() {
    this._super(...arguments);

    this.set('developerUserSettings', {});

    this.set('multiListSettings.olvSpeakerMeetings', new ListParameters({
      objectlistviewEvents: this.get('objectlistviewEvents'),
      componentName: 'olvSpeakerMeetings',
      modelName: 'i-i-s-book-club-2-1-presentation',
      projectionName: 'PresentationSpeaker',
      editFormRoute: 'i-i-s-book-club-2-1-meeting-e', 
         
    }));
  },

  beforeModel(transition) {
    const targetName = transition.targetName;
    const modelId = transition.params[targetName].id;
    this.set("modelId", modelId);
    return this._super(...arguments);
  },

  async afterModel(model, transition) {
    let p = new Builder(this.store)
                .from("i-i-s-book-club-2-1-presentation")
                .selectByProjection("PresentationSpeaker")
                .where("speaker.id", FilterOperator.Eq, model.id);

    let meetings = await this.store.query('i-i-s-book-club-2-1-presentation', p.build());
    this.multiListSettings.olvSpeakerMeetings.set("model", meetings);
    if (model.get("foto") == defaultSpeakerFoto) {
      model.set("foto","");
    }
  },

  // objectListViewLimitPredicate(options) {
  //   // switch (options.modelName) {
  //   //   case 'i-i-s-book-club-2-1-meeting':
  //   //     return new SimplePredicate('meeting.id', FilterOperator.Eq, this.get('modelId'));
  //   //   default:
  //   //     return null;
  //   // }
  // }
});
