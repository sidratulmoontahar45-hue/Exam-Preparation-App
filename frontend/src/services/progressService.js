const getDashboardData = async () => {
    return {
        data: {
            overview: {
                totalNotes: 0,
                totalMockTest: 0,
                totalQuiz: 0
            }
        }
    };
};

const progressService = {
    getDashboardData
};

export default progressService;