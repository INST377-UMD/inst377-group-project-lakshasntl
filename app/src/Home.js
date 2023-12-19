import React from 'react';
import Header from './Header.js'
import './Home.css'; // Import the CSS file for styling

const Home = () => {
    const readingLog = []
    const logged = []
    const multiGenre = []
    const multiGenreCounter = []
    const topGenres = []
    const recBooks = []

    const getReadingLog = async (userName) => {
        try {
            const response = await fetch(`https://openlibrary.org/people/${userName}/books/currently-reading.json`);
            const data = await response.json();
            const dataLogs = data['reading_log_entries'];

            for (let i = 0; i < dataLogs.length; i++)
            {
                if (dataLogs[i]["work"].title != null)
                {
                    readingLog.push(dataLogs[i]);
                }
                
                
            }

        } catch (error) {
            console.error(`Error fetching ${userName} log:`, error);
        }

        const allRead = document.querySelectorAll('.ReadItem');
        const countRead = allRead.length;

        if (countRead < readingLog.length) {
            for (let i = 0; i < readingLog.length; i++) {

                const node = document.createElement("li");
                const imageNode = document.createElement("img");
                const itemText = document.createElement("span");

                let covKey = readingLog[i]["work"].cover_edition_key;
                imageNode.src = "https://covers.openlibrary.org/b/olid/" + covKey + "-M.jpg";
                imageNode.width = "180";
                imageNode.height = "280";

                itemText.innerHTML = readingLog[i]["work"].title;
                itemText.className = "ReadItemText"

                node.appendChild(imageNode);
                node.appendChild(itemText);

                node.className = "ReadItem";
                document.getElementById("RecentlyRead").appendChild(node);
            }
        }

        
        getBestGenres();
    };

    const getBestGenres = async () => {
        let bestGenres = []
        if (bestGenres.length == 0)
        {
            let smallest = 5;
            if (readingLog.length < smallest) {
                smallest = readingLog.length;
            }
            for (let i = 0; i < smallest; i++) {
                let currentBook = readingLog[i]["work"].key;
                let bookProm = await fetch("https://openlibrary.org" + currentBook + ".json");
                let genresProm = await bookProm.json();
                let genres = genresProm["subjects"];

                for (let j = 0; j < genres.length && j < 10; j++) {
                    if (!(genres[j].includes("\"") || genres[j].includes("&"))) {
                        if (bestGenres.indexOf(genres[j]) < 0) {
                            bestGenres.push(genres[j]);
                        }
                        else {
                            if (multiGenre.indexOf(genres[j]) < 0) {
                                multiGenre.push(genres[j]);
                                multiGenreCounter.push(2);
                            }
                            else {
                                multiGenreCounter[multiGenre.indexOf(genres[j])]++;
                            }
                        }
                    }
                    
                }
            }

            while (multiGenre.length < 5) {
                let randGen = Math.floor(Math.random() * bestGenres.length);
                    multiGenre.push(bestGenres[randGen]);
                    multiGenreCounter.push(1);
            }
            multiGenre.sort(function (a, b) {
                if (multiGenreCounter[multiGenre.indexOf(a)] < multiGenreCounter[multiGenre.indexOf(b)]) {
                    return 1
                }
                else {
                    return -1
                }
            });

            multiGenreCounter.sort(function (a, b) { return b - a });

            for (let k = 0; topGenres.length < 5 && k < multiGenre.length; k++) {
                topGenres.push(multiGenre[k]);
            }


        }

        getBestBooks();
        
    };

    const getBestBooks = async () => {
        if (recBooks.length == 0) {
            console.log(multiGenre + "<br>" + multiGenreCounter);
            let booksString = "https://openlibrary.org/search.json?subject="
            for (let i = 0; i < topGenres.length; i++) {
                booksString += topGenres[i]+"+"
            }

            let goodBooksProm = await fetch(booksString);
            let goodBooksData = await goodBooksProm.json();
            let goodBooks = goodBooksData['docs'];

            if (goodBooks.length >= 2) {
                let ind1 = Math.floor(Math.random() * goodBooks.length);
                let ind2 = Math.floor(Math.random() * goodBooks.length);
                while (ind2 == ind1) {
                    let ind2 = Math.floor(Math.random() * goodBooks.length);
                }

                recBooks.push([goodBooks[ind1].title, goodBooks[ind1].key, goodBooks[ind1].cover_edition_key]);
                recBooks.push([goodBooks[ind2].title, goodBooks[ind2].key, goodBooks[ind2].cover_edition_key]);
            }
            else if (goodBooks.length == 1) {
                recBooks.push([goodBooks[0].title, goodBooks[0].key, goodBooks[0].cover_edition_key]);
            }
        }

        for (let i = 0; i < topGenres.length; i++) {
            let booksString = "https://openlibrary.org/search.json?subject=" + topGenres[i];

            let goodBooksProm = await fetch(booksString);
            let goodBooksData = await goodBooksProm.json();
            let goodBooks = goodBooksData['docs'];

            if (goodBooks.length >= 2) {
                let ind1 = Math.floor(Math.random() * goodBooks.length);
                let ind2 = Math.floor(Math.random() * goodBooks.length);
                while (ind2 == ind1) {
                    let ind2 = Math.floor(Math.random() * goodBooks.length);
                }

                recBooks.push([goodBooks[ind1].title, goodBooks[ind1].key, goodBooks[ind1].cover_edition_key]);
                recBooks.push([goodBooks[ind2].title, goodBooks[ind2].key, goodBooks[ind2].cover_edition_key]);
            }
            else if (goodBooks.length == 1) {
                recBooks.push([goodBooks[0].title, goodBooks[0].key, goodBooks[0].cover_edition_key]);
            }

        }

        const allRec = document.querySelectorAll('.RecItem');
        const countRec = allRec.length;


        if (countRec < recBooks.length) {
            for (let i = 0; i < recBooks.length; i++) {

                const nodeRec = document.createElement("li");
                const imageNodeRec = document.createElement("img");
                const itemTextRec = document.createElement("span");

                let covKey = recBooks[i][2];
                imageNodeRec.src = "https://covers.openlibrary.org/b/olid/" + covKey + "-M.jpg";
                imageNodeRec.width = "180";
                imageNodeRec.height = "280";

                itemTextRec.innerHTML = recBooks[i][0];
                itemTextRec.className = "RecItemText"

                nodeRec.appendChild(imageNodeRec);
                nodeRec.appendChild(itemTextRec);

                nodeRec.className = "RecItem";
                document.getElementById("RecBooks").appendChild(nodeRec);
                //console.log(i);
            }
            document.getElementById("RecHead").innerHTML = "Recommended Books";
        }

    };

    getReadingLog('mekBot');
    

    


    return (
        <div className="Home">
        
        
            <h1>Home</h1>

            <div className='recently-read-books'>
                <h2>Recently Read</h2>
                <ul id ='RecentlyRead' className='RecentlyRead'>

                </ul>
            </div>
            <div className='recommended-books'>
                <h2 id="RecHead">Recommended Books Are Loading...</h2>
                <ul id='RecBooks' className='RecBooks'>

                </ul>
            </div>
        </div>
    );
};

export default Home;
