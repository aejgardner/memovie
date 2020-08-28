import hyphenOrContent from './hyphenOrContent';

it('tests that a movie object null value gets changed to a hyphen', () => {

    let movie = {
        id: 13,
        movieTitle: "foo",
        movieDirector: null,
        movieGenre: "bar",
        movieCast: null
    }

    let result = hyphenOrContent(movie);

    expect(result.movieDirector).toEqual("-");
    expect(result.movieGenre).toEqual("bar");
    expect(result.id).toEqual(13);
});