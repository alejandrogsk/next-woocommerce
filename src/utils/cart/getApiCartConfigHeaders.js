import { getSession } from "./session";


export const getApiCartConfigHeaders = () => {
	const headers = { 'X-Headless-CMS': true, 'Content-Type': 'application/json' }
	const storedSession = getSession();
	if ( storedSession !== null) {
		headers['x-wc-session'] = storedSession;
	}
	return headers;
}