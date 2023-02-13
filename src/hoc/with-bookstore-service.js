import React from 'react';
import {BookstoreServiceConsumer} from "../components/bookservice-contex/bookstoreservice-contex";

const WithBookstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookstoreServiceConsumer>
                {
                    (bookstoreService) => {
                        return (
                            <Wrapped {...props} bookstoreService={bookstoreService}/>
                        )

                    }
                }
            </BookstoreServiceConsumer>
        )
    }
};

export default WithBookstoreService;