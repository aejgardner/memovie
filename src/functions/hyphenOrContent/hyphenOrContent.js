const hyphenOrContent = movie => Object.fromEntries(
    Object.entries(movie).map(
        ([key, val]) => ([key, val === null ? "-" : val])
    )
);

export default hyphenOrContent