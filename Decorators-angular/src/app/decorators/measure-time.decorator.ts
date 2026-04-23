export function MeasureTime() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const start = performance.now();

      const result = originalMethod.apply(this, args);

      if (result instanceof Promise) {
        return result.then((data) => {
          const end = performance.now();
          console.log(
            `%c[Timer] ${propertyKey} took ${(end - start).toFixed(2)}ms`,
            'color: #3498db; font-weight: bold',
          );
          return data;
        });
      }

      const end = performance.now();
      console.log(
        `%c[Timer] ${propertyKey} took ${(end - start).toFixed(2)}ms`,
        'color: #3498db; font-weight: bold',
      );
      return result;
    };

    return descriptor;
  };
}
