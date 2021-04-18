import {formatDate} from "./film";

describe(`Film utils functions are correct`, () => {
  it(`format date is correct`, () => {
    const options = {
      month: `long`,
      day: `numeric`,
      year: `numeric`
    };

    const dateLong = Date.now();
    const date = new Intl.DateTimeFormat(`en-US`, options).format(new Date(dateLong));

    expect(formatDate(dateLong)).toEqual(date);
  });
});
