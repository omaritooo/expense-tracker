import { $fetch, type FetchOptions } from 'ofetch';

// locals
import { AuthRepository } from '~/repositories/AuthRepository';

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();

    const fetchOptions: FetchOptions = {
        baseURL: ''
    };

    const apiFecther = $fetch.create(fetchOptions);

    // An object containing all repositories we need to expose
    const modules = {
        products: new AuthRepository(apiFecther),
    };

    return {
        provide: {
            api: modules
        }
    };
})
