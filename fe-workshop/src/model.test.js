const gitHubUser = require('./model')


test('should create an object with img and bio', () => {

    //given
    const [givenUrl, givenBio] = ['url', 'bio'];
    const input = {
        avatar_url: givenUrl,
        bio: givenBio
    };

    //when
    const result = new gitHubUser(input);

    //then
    expect(givenUrl).toStrictEqual(result.img);
    expect(givenBio).toStrictEqual(result.bio);


});


test('should return bio from toString implementation', () => {

    //given
    const [givenUrl, givenBio] = ['url', 'bio'];
    const input = {
        avatar_url: givenUrl,
        bio: givenBio
    };

    //when
    const result = new gitHubUser(input);

    //then
    expect(givenBio).toStrictEqual(result.toString());

});




