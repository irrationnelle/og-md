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
            name: '아리에일 오그',
            ace: '자신의 팀의 원호공격의 데미지 + 10%',
            mind: ['집중', '가속', '섬광', '필중', '열혈'],
            twin: '격려',
            stage: 5,
            route: 'c',
            starred: [],
        });
    },
    'chars.star': function (character, username) {
        return Characters.update(character._id, { $push: { starred: username } });
    },
});

export default Characters;
