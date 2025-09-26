class Channel {
    constructor(name) {
        this.name = name
        this.subscribers = []
        this.videos = []
    }

    adicionarVideo(video) {
        this.videos.push(video)
        this.subscribers.forEach(sub => sub.notificar(this.name, video));
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }
}

class Subscribers {
    constructor(name) {
        this.name = name
    }

    notificar(canalNome, video) {
        console.log(`${this.name} foi notificado: ${canalNome} publicou o vídeo "${video}"`);
    }
}

const canal = new Channel("Canal Tech");
const user = new Subscribers("Alice");
const user1 = new Subscribers("Mudinho");
const user2 = new Subscribers("Hamood");
const user3 = new Subscribers("Abu");

canal.subscribe(user);
canal.subscribe(user1);
canal.subscribe(user2);
canal.subscribe(user3);

canal.adicionarVideo("Como usar JavaScript");
canal.adicionarVideo("Tutorial de puxar autoclismos com a testa");