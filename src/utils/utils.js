import axios from 'axios';





export async function apiReq(endPoint, data, method, headers, requestOptions = {}) {
	return new Promise(async (res, rej) => {
		if (method === 'get' || method === 'delete') {
			data = {
				...requestOptions,
				...data,
				headers
			};
		}

		axios[method](endPoint, data, { headers })
			.then(result => {
				const { data } = result;
				if (data.status === false) {
					return rej(data);
				}
				return res(data);
			})
			.catch(error => {
				if (error && error.response && error.response.data) {
					rej(error.response.data);
				}
				return rej({message:"Network Error"});
			});
	});
}

export function apiPost(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'post', headers);
}

export function apiDelete(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'delete', headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
	return apiReq(endPoint, data, 'get', headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'put', headers);
}
