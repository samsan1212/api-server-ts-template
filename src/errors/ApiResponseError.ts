class ApiResponseError extends Error {
  constructor(message: any) {
    super(message);
    this.name = 'ApiResponseError';
  }
}

export default ApiResponseError;
