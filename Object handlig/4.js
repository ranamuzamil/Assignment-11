// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
const library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];
for (let i = 0; i < library.length; i++) {
    const book = library[i];
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    if (book.readingStatus) {
        console.log('Reading Status: Read');        
    }else{
        console.log('Reading Status: Not Read');    
    }
    console.log(     ); // for break
}
