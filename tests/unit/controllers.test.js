const { getServices, getStatus } = require('../../src/controllers');

describe('Controllers', () => {
  let mockReq, mockRes;

  beforeEach(() => {
    mockReq = {};
    mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis()
    };
  });

  describe('getServices', () => {
    it('should return an array of services', () => {
      getServices(mockReq, mockRes);
      expect(mockRes.json).toHaveBeenCalledWith(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            description: expect.any(String),
            icon: expect.any(String)
          })
        ])
      );
    });
  });

  describe('getStatus', () => {
    it('should return status with timestamp', () => {
      getStatus(mockReq, mockRes);
      expect(mockRes.json).toHaveBeenCalledWith({
        status: "OK",
        timestamp: expect.any(String)
      });
    });
  });
});