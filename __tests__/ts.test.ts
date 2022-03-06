describe('tests', () => {
  // eslint-disable-next-line @typescript-eslint/require-await
  it('ts test1', async () => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    function resolveAfter2Seconds() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('resolved');
        }, 2000);
      });
    }

    async function asyncCall() {
      console.log('calling');
      const result = await resolveAfter2Seconds();
      console.log(result);
      // expected output: "resolved"
    }

    asyncCall();

    // await new Promise(r => setTimeout(r, 2000));

    function sleep(ms) : Promise<unknown> {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    sleep(5000);

    const myPromise = new Promise((resolve) => {
      resolve('foo');
    });

    myPromise
      .then(value => {
        return `${value} and bar`;
      })
      .then(value => {
        return `${value} and bar again`;
      })
      .then(value => {
        return `${value} and again`;
      })
      .then(value => {
        return `${value} and again`;
      })
      .then((value) => {
        console.log(value);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // eslint-disable-next-line @typescript-eslint/require-await
  it('ts test2', async () => {
    let obj: any = { x: 1 };
    console.log(obj.x);
  });
});
