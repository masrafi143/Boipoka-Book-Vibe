import Book from './Book';

const Books = ({books}) => {

    return (
        <div>
            <h2 className='font-bold text-3xl md:text-4xl text-center'>Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto my-10 gap-5'>
                {
                    books.map(book=> <Book key={book.bookId} book={book}/>)
                }
            </div>
        </div>
    );
};

export default Books;