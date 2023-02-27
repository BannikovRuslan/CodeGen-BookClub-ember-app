import EditFormRoute from 'ember-flexberry/routes/edit-form';

export default EditFormRoute.extend({
  modelProjection: 'MeetingE',
  modelName: 'i-i-s-book-club-2-1-meeting',

  afterModel(model, transition) {
    // const updatedModel = Object.assign(model, {
    //     speaker: model.speakerId ? model.speakers.findBy('id', model.speakerId) : null,
    //     book: model.bookId ? model.books.findBy('id', model.bookId) : null,
    // });
    return model;
  },
});
