import { countCompletedTodos } from './getNumberOfCompletedTodos';

describe('The countCompletedTodos function', () => {
  describe('When provided with valid array of todos', () => {
    let array = [
      { title: 'Buy milk', completed: true },
      { title: 'Walk dog', completed: false },
      { title: 'Write code', completed: true },
    ];
    it('returns correct number of elements', () => {
      const result = countCompletedTodos(array);
      expect(result).toBe(2);
    });
  });
});
