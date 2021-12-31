const mockRespone = {
  data: {
    results: [
      {
        name: {
          first: "Keith",
          last: "winters",
        },
        picture: {
          large: "https://randomuser.me/api/potraits/men/39.jpg",
        },
        login: {
          username: "phony",
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockRespone),
};
