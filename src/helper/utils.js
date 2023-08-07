// export const setIndexesForFetchedData = (data, page = 1, itemsPerPage = 5) => {
//  const startIndex = (page - 1) * itemsPerPage + 1;
//  return data.map((event, index) => ({ ...event, index: startIndex + index }));
// };

// export const getLastIndex = (state, page = 1, itemsPerPage = 5) => {
//  const allEvents = eventsAdapter.getSelectors().selectAll(state);
//  const totalEvents = allEvents.length;
//  const lastPageIndex = Math.ceil(totalEvents / itemsPerPage);
//  const lastItemIndexOnPage = totalEvents % itemsPerPage || itemsPerPage;
//  return (page - 1) * itemsPerPage + lastItemIndexOnPage;
// };
