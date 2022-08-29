type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable; // Intersection

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

textBox.drag();
textBox.resize();
