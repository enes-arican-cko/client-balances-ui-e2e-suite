import test from "../../src/fixtures/commonFixtures";

export function addCustomAnnotation(type: string, description: string) {
    test.info().annotations.push({
        type: type,
        description: description
      });
}