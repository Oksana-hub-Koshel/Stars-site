import React from 'react';

 class BookstoreService{
  getBooks(){
        return [
            {
                id: 1,
                title: "Production-Ready Microservices",
                author: "Susan J",
                price: 170,
image: "https://lexington.centracdn.net/client/dynamic/images/15697_e23ea7b1c3-holiday-book-zoom.jpg"            },
            {
                id: 2,
                title: "Release IT",
                author: "Michael T",
                price: 220,
                image: "https://static01.nyt.com/images/2023/01/10/books/10FLORA-FRASER-COVER/10FLORA-FRASER-COVER-mobileMasterAt3x.jpg"
            }
        ]
    }
}
export default new BookstoreService()