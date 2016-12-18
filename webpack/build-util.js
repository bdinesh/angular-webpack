import path from 'path';
// import globby from 'globby';
// import { buildConfig as config } from './build.config';

const rootDir = path.resolve(__dirname, '..');

const getAbsolutePaths = (paths, parent = '') => {
    return paths.map(p => path.resolve(rootDir, parent, p));
};

const buildUtil = {
    getAbsolutePaths
};

export { buildUtil };