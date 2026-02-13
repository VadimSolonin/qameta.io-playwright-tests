import { test } from '@playwright/test';

type AnyAsyncFn = (...args: any[]) => Promise<any>;

const toStringArg = (arg: any): string => {
  if (arg === null || arg === undefined) return String(arg);

  if (typeof arg === 'object') {
    try {
      return JSON.stringify(arg);
    } catch {
      return String(arg);
    }
  }

  return String(arg);
};

const getFullNameStep = (stepNameTemplate: string, args: string[]) => {
  const countInsertArgumentsInStep = stepNameTemplate.match(/(\$\d+)|(\$)/g);
  if (countInsertArgumentsInStep) {
    return countInsertArgumentsInStep.reduce((acc, el) => {
      if (el === '$') return acc.replace('$', args[0]);

      const numArgs = Number(el.replace('$', ''));
      acc = acc.replace(el, args[numArgs]);

      return acc;
    }, stepNameTemplate);
  }

  return stepNameTemplate;
};

const Step =
  (testInstance: any) =>
  (stepNameTemplate: string) =>
  ((...decoratorArgs: any[]) => {
    const wrap = (original: AnyAsyncFn) => {
      return async function (this: any, ...args: any[]) {
        const stringArgs = args.map(toStringArg);
        const fullNameStep = getFullNameStep(stepNameTemplate, stringArgs);

        return await testInstance.step(
          fullNameStep,
          async () => {
            return await original.call(this, ...args);
          },
          { box: true },
        );
      };
    };

    if (decoratorArgs.length === 3 && decoratorArgs[2] && typeof decoratorArgs[2] === 'object') {
      const descriptor = decoratorArgs[2] as TypedPropertyDescriptor<AnyAsyncFn>;
      const original = descriptor.value;
      if (!original) return descriptor;
      descriptor.value = wrap(original);
      return descriptor;
    }

    if (decoratorArgs.length === 2 && typeof decoratorArgs[1] === 'object') {
      const value = decoratorArgs[0] as AnyAsyncFn;
      return wrap(value);
    }

    return undefined;
  }) as unknown as MethodDecorator;

export const step = Step(test);
