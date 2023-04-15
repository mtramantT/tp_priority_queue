import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Item } from '../../Items/Items.types'
import { IApiWrapper } from './api.types'

export const apiSlice = createApi({
    reducerPath: 'itemsApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
    endpoints: (builder) => ({
        getItems: builder.query<Item[], void>({
            query: () => 'items/items',
            transformResponse: (response: IApiWrapper<Item>) => {
                return response.data;
            },
        }),
    }),
})

export const { useGetItemsQuery } = apiSlice
