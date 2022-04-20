const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test("Testando oi para OI", (done) => {
    uppercase('oi', (result) => {
    try {
      expect(result).toBe('OI');
      done();
    } catch (error) {
      done(error);
    }
  });
});
