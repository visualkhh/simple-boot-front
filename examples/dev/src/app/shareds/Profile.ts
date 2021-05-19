import { User } from "../models/UserResponse";
import {Module} from "simple-boot-front/module/Module";

export class Profile extends Module {
    styleImports = [
        `
  /*[module-selector]*/
    div.card {
        border: solid 1px;
        padding: 10px;
        margin: 10px;
    }
  `
    ];
    template = `
  <h1>profile</h1>
  <div class="card" style="width: 18rem;">
      <img src="{%write(this.data?.picture?.large)%}">
      <div class="card-body">
          <h5 class="card-title">{%write(this.data?.name?.title)%}</h5>
          <p class="card-text">name: {%write(this.data?.name?.first)%} {%write(this.data?.name?.last)%}</p>
      </div>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">street: {%write(this.data?.location?.street?.name)%}</li>
          <li class="list-group-item">city: {%write(this.data?.location?.city)%}</li>
          <li class="list-group-item">state: {%write(this.data?.location?.state)%}</li>
      </ul>
  </div>
  
  `;
    private data: User | undefined;

    constructor() {
        super("profile");
    }

    public setUser(data: User) {
        this.data = data;
    }
}
