import {map} from "./map";

const assert = require('assert'); // assert from Node
describe('map', () => {
    it('should convert an input to an object with different keys', () => {
        // given
        const givenUrl = 'url';
        const givenBio = 'bio';
        const input = {
            avatar_url: givenUrl,
            bio: givenBio
        };

        // when
        const result = map(input);

        // then
        assert.deepEqual(result, {img: givenUrl, bio: givenBio});
    });
});