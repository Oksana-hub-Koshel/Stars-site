

const initialState={
    books: [],
    loading: true,
    error: null,
    cartItems:[],
    orderTotal:220

}

const updateCartItems=(cartItems, item, idx)=>{

    if(idx === -1){
        return [
            ...cartItems,
            item
        ]
    }
    else {
        return [
            ...cartItems.slice(0, idx),
            item,
            ...cartItems.slice(idx+1)
        ]

    }
}


const updateCartItem=(book, item={})=>{

    const {
        id=book.id,
        title=book.title,
        count=0,
        total=0,


    }=item

    return{
        id,
        title,
        count: count + 1,
        total: total+book.price

    }}


// для того, чтобы избежать проверок на наличия item, мы можем задать item пустой обьект, чтобы он рне был underfined
    //и значения по умолчанию

    // if(item){
    //     newItem={
    //         ...item,
    //         count: item.count + 1,
    //         total: item.total+book.price
    //     }
    // }
    // else {
    //     newItem={
    //         id: book.id,
    //         title: book.title,
    //         count:1,
    //         total:book.price
    //     }
    // }

const reducer=(state=initialState, action)=>{
    console.log(action)

    switch (action.type) {
        case "FETCH_BOOKS_REQUEST":
            return {
                ...state,
                books:[],
                loading: true,
                error: null
            }
        case "FETCH_BOOKS_SUCCESS":
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            }
        case "FETCH_BOOKS_FAILED":
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            }

        case "BOOK_ADDED_TO_CART":
            const bookId = action.payload
            const book = state.books.find((book) => book.id === bookId)
            const itemIndex = state.cartItems.findIndex(({id}) => id === bookId)
            const item = state.cartItems[itemIndex]

            const newItem = updateCartItem(book, item)

            return {
                ...state,
                cartItems: updateCartItems(state.cartItems, newItem, itemIndex)

            }

        default:
            return state;
    }
}
export default reducer;