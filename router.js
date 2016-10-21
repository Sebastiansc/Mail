class Router{
  constructor(node, routes){
    this.node = node;
    this.routes = routes;
    this.start();
  }

  start(){
    this.render();
    $(window).on("hashchange", e => {
      this.render();
    });
  }

  render(){
    this.node.empty();
    const component = this.activeRoute();
    if (component !== undefined){
      debugger;
      const content = component.render();
      this.node.append(content);
    }
  }

  activeRoute(){
    const location = window.location.hash.slice(1);
    return this.routes[location];
  }
}

module.exports = Router;
