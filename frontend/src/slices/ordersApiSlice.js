import { apiSlice } from "./apiSlice";
import { ORDER_URL, PAYMENT_URL } from "../constants";

export const ordersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (order) => ({
                url: `${ORDER_URL}`,
                method: "POST",
                body: {...order},
            }),
        }),
        getOrderDetails: builder.query({
            query: (orderId) => ({
                url: `${ORDER_URL}/${orderId}`,
            }),
            keepUnusedDataFor: 5,
        }),
        payOrder: builder.mutation({
            query: ({ orderId, details }) => ({
                url: `${ORDER_URL}/${orderId}/pay`,
                method: "PUT",
                body: details,
            }),
        }),
        getPayPalClientId: builder.query({
            query: () => ({
                url: `${PAYMENT_URL}`,
            }),
            keepUnusedDataFor: 5,
        }),
    }),
})

export const { useCreateOrderMutation, useGetOrderDetailsQuery, usePayOrderMutation, useGetPayPalClientIdQuery } = ordersApiSlice