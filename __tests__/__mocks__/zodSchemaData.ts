export const validUser = {
  username: 'john_doe',
  email: 'john@example.com',
  password: 'supersecurepassword',
};

export const invalidUser = {
  username: 'jd',
  email: 'johnexample.com',
  password: '123',
};

export const validProduct = {
  name: 'Laptop',
  price: 999.99,
  inStock: true,
};

export const invalidProduct = {
  name: '',
  price: -50,
  inStock: 'yes',
};

export const validBlogPost = {
  title: 'My First Blog Post',
  content: 'This is the content of my first blog post. It is very interesting!',
  published: true,
  tags: ['personal', 'intro'],
};

export const invalidBlogPost = {
  title: 'Hi',
  content: 'Short content',
  published: 'true',
  tags: 'tag1, tag2',
};
