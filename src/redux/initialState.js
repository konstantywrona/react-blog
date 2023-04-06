const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('01-02-2022'),
      author: 'John Doe',
      category: 'Sport',
    },
    {
      id: '2',
      title: 'Article title I',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe',
      category: 'Movies',
    },
    {
      id: '3',
      title: 'Article title II',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('03-02-2022'),
      author: 'John Doe',
      category: 'News',
    },
  ],
  categories: ['Sport', 'News', 'Movies'],
};

export default initialState;
