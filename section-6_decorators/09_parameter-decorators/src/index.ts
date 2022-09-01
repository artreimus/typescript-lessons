type WatchedParameter = {
  methodName: string;
  parameterIndex: number;
};

const WatchedParameters: WatchedParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
  WatchedParameters.push({ methodName, parameterIndex });
}

class Vehicle {
  move(@Watch speed: number) {}
}

console.log(WatchedParameters);
