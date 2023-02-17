

const initialState={
    bookList: {
        books: [],
        loading: true,
        error: null,
    },
    shoppingCart:{
        cartItems:[],
        orderTotal: 0
    }
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

    const {bookList: {books}, shoppingCart:{cartItems}}=state

    const book = books.find(({id}) => id === bookId)
    const itemIndex = cartItems.findIndex(({id}) => id === bookId)
    const item = cartItems[itemIndex]
    const newItem = updateCartItem(book, item, quanity)

    return {
       orderTotal: 0,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)

    }
}


const updateBookList = (action, state) => {

    switch (action.type) {
        case "FETCH_BOOKS_REQUEST":
            return {
                books:[],
                loading: true,
                error: null
            }
        case "FETCH_BOOKS_SUCCESS":
            return {
                books: action.payload,
                loading: false,
                error: null
            }
        case "FETCH_BOOKS_FAILED":
            return {
                books: [],
                loading: false,
                error: action.payload
            }
        default:
            return state.bookList
    }
}
const updateShoppingCart=(action, state)=>{
    switch (action.type){
        case "BOOK_ADDED_TO_CART":
            return updateOrder(state, action.payload, 1)
        case "REMOVE_ALL_BOOKS_FROM_CART":
            const item=state.shoppingCart.cartItems.find(({id})=> id===action.payload)
            return updateOrder(state, action.payload, -item.count)
        case "BOOK_REMOVE_FROM_CART":
            return updateOrder(state, action.payload, -1)
        default:
            return state.shoppingCart
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

const reducer = (state = initialState, action) => {
    console.log(action)

    return{
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }


}


export default reducer;