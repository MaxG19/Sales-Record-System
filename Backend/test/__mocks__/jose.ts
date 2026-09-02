export const importPKCS8 = jest.fn();
export const importSPKI = jest.fn();
export const generateKeyPair = jest.fn();
export const jwtVerify = jest.fn();
export const SignJWT = jest.fn().mockImplementation(() => ({
  setProtectedHeader: jest.fn().mockReturnThis(),
  setIssuedAt: jest.fn().mockReturnThis(),
  setExpirationTime: jest.fn().mockReturnThis(),
  setSubject: jest.fn().mockReturnThis(),
  setJti: jest.fn().mockReturnThis(),
  sign: jest.fn().mockResolvedValue('mocked.jwt.token'),
}));
