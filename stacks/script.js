const structures = {

array: [
["Access","O(1)"],
["Search","O(n)"],
["Insertion","O(n)"],
["Deletion","O(n)"],
["Space","O(n)"]
],

linkedlist: [
["Access","O(n)"],
["Search","O(n)"],
["Insertion","O(1)"],
["Deletion","O(1)"],
["Space","O(n)"]
],

stack: [
["Push","O(1)"],
["Pop","O(1)"],
["Peek","O(1)"],
["Search","O(n)"],
["Space","O(n)"]
],

queue: [
["Enqueue","O(1)"],
["Dequeue","O(1)"],
["Front","O(1)"],
["Search","O(n)"],
["Space","O(n)"]
]

};

function showData(type){

let html = `
<h2 style="text-align:center; margin-bottom:20px;">
${type.toUpperCase()} Complexity
</h2>

<table>
<tr>
<th>Operation</th>
<th>Complexity</th>
</tr>
`;

structures[type].forEach(item=>{
html += `
<tr>
<td>${item[0]}</td>
<td>${item[1]}</td>
</tr>
`;
});

html += `</table>`;

document.getElementById("details").innerHTML = html;
}