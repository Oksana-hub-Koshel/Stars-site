

const initialState={
    books: [],
    loading: true,
    error: null,
    cartItems:[],
    orderTotal:220

}

const updateCartItems=(cartItems, item, idx)=>{
    if(item.count===0){                        // удаляет существующий элемент с амассива
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx+1)
        ]
    }

    if(idx === -1){                  // добавляет элемент в массив
        return [
            ...cartItems,
            item
        ]
    }
    else {
        return [
            ...cartItems.slice(0, idx),    // изменяет элемент в массиве
            item,
            ...cartItems.slice(idx+1)
        ]

    }
}


const updateCartItem=(book, item={}, quanity)=>{

    const {
        id=book.id,
        title=book.title,
        count=0,
        total=0,


    }=item

    return{
        id,
        title,
        count: count + quanity,
        total: total+quanity*book.price

    }}

const updateOrder=(state, bookId, quanity)=>{
    const {books, cartItems}=state
    // const bookId = action.payload
    const book = books.find(({id}) => id === bookId)
    const itemIndex = cartItems.findIndex(({id}) => id === bookId)
    const item = cartItems[itemIndex]
    const newItem = updateCartItem(book, item, quanity)
    return {
        ...state,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)

    }
}


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
            return updateOrder(state, action.payload, 1)


        case "REMOVE_ALL_BOOKS_FROM_CART":
            const item=state.cartItems.find(({id})=> id===action.payload)
            return updateOrder(state, action.payload, -item.count)


        case "BOOK_REMOVE_FROM_CART":
            return updateOrder(state, action.payload, -1)




        default:
            return state;
    }
}
export default reducer;