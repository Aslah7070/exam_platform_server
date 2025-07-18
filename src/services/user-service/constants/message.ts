export const Messages = {
  AUTH: {
    INVALID_CREDENTIALS: 'Invalid email or password.',
    UNAUTHORIZED: 'You are not authorized to access this resource.',
    TOKEN_EXPIRED: 'Authentication token has expired.',
    LOGIN_SUCCESS: 'Login successful.',
  },

  USER: {
    NOT_FOUND: 'User not found.',
    ALREADY_EXISTS: 'User already exists with this email.',
    CREATED: 'User created successfully.',
    UPDATED: 'User updated successfully.',
    DELETED: 'User deleted successfully.',
  },

  PRODUCT: {
    NOT_FOUND: 'Product not found.',
    CREATED: 'Product added successfully.',
    UPDATED: 'Product updated successfully.',
    DELETED: 'Product deleted successfully.',
  },

  COMMON: {
    SERVER_ERROR: 'Something went wrong. Please try again later.',
    BAD_REQUEST: 'Bad request.',
    FORBIDDEN: 'You do not have permission to perform this action.',
    VALIDATION_FAILED: 'Input validation failed.',
  },
};
