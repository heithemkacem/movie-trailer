const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '614f0dc948da7e452319587c96b9ad03',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;