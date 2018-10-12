import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import { Observable } from 'rxjs';
import { Machine } from '../models/machine.model';
import { MachinesService } from '../services/machines.service';

@Injectable({
  providedIn: 'root'
})
export class MachinesGuard implements Resolve<Machine[]> {
  constructor(private readonly machines: MachinesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Machine[]> {
    return this.machines.fetchList();
  }
}
