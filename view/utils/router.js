import { Navigator } from 'react-native';
import Home from '../HomeView';

let _navigator = null;

class Router {
  constructor(navigator) {
    _navigator = navigator;
  }

  _navigateTo(route) {
    console.log(route);
    let currentRoute = this.getCurrentRoute();

      _navigator.push(route);

  }

  getCurrentRoute() {
    let routeList = _navigator.getCurrentRoutes();
    console.log(routeList.length);
    let currentRoute = routeList[routeList.length - 1];
    return currentRoute;
  }

  isCurrentRoute(routeId) {
    return routeId === this.getCurrentRoute().id;
  }

  pop() {
    _navigator.pop();
  }

  toHome() {
    this._navigateTo({
      id: 'home',
      title: '最新',
      component: Home
    });
  }

}

module.exports = Router;
