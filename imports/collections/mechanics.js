import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Mechanics = new Mongo.Collection('mechs');

Mechanics.schema = new SimpleSchema({
  name: { type: String },
  full: { type: String },
  move: { type: String },
  skill: { type: [String] },
  geo: { type: String },
  stage: { type: Number, defaultValue: -1 },
  route: { type: [String] },
  starred: { type: [String] },
});

Meteor.methods({
  'mechs.test': function () {
    return Mechanics.insert({
      name: '그랑티드',
      full: '격투무기 공격력 +200',
      move: '5 (육지)',
      skill: ['오르곤 클라우드'],
      geo: 'BABA',
      stage: 8,
      route: ['land', 'common'],
      starred: [],
    });
  },
  'mechs.star': function (mechanic, username) {
    return Mechanics.update(mechanic._id, { $push: { starred: username } });
  },
});

export default Mechanics;
