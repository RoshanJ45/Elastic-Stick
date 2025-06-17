    const depth = 150;
let root = document.createElement("div");
let current = root;
for (let i = 1; i < depth; i++) {
const newDiv = document.createElement("div");
current.appendChild(newDiv);
current = newDiv;
}
document.body.appendChild(root);
