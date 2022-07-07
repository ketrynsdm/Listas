import { Injectable } from '@angular/core';
import { Observable, pipe, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TarefasService {

    lista: string[] = [];
    private subject = new Subject<string>();

    listar(): Observable<string> {
        return this.subject.asObservable();
    }

    adicionar(dado: string): void {
        this.lista.push(dado);
        this.subject.next(dado);
    }

    async excluir(dado: string) {
        const lista: any = await this.subject.toPromise();
        const novaLista  = lista.filter((item: string) => item !== dado);
        this.subject.next(novaLista);
      }

}
