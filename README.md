For this phase of the project, we have used sql and flask to implement a playlist page and also used some javascript to send post and get requests to the server. The database is named playlist.db and has a table named playlist with columns song_name which stores song names,album_name which stores album names and id which is an integer unique to each song. We have made sure that the same song is not added twice to the database and also made necessary changes so that the images and css files are accessible by main.py from static folder.All html files are stored in templates folder so that main.py can access it through render_template.


NOTE:Some of the css may not work on some browsers like Mozilla Firefox but mostly works on Google Chrome. Also since the work was done by two people on their respective devices, there is a need to zoom-in/zoom-out for certain pages for proper display. Kindly consider the same.


We have tried to give our best to make the site as user-friendly as possible and easy to access. The codebase is pretty readable and easy to understand. All javascript files have also been added to static folder under src.


Directory Structure:
The directory maintains a simple structure having a README.md, an assumptions.md and a src. The src contains a sql database file playlist.db, a flask app file main.py and static,templates folder.
The templates have html pages. The static has css files,images and javascript files.


How To Open Our Website:
Firstly,run the main.py file inside src and go to the link given by the file. This will direct you to the home page of our website. Then you can proceed normally.


```
.
├── assumptions.md
├── README.md
└── src
    ├── main.py
    ├── playlist.db
    ├── static
    │   ├── 1d1.jpg
    │   ├── 1d2.webp
    │   ├── 1d3.png
    │   ├── 1d4.jpg
    │   ├── 1direction.jpg
    │   ├── about.css
    │   ├── Ameya.jpg
    │   ├── Arijit.jpeg
    │   ├── Ashwin.jpeg
    │   ├── dragons1.jpeg
    │   ├── dragons2.jpeg
    │   ├── dragons3.jpg
    │   ├── dragons4.png
    │   ├── dragons5.jpg
    │   ├── dragons.jpg
    │   ├── ed1.png
    │   ├── ed2.png
    │   ├── ed3.png
    │   ├── ed4.png
    │   ├── ed5.png
    │   ├── Ed.jpeg
    │   ├── ed.jpg
    │   ├── Fearless.jpeg
    │   ├── Folklore.jpeg
    │   ├── Four.jpeg
    │   ├── It Wont Be Soon Before.jpeg
    │   ├── Jordi.jpeg
    │   ├── Lover.jpeg
    │   ├── Made in the A.M.jpeg
    │   ├── maroon1.png
    │   ├── maroon2.jpg
    │   ├── maroon3.png
    │   ├── maroon4.jpg
    │   ├── maroon5.jpg
    │   ├── maroon5.png
    │   ├── maroon logo.jpeg
    │   ├── Midnights.jpeg
    │   ├── Moosetape.jpeg
    │   ├── mossewala.jpg
    │   ├── navbarabout.js
    │   ├── navbar.js
    │   ├── navbarsong.js
    │   ├── No Name.jpeg
    │   ├── one8.jpeg
    │   ├── one8 logo.png
    │   ├── one8_main.jpeg
    │   ├── PBX 1.jpeg
    │   ├── playlist.js
    │   ├── Reputation.jpeg
    │   ├── search.js
    │   ├── sidhu1.jpg
    │   ├── sidhu2.jpg
    │   ├── sidhu3.jpg
    │   ├── sidhu4.jpg
    │   ├── Sidhu.jpeg
    │   ├── Snitches Get Stitches.jpeg
    │   ├── song1.jpg
    │   ├── song2.jpeg
    │   ├── song3.jpeg
    │   ├── Songs About Jane.jpeg
    │   ├── songs.css
    │   ├── songs.js
    │   ├── spotlight.js
    │   ├── Take Me Home.jpeg
    │   ├── taylor1.png
    │   ├── taylor2.png
    │   ├── taylor3.jpg
    │   ├── taylor4.jpg
    │   ├── taylor5.jpg
    │   ├── Taylor.jpeg
    │   ├── taylor-spotlight1.jpg
    │   ├── taylor-swift.jpg
    │   ├── The Fourth World.jpeg
    │   ├── typingeffabout.js
    │   ├── Up All Night.jpeg
    │   └── V.jpeg
    └── templates
        ├── 1direction_album.html
        ├── about.html
        ├── dragons-1.html
        ├── dragons-2.html
        ├── dragons-3.html
        ├── dragons-4.html
        ├── dragons-5.html
        ├── dragons_album.html
        ├── ed-1.html
        ├── ed-2.html
        ├── ed-3.html
        ├── ed-4.html
        ├── ed-5.html
        ├── ed_album.html
        ├── Fearless.html
        ├── Folklore.html
        ├── Four.html
        ├── home.html
        ├── It Wont Be Soon Before.html
        ├── Jordi.html
        ├── Lover.html
        ├── Made in the A.M.html
        ├── maroon_album.html
        ├── Midnight Memories.html
        ├── Midnights.html
        ├── Moosetape.html
        ├── No Name.html
        ├── PBX 1.html
        ├── play.html
        ├── Reputation.html
        ├── search.html
        ├── sidhu_album.html
        ├── Snitches Get Stitches.html
        ├── So High.html
        ├── Songs About Jane.html
        ├── songs.html
        ├── spotlight.html
        ├── Take Me Home.html
        ├── taylor_album.html
        ├── The Fourth World.html
        ├── tryy.html
        ├── Up All Night.html
        └── V.html

3 directories, 123 files

```
