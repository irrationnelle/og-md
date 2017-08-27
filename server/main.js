import { Meteor } from 'meteor/meteor';
import Characters from '../imports/collections/characters';
import Mechanics from '../imports/collections/mechanics';

Meteor.startup(() => {
    Meteor.publish('chars', function() {
        return Characters.find({});
    });

    Meteor.publish('mechs', function() {
        return Mechanics.find({});
    });
});
