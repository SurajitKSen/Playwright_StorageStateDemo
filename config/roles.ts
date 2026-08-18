export interface Role {
  name: string;
  username: string;
  password: string;
}

// One entry per SauceDemo user role; storageState is generated per role at auth/<name>.json
export const ROLES: Role[] = [
  {
    name: 'standard_user',
    username: process.env.STANDARD_USER_USERNAME!,
    password: process.env.STANDARD_USER_PASSWORD!,
  },
  {
    name: 'problem_user',
    username: process.env.PROBLEM_USER_USERNAME!,
    password: process.env.PROBLEM_USER_PASSWORD!,
  },
  {
    name: 'performance_glitch_user',
    username: process.env.PERFORMANCE_GLITCH_USER_USERNAME!,
    password: process.env.PERFORMANCE_GLITCH_USER_PASSWORD!,
  },
  {
    name: 'error_user',
    username: process.env.ERROR_USER_USERNAME!,
    password: process.env.ERROR_USER_PASSWORD!,
  },
];
