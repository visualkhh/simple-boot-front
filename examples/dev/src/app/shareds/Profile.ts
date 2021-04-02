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
      <img src="{{{data.picture.large}}}">
      <div class="card-body">
          <h5 class="card-title">{{data.name.title}}</h5>
          <p class="card-text">name: {{data.name.first}} {{data.name.last}}</p>
      </div>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">street: {{data.location.street.name}}</li>
          <li class="list-group-item">city: {{data.location.city}}</li>
          <li class="list-group-item">state: {{data.location.state}}</li>
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
