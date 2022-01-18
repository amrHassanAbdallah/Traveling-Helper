import bunyan from 'bunyan';

const LoggerInstance = bunyan.createLogger({ name: 'travling-helper' });

export default LoggerInstance;
