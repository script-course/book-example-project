import axios from 'axios';

const http = axios.create({baseURL: 'api/'});

/**
 *
 * @param {string} uri the uri to request
 * @returns
 */
export const getRequest = async uri => await http.get(uri);
