
const mapImport = require('./map');


    test('should convert an input to an object with different keys', () => {

        //given
        const  [givenUrl, givenBio] = ['url', 'bio'];
        const input = {
            avatar_url: givenUrl,
            bio: givenBio
        };

        //when
        const result = mapImport(input);

        //then
        expect({img :givenUrl, bio: givenBio}).toStrictEqual(result);


    });


