
function displayLog()
{
    console.log('-------- tour = '+tour+' --------');
    console.log('joueur = '+joueurs[tour % 2]);
    console.log('x = '+x);
    console.log('y = '+y);
    console.log('tab[x][y] = '+tab[x][y]);
}

function resetTabl()
{
    var count = 0;
    while( count < document.querySelectorAll("td").length )
    {
        document.querySelectorAll("td")[count].innerHTML = "";
        count++;
    }
    tab = [ ["", "", ""],["", "", ""],["", "", ""] ];
}

function clickBtn() 
{
    x = this.dataset.x;
    y = this.dataset.y;
    
    if(tab[x][y] == "")
    {
        this.innerHTML = joueurs[tour % 2];
        tab[x][y] = joueurs[tour % 2];
        displayLog();
        tour++;
    }

    if ((tab[0][0] == tab[0][1] && tab[0][0] == tab[0][2] && tab[0][0] != "") ||
        (tab[1][0] == tab[1][1] && tab[1][0] == tab[1][2] && tab[1][0] != "") ||
        (tab[2][0] == tab[2][1] && tab[2][0] == tab[2][2] && tab[2][0] != "") ||
        (tab[0][0] == tab[1][0] && tab[0][0] == tab[2][0] && tab[0][0] != "") ||
        (tab[0][1] == tab[1][1] && tab[0][1] == tab[2][1] && tab[0][1] != "") ||
        (tab[0][2] == tab[1][2] && tab[0][2] == tab[2][2] && tab[0][2] != "") ||
        (tab[0][0] == tab[1][1] && tab[0][0] == tab[2][2] && tab[0][0] != "") ||
        (tab[0][2] == tab[1][1] && tab[0][2] == tab[2][0] && tab[1][1] != ""))
    {
        alert("Bravo joueur "+joueurs[(tour-1) % 2]+" vous avez gagné !");
        resetTabl();
    }

    if (tab[0][0] != "" && tab[0][1] != "" && tab[0][2] != "" &&
        tab[1][0] != "" && tab[1][1] != "" && tab[1][2] != "" && 
        tab[2][0] != "" && tab[2][1] != "" && tab[2][2] != "" )
    {
        alert("Match Nul !");
        resetTabl();
    }
    
    this.style.top = "2px";
    this.style.left = "2px"; 

    // this.style.trasition = "all 0.8s ease-in-out" ;
    
}

function mouseupBtn()
{
    this.style.top = "-2px";
    this.style.left = "-2px";
}


var tab = [ ["", "", ""],["", "", ""],["", "", ""] ];
var joueurs = ["X", "O"];
var tour = 0;
var x;
var y;

var count = 0;
while( count < document.querySelectorAll("td").length )
{
    document.querySelectorAll("td")[count].onmousedown = clickBtn;
    document.querySelectorAll("td")[count].onmouseup = mouseupBtn;
    count++; 
}
