type Environment = 'local' | 'test' | 'prod';

export const getEnvironment = (): Environment => {
  return (process.env.ENVIRONMENT as Environment) || 'local';
};

export const isLocal = (): boolean => getEnvironment() === 'local';
