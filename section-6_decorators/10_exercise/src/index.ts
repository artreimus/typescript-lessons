function Sauce(sauce: string) {
  return (constructor: Function) => {
    // Modify the members of the target class
    constructor.prototype.sauce = sauce;
  };
}

@Sauce('pesto')
class Pizza {}
