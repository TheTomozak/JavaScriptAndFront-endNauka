const us = require('./user');

test('should convert an input to an object with different keys', () => {

    expect(us.avatar_url).toBe('url');
    expect(us.bio).toBe('bio');

});
