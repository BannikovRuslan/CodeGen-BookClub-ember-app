import Component from 'ember-flexberry/components/flexberry-simpledatetime';

export default Component.extend({
    onChage: function(data) {
        console.log(data);
    },
    didInsertElement() {
        this._super(...arguments);
        console.log(this);
    },
    actions: {
        onChage: function(data) {
            console.log(data);
        },
    }
});
