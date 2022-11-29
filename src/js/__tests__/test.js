import ErrorRepository from '../app.js';

test('test error text', () => {
  const error = new ErrorRepository();
  error.mapErr(404, 'Not Found («не найдено»)');
  expect(error.translate(404)).toBe('Not Found («не найдено»)');
});

test('test error unknown', () => {
  const error = new ErrorRepository();
  expect(error.translate('')).toBe('Unknown error');
});
