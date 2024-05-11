import { FetchFactory } from "./factory";
import { type AsyncDataOptions } from '#app';
import { type FetchOptions } from 'ofetch'



export class AuthRepository extends FetchFactory<any> {
    private prefix = '/auth';

    async register(asyncDataOptions: AsyncDataOptions<any>, body: any) {
        return useAsyncData(
            () => {
                const fetchOptions: FetchOptions<'json'> = {
                    headers: {
                        'Accept-Language': 'en-US'
                    }
                };
                return this.call(
                    'POST',
                    `${this.prefix}/register`,
                    body,
                    fetchOptions
                )
            },
            asyncDataOptions
        )
    };
    async login(asyncDataOptions: AsyncDataOptions<any>, body: any) {
        return useAsyncData(
            () => {
                const fetchOptions: FetchOptions<'json'> = {
                    headers: {
                        'Accept-Language': 'en-US'
                    }
                };
                return this.call(
                    'POST',
                    `${this.prefix}/login`,
                    body,
                    fetchOptions
                )
            },
            asyncDataOptions
        )
    }
}