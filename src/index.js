import React from 'react';
import ReactDom from 'react-dom';


const Books=[{
    id:1,
    src:"https://images-eu.ssl-images-amazon.com/images/I/81gTwYAhU7L._AC_UL200_SR200,200_.jpg",
    tittle:"The Power of your Subconscious Mind",
    author:"Joseph Murphy"
},
{   id:2,
    src:"https://images-eu.ssl-images-amazon.com/images/I/81vPz-eS6QL._AC_UL200_SR200,200_.jpg",
    tittle:"Deep Work: Rules for Focused Success in a Distracted World",
    author:"Cal Newport"
}]

const Book=({src,author,tittle})=>{

    return(
    <>
       <img src={src} alt=""/>
       <h2>{tittle}</h2>
       <h4>{author}</h4>
    </>
    )
}

const BookList=()=>{
    return(
        Books.map(book=>{
            return(
            <Book key={book.id}{...book}/>
            )
        })
    )
}
ReactDom.render(<BookList/>,document.getElementById("root"));