const genres: {[index: string]: string} = {
  fantasy: 'Фэнтези',
  horror: 'Ужасы',
  action: 'Боевик',
  comedy: 'Комедия',
}

export const translateGenre = (genre: string) => {
  return genres[genre];
}