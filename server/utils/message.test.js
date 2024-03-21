var expect = require('expect');
var generateMsg = require('./messsage');

describe('generateMsg', () => {
    it('should generate correct message', () => {
        var from = 'adnan';
        var text = 'some message';
        var message = generateMsg(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, text });

    })
})