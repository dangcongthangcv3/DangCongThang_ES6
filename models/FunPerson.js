export default class FunPerson{
    constructor(){
        this.arrPerson = [];
    }
    addPerson(sv){
        this.addPerson.push(sv);
    }
    updatePerson(nvMoi) {
        const nvCu = this.findID(nvMoi.ma);
        Object.assign(nvCu, nvMoi);
    }
}