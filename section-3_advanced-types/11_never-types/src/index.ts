// never types = types that never occur
function reject(message: string): never {
  throw new Error(message);
}

function processEvents(): never {
  // never = function never returns
  while (true) {
    // Read a message from a queue
  }

  reject('...message...');
  processEvents();
  console.log('reached this!');
}
