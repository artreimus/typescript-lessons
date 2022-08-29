let speed: number | null = null;
let ride = { speed: speed ?? 30 }; // equivalent to (speed !== null || speed !==  undefined) ? speed : 30

// Falsy = undefined, null, '', false, 0
