import apiUrl from './apiUrl';

export default {
    getTransactions() {
        return apiUrl.get('/transactions');
    },

    createTransaction(book) {
        return apiUrl.post('/transactions', book);
    },

    editTransaction(book, id) {
        return apiUrl.post(`/transactions/${id}`, book);
    },

    deleteTransaction(id) {
        return apiUrl.post(`{/transactions/${id}`);
    },
}