import { Component, h, State, Method } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  @State() messages = [];
  

  componentWillLoad() {
    for (let i = 0; i < 20; i ++) {
      this.messages.push(`Item ${i}`);
    }
  }

  @Method() 
  async addMessages(m: string) {
    this.messages = [...[`Item ${m}`, ...this.messages]];
    this.messages = [...this.messages];
  }

  render() {
    return (
      <div class="scroll-container">
        {this.messages.map((item)=> {
          return <div class="item">{item}</div>;
        })}
      </div>
    );
  }
}
