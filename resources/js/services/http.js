import axios from 'axios';

const http = axios.create({baseURL: 'api/'});

/**
 *
 * @param {string} uri the uri to request
 * @returns
 */
export const getRequest = async uri => await http.get(uri);

/**
 *
 * @param {string} uri the uri to post to
 * @param {any} data the data to send with the post request
 * @returns
 */
export const postRequest = async (uri, data) => await http.post(uri, data);
