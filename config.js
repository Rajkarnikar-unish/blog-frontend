const config = {
    development: {
        BASE_URL: "http://localhost:8080/api/"
    }
}

const getConfig = () => {
    const env = process.env.NODE_ENV || 'development';
    return config[env];
}

export default getConfig;