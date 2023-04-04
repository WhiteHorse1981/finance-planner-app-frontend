export const selectTransactions = state => state.statistics.transactions;
export const selectTotalTransactions = state =>
  state.statistics.totalTransactions;
export const selectCategories = state => state.statistics.categories;
export const selectIsLoading = state => state.statistics.isLoading;
export const selectError = state => state.statistics.error;
