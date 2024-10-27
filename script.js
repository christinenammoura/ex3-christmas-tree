function create() {
    var tree = document.createElement('div'); //O(1)
    tree.id = 'tree';  //O(1)


    
    for (var i = 0; i < x; i++) { //O(x)
        var row = document.createElement('div');//O(1)
        row.classList.add('tree-row');//O(1)

        //=>O(n)

        

        
        var star = '<span class="star">*</span>';  //O(!)
        var pipes = '<span class="pipe">' + '|'.repeat(i * 2 + 1) + '</span>'; //O(i)

        //=> O(N)
        row.innerHTML =  star + pipes + star; //O(1)


        tree.appendChild(row); 
    }

    document.body.appendChild(tree); 
}

var x = parseInt(prompt("Enter the number of rows for the Christmas tree: ")); //O(1)
create();
// ==> O(n ^2) + O(1)= O(n ^2)