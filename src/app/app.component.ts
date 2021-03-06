import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    }, 2000);
  });
  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 2, 2021)
    },
    {
      instanceType: 'large',
      name: 'User Server',
      status: 'stable',
      started: new Date(16, 2, 2021)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(17, 2, 2021)
    },
    {
      instanceType: 'small',
      name: 'Testing Server',
      status: 'stable',
      started: new Date(18, 2, 2021)
    }
  ];
  filteredStatus = '';
  getStatusClasses(server: {
    instanceType: string;
    name: string;
    status: string;
    started: Date;
  }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }
  onAddServer() {
    this.servers.push({
      instanceType: 'large',
      name: 'Test',
      status: 'online',
      started: new Date(19, 2, 2021)
    });
  }
}
