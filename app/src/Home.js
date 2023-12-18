import React from 'react';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
    const readingLog = []
    const logged = []
    const getReadingLog = async (userName) => {
        try {
            const response = await fetch(`https://openlibrary.org/people/${userName}/books/currently-reading.json`);
            const data = await response.json();
            const dataLogs = data['reading_log_entries'];
            //console.log(dataLogs[2]);
            for (let i = 0; i < dataLogs.length; i++)
            {
                if (dataLogs[i]["work"].title != null)
                {
                    readingLog.push(dataLogs[i]);
                }
                
                
            }
            //console.log(readingLog);
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
                //console.log(i);
            }
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
        </div>
    );
};

export default Home;
