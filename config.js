const config = {
    development: {
        BASE_URL: import.meta.env.VITE_APP_BASE_URL || "http://localhost:8080/api/"
    }
}

const getConfig = () => {
    const env = import.meta.env.NODE_ENV || 'development';
    return config[env] || config['development'];
}

export default getConfig;