import { Mongo } from 'meteor/mongo';

Meteor.methods({
    'chars.insert': function() {
        return Characters.insert({
            name: String,
            stage: Number,
            route: String,
            starred: [String],
        });
    }
});

export const Characters = new Mongo.Collection('chars');
