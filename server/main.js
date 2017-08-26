import { Meteor } from 'meteor/meteor';
import Characters from '../imports/collections/characters';

Meteor.startup(() => {
    Meteor.publish('chars', function() {
        return Characters.find({});
    });
});
