class Tansacao {

        #id;
        #descricao;
        #tipo;
        #categoria;
        #data;
        #valor;

    constructor (id,descricao,tipo,categoria,data,valor){
            this.#id=id;
            this.#descricao=descricao;
            this.#tipo=tipo;
            this.#categoria=categoria;
            this.#data=data;
            this.#valor=valor;
    }

    getId(){return this.#id;};
    getDescricao(){return this.#descricao;};
    getTipo(){return this.#tipo};
    getCategoria(){return this.#categoria};
    getData(){return this.#data};
    getValor(){return this.#valor};

    setId(novoid){this.#id=novoid;};
    setDescricao(novadescricao){this.#descricao=novadescricao;};
    setTipo(novotipo){this.#tipo=novotipo;};
    setCategoria(novacategoria){this.#categoria=novacategoria};
    setData(novadata){this.#data=novadata};
    setValor(novovalor){this.#valor=novovalor};

    printar (){
        console.log(this.#id);
        console.log(this.#descricao);
        console.log(this.#tipo);
        console.log(this.#categoria);
        console.log(this.#data);
        console.log(this.#valor);

    }
}


