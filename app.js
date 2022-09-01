class Producto {
    constructor(codigo, nombre, precio, cantidad) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.hijoIzquierdo = null;
        this.hijoDerecho = null;
    }
}
class BinaryTree {
    constructor() {
        this.raiz = null;
    }
    agregar(nuevo) {
        if (this.raiz == null)
            this.raiz = nuevo;
        else
            this._agregate(nuevo, this.raiz);
    }
    _agregate(nuevo, nodox) {
        if (nuevo.codigo < nodox.codigo)
            if (nodox.hijoIzquierdo == null)
                nodox.hijoIzquierdo = nuevo;
            else
                this._agregate(nuevo, nodox.hijoIzquierdo);
        else
        if (nodox.hijoDerecho == null)
            nodox.hijoDerecho = nuevo;
        else
            this._agregate(nuevo, nodox.hijoDerecho);
    }

    buscando(nuevo) {
        let valor = this.raiz;
        while (valor.codigo != nuevo) {
            if (nuevo < valor.codigo) {
                valor = valor.hijoIzquierdo;
            } else
                valor = valor.hijoDerecho;
            if (valor == null) {
                return null;
            }
        }
        return valor.nombre;
    }

    inOrder() {
        if (this.raiz == null)
            return " ";
        else
            return this._InOrderRec(this.raiz);
    }
    _InOrderRec(nodox) {
        let info = "";
        if (nodox.hijoIzquierdo != null)
            info += this._InOrderRec(nodox.hijoIzquierdo);
        info += nodox.codigo + "  - ";
        if (nodox.hijoDerecho != null)
            info += this._InOrderRec(nodox.hijoDerecho);
        return info;
    }

    preOrder() {
        if (this.raiz == null)
            return " ";
        else
            return this._preOrderRec(this.raiz);
    }
    _preOrderRec(nodox) {
        let info = "";
        info += nodox.codigo + "  - ";
        if (nodox.hijoIzquierdo != null)
            info += this._preOrderRec(nodox.hijoIzquierdo);
        if (nodox.hijoDerecho != null)
            info += this._preOrderRec(nodox.hijoDerecho);
        return info;
    }

    postOrder() {
        if (this.raiz == null)
            return " ";
        else
            return this._postOrderRec(this.raiz);
    }
    _postOrderRec(nodox) {
        let info = "";
        if (nodox.hijoIzquierdo != null)
            info += this._preOrderRec(nodox.hijoIzquierdo);
        if (nodox.hijoDerecho != null)
            info += this._preOrderRec(nodox.hijoDerecho);
        info += nodox.codigo + "  - ";
        return info;
    }
}
let arbol = new BinaryTree();
const add = document.getElementById('add');
add.addEventListener('click', () => {
    console.log("Se va a agregar un producto");
    let codigo = document.getElementById("cod").value;
    codigo = parseInt(codigo);
    let nombre = document.getElementById("nom").value;
    let precio = document.getElementById("pre").value;
    let cantidad = document.getElementById("can").value;
    let producto = new Producto(codigo, nombre, precio, cantidad);
    arbol.agregar(producto);
    //indicar interfaz
    let detalles = document.getElementById('detalles');
    detalles.innerHTML += '<p>Se agrego el producto ' + nombre + '</p>';
});

const find = document.getElementById('find');
find.addEventListener('click', () => {
    let codigo = document.getElementById('cod').value;
    let busc = arbol.buscando(codigo);
    let detalles = document.getElementById('detalles');
    if (busc == null)
        detalles.innerHTML += '<p>No existe el buscado</p>';
    else {
        detalles.innerHTML += '<p>Si existe el producto con el codigo:</p>' + busc;
    }
});

const Inorder = document.getElementById('Inorder');
Inorder.addEventListener('click', () => {
    let detalles = document.getElementById('detalles');
    detalles.innerHTML += '<h3>listado</h3>';
    detalles.innerHTML += arbol.inOrder();
});

const Preorden = document.getElementById('Preorden');
Preorden.addEventListener('click', () => {
    let detalles = document.getElementById('detalles');
    detalles.innerHTML += '<h3>listado</h3>';
    detalles.innerHTML += arbol.preOrder();
});

const postOrder = document.getElementById('postOrder');
postOrder.addEventListener('click', () => {
    let detalles = document.getElementById('detalles');
    detalles.innerHTML += '<h3>listado</h3>';
    detalles.innerHTML += arbol.postOrder();
});

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    document.getElementById('detalles').innerHTML = '';
});