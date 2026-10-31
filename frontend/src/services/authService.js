const authService = {
  login: async (email, password) => {
    // Temporary demo login — no backend connection
    if (!email || !password) {
      throw new Error('Please enter your email and password.');
    }

    return {
      token: 'demo-token',
      user: { email },
    };
  },
};

export default authService;
