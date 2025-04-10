const getDogName = jest.fn();

getDogName.mockReturnValue('Lassie');

console.log(getDogName()); // Lassie

getDogName.mockReturnValue('Scooby');

console.log(getDogName()); // Scooby

const getPostsMock = jest.fn();

getPostsMock.mockResolvedValue([...])