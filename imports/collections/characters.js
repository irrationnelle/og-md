import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

const Characters = new Mongo.Collection('chars');

Characters.schema = new SimpleSchema({
    name: { type: String },
    ace: { type: String },
    mind: { type: [String] },
    twin: { type: String },
    stage: { type: Number, defaultValue: -1 },
    route: { type: String },
    starred: { type: [String] },
});

Meteor.methods({
    'chars.test': function () {
        return Characters.insert({
            name: '레오나 거슈타인',
            ace: '염동력 레벨+1',
            mind: ['집중', '가속', '직감', '직격', '열혈'],
            twin: '연격',
            stage: 5,
            route: 'b',
            starred: [],
        });
    },
    'chars.star': function (character, username) {
        return Characters.update(character._id, { $push: { starred: username } });
    },
});

export default Characters;
