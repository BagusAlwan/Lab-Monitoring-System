export class Member {
    constructor(id, name, NIM){
        this.id = id;
        this.name = name;
        this.NIM = NIM;
    }

    toJson() {
        return {
            name : this.name,
            NIM : this.NIM,
        }
    }
}