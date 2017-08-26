import { Mongo } from 'meteor/mongo';

const Characters = new Mongo.Collection('chars');

Characters.schema = new SimpleSchema({
    name: { type: String },
    ace: { type: String },
    mind: { type: [String] },
    twin: { type: String },
    stage: { type: Number },
    route: { type: String },
    starred: { type: [String] },
});

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

export default Characters;
