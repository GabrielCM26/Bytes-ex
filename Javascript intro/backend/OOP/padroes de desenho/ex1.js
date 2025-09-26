class Documento {
    constructor(name) {
        this.name = name;
        this.documentos = [];
    }

     imprimir() {
            return this.name;

    }
}

class Pasta extends Documento {
    constructor(name) {
        super(name)
        this.documentos = []
    }

    adicionar(documento) {
        this.documentos.push(documento)
    }

    imprimir() {
        const conteudo = this.documentos.map(doc => doc.imprimir() ).join(", ");
        return `${this.name}: [${conteudo}]`;
    }
}

const doc1 = new Documento("Relatório.pdf");
const doc2 = new Documento("Apresentação.pptx");
const subPasta = new Pasta("Subpasta");
subPasta.adicionar(new Documento("Notas.txt"));

const pasta = new Pasta("Trabalho");
pasta.adicionar(doc1);
pasta.adicionar(doc2);
pasta.adicionar(subPasta);

console.log(pasta.imprimir());