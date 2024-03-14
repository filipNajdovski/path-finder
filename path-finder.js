const grid = [
    ['>', '-', '-', '-', 'A', '-', '@', '-', '+'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
    ['+', '-', 'U', '-', '+', ' ', ' ', ' ', 'C'],
    ['|', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
    ['s', ' ', ' ', ' ', 'C', '-', '-', '-', '+']
];


var path = "";
var letters = "";
var currentX = 0;
var currentY = 0; 
var start = [null,null];
const isUpperCase = (string) => /^[A-Z]*$/.test(string);

[].forEach.call(grid, function(row){
    if (row.indexOf('>') != -1){
        currentX = row.indexOf('>');
        start = [currentX,currentY];
    }else{
        currentY++
    }
})
console.log(start)


//pathCheck(grid,start[0],start[1]);

// function isValidTurn(matrix, x, y) {
//     const currentCell = matrix[y][x];
//     return isUpperCase(currentCell) || currentCell === '+';
// }


function pathCheck(matrix,x,y){
    var left = x-1 ;
    var right = x+1;
    var up = y-1;
    var down = y+1;
    // console.log('UP='+x+","+up);
    // console.log('DOWN='+x+","+down);
    // console.log('LEFT='+left+","+y);
    // console.log('RIGHT='+right+","+y);

    if (left >= 0){
        if (matrix[y][left] != " "){
            console.log("Path Found to the left")
            return [y,left];
        }
    }

    if (right <= matrix[y].length -1 && matrix[y][right]){
        if (matrix[y][right] != " "){
            console.log("Path Found to the right")
            return [y,right];
        }
    }


    if (up >= 0 && matrix[up][x] != " "){
        console.log("Path Found up")
        return [up,x];
    }

    if (down <= matrix.length -1 && matrix[down][x] != " "){
        console.log("Path Found down")
        return [down,x];
    }


}

var pathHistory = [];

travel(grid,start[0],start[1]);
function travel(matrix,x,y) {
    

    if(matrix[y][x] == "s") {
        path+= matrix[y][x];
        return path;
    } else {
        var nextStep = pathCheck(matrix,x,y);
        console.log(nextStep)
        path+= matrix[y][x];
        isUpperCase(matrix[y][x]) ? letters+= matrix[y][x] : null;
        matrix[y][x] = " ";
        //pathHistory.push([x,y]);
        travel(matrix,nextStep[1],nextStep[0]);
    }
}
console.log('Path:', path)
console.log('Letters:', letters)

const printResults = () => {
    if (typeof document !== 'undefined') {
        document.getElementById('path').innerHTML = "Path: " + path;
        document.getElementById('letters').innerHTML = "Letters Collected: " + letters;
     }
}


printResults()
