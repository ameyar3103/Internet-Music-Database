import sqlite3
from flask import *

app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True

@app.route("/",methods=['GET'])
def default():
    return render_template("home.html")

@app.route("/add-song",methods=['POST','GET'])
def addsong_to_database():
    data1 = request.get_json()['song']
    data2 = request.get_json()['albumname']
    data2 = data2.replace('\n','')
    data2 = data2.strip()
    conn = sqlite3.connect('playlist.db')
    cursor = conn.cursor()
    flag=0
    cursor.execute('''CREATE TABLE IF NOT EXISTS playlist(id INTEGER PRIMARY KEY AUTOINCREMENT,
                song_name TEXT,
                album_name TEXT)''')
    cursor.execute("SELECT song_name FROM playlist")
    songs=cursor.fetchall()
    for song in songs:
          if (song[0]==data1):
               flag=1
               break
    if(flag==0):
     cursor.execute(f"INSERT INTO playlist(song_name,album_name) VALUES(?,?)",(data1,data2))
     conn.commit()
     conn.close()
     return 'Song added successfully!'
    else:
         return 'Song already in the playlist!'


@app.route("/play",methods=['GET'])
def play():
    i=0
    songs=[]
    albums=[]
    class DBclass:
            def __init__(self, path):
                self.path = path
                self.db = sqlite3.connect(self.path)
                self.cur = self.db.cursor()
            def execute(self, query):
                self.cur.execute(query)
                return [i[0] for i in self.cur.description], self.cur.fetchall()
    db = DBclass('playlist.db')
    query="SELECT * FROM playlist"
    for row in db.execute(query)[1]:
         songs.append(row[1])
         albums.append(row[2])
         i+=1
    return render_template("play.html",songs=songs,albums=albums,i=i)

@app.route("/tryy",methods=['GET'])
def tryy():
     return render_template('tryy.html')
@app.route("/home",methods=['GET'])
def home():
        return render_template('home.html')
@app.route("/about",methods=['GET'])
def about():
     return render_template('about.html')
@app.route("/spotlight",methods=['GET'])
def spotlight():
     return render_template('spotlight.html')
@app.route("/ed_album",methods=['GET'])
def ed_album():
     return render_template('ed_album.html')
@app.route("/1direction_album",methods=['GET'])
def oneda():
     return render_template('1direction_album.html')
@app.route("/dragons_album",methods=['GET'])
def dragons_album():
     return render_template('dragons_album.html')
@app.route("/dragons-1",methods=['GET'])
def drag1():
     return render_template('dragons-1.html')
@app.route("/dragons-2",methods=['GET'])
def drag2():
     return render_template('dragons-2.html')
@app.route("/dragons-3",methods=['GET'])
def drag3():
     return render_template('dragons-3.html')
@app.route("/dragons-4",methods=['GET'])
def drag4():
     return render_template('dragons-4.html')
@app.route("/dragons-5",methods=['GET'])
def drag5():
     return render_template('dragons-5.html')
@app.route("/ed-1",methods=['GET'])
def ed1():
     return render_template('ed-1.html')
@app.route("/ed-2",methods=['GET'])
def ed2():
     return render_template('ed-2.html')
@app.route("/ed-3",methods=['GET'])
def ed3():
     return render_template('ed-3.html')
@app.route("/ed-4",methods=['GET'])
def ed4():
     return render_template('ed-4.html')
@app.route("/ed-5",methods=['GET'])
def ed5():
     return render_template('ed-5.html')
@app.route("/Fearless",methods=['GET'])
def fear():
     return render_template('Fearless.html')
@app.route("/Folklore",methods=['GET'])
def folk():
     return render_template('Folklore.html')
@app.route("/Four",methods=['GET'])
def four():
     return render_template('Four.html')
@app.route("/It Wont Be Soon Before",methods=['GET'])
def itw():
     return render_template('It Wont Be Soon Before.html')
@app.route("/Jordi",methods=['GET'])
def jord():
     return render_template('Jordi.html')
@app.route("/Lover",methods=['GET'])
def love():
     return render_template('Lover.html')
@app.route("/Made in the A.M",methods=['GET'])
def made():
     return render_template('Made in the A.M.html')
@app.route("/maroon_album",methods=['GET'])
def mara():
     return render_template('maroon_album.html')
@app.route("/Midnight Memories",methods=['GET'])
def midn():
     return render_template('Midnight Memories.html')
@app.route("/Midnights",methods=['GET'])
def mids():
     return render_template('Midnights.html')
@app.route("/Moosetape",methods=['GET'])
def moos():
     return render_template('Moosetape.html')
@app.route("/No Name",methods=['GET'])
def nname():
     return render_template('No Name.html')
@app.route("/PBX 1",methods=['GET'])
def pbx1():
     return render_template('PBX 1.html')
@app.route("/Reputation",methods=['GET'])
def repu():
     return render_template('Reputation.html')
@app.route("/search",methods=['GET'])
def search():
     return render_template('search.html')
@app.route("/sidhu_album",methods=['GET'])
def sidha():
     return render_template('sidhu_album.html')
@app.route("/Snitches Get Stitches",methods=['GET'])
def snit():
     return render_template('Snitches Get Stitches.html')
@app.route("/So High",methods=['GET'])
def sohi():
     return render_template('So High.html')
@app.route("/Songs About Jane",methods=['GET'])
def songjane():
     return render_template('Songs About Jane.html')
@app.route("/Take Me Home",methods=['GET'])
def take():
     return render_template('Take Me Home.html')
@app.route("/taylor_album",methods=['GET'])
def taya():
     return render_template('taylor_album.html')
@app.route("/The Fourth World",methods=['GET'])
def theforth():
     return render_template('The Fourth World.html')
@app.route("/Up All Night",methods=['GET'])
def upal():
     return render_template('Up All Night.html')
@app.route("/V",methods=['GET'])
def v():
     return render_template('V.html')
@app.route("/delete",methods=['POST','GET'])
def delete():
     data=request.get_json()['song']
     data=data.strip()
     conn =sqlite3.connect('playlist.db')
     cursor=conn.cursor()
     cursor.execute('DELETE FROM playlist WHERE song_name="'+data+'"')
     conn.commit()
     cursor.close()
     conn.close()
     return ''

if __name__== "__main__":
    app.run(debug=True)