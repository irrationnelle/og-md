import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Characters = new Mongo.Collection('chars');

Characters.schema = new SimpleSchema({
  name: { type: String },
  ace: { type: String },
  mind: { type: [String] },
  twin: { type: String },
  stage: { type: Number, defaultValue: -1 },
  route: { type: [String] },
  starred: { type: [String] },
});

Meteor.methods({
  'chars.test': function () {
    return Characters.insert({
      name: '칼비나 크란쥬',
      ace: '퓨리의 기체 대해주는 최종 데미지 + 10 %, 자신이 탑승한 기체의 파일럿 전원 SP + 5',
      mind: ['집중', '저격', '필중', '열혈', '사랑'],
      twin: '연격',
      stage: 1,
      route: ['space', 'common'],
      starred: [],
    });
  },
  'chars.star': function (character, username) {
    return Characters.update(character._id, { $push: { starred: username } });
  },
});

export default Characters;
