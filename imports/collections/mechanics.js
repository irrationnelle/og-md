import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

const Mechanics = new Mongo.Collection('mechs');

Mechanics.schema = new SimpleSchema({
    name: { type: String },
    full: { type: String },
    move: { type: String },
    skill: { type: [String] },
    geo: { type: String },
    stage: { type: Number, defaultValue: -1 },
    route: { type: String },
    starred: { type: [String] },
});

Meteor.methods({
    'mechs.test': function () {
        return Mechanics.insert({
            name: '에그젝스바인',
            full: '염동무기 공격력 + (염동력 Lv. * 30)',
            move: '6 (공중, 육지)',
            skill: ['염동필드 S', '분신'],
            geo: 'AABA',
            stage: 5,
            route: 'a',
            starred: [],
        },
        {
            name: '에그젝스바인',
            full: '염동무기 공격력 + (염동력 Lv. * 30)',
            move: '6 (공중, 육지)',
            skill: ['염동필드 S', '분신'],
            geo: 'AABA',
            stage: 5,
            route: 'a',
            starred: [],
        },
        {
            name: '벨제루트',
            full: '사격무기 공격력 + 200',
            move: '7 (공중, 육지)',
            skill: ['오르곤 클라우드'],
            geo: 'ABCA',
            stage: 1,
            route: 'a',
            starred: [],
        },
        {
            name: '지가리온',
            full: '염동무기 공격력 + (염동력 Lv. * 30)',
            move: '7 (공중, 육지)',
            skill: [],
            geo: 'AABA',
            stage: 3,
            route: 'b',
            starred: [],
        },
        {
            name: '프리케라이 가이스트',
            full: '실탄계 고정무장 공격력 +100 & 최대잔탄 +2',
            move: '6 (육지)',
            skill: ['빔코트', 'EN회복(소)'],
            geo: 'BABA',
            stage: 10,
            route: 'c',
            starred: [],
        },);
    },
    'mechs.star': function (mechanic, username) {
        return Mechanics.update(mechanic._id, { $push: { starred: username } });
    },
});

export default Mechanics;
