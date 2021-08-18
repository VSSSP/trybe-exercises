test('Não deveria passar!', () => {
    setTimeout(() => {
      expect(10).toBe(10);
      console.log('Deveria falhar!');
    }, 500);
  });