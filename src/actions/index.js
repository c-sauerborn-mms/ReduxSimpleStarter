// selectBook is an action creator. It needs to return an action
// every action needs a type property
export function selectBook(book){
    return{
        type: "BOOK_SELECTED",
        payload: book
    };
}