import Module from 'usm-redux';

export default class Home extends Module {
  async moduleDidInitialize() {
    // @ts-ignore
    await this._modules.viewList.fetch();
    // @ts-ignore
    console.log(this._modules.viewList.list);
  }
}
