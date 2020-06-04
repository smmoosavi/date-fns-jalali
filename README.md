# ![](https://cdn.rawgit.com/date-fns/date-fns/c5bcd92d04f14da194e6298101a6509b1c3b30f0/docs/logo.svg) date-fns-jalali

**date-fns** provides the most comprehensive, yet simple and consistent toolset
for manipulating **JavaScript dates** in **a browser** & **Node.js**.

**date-fns** is like [lodash](https://lodash.com) for dates. It has
[**180+ functions** for all occasions](https://date-fns.org/docs/).

**date-fns-jalali** provides **date-fns** toolset for [jalali calendar](https://en.wikipedia.org/wiki/Jalali_calendar)

```js
import { compareAsc, format } from 'date-fns-jalali'

format(new Date(2014, 1, 11), 'yyyy-MM-dd')
//=> '1392-11-22'

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10)
]
dates.sort(compareAsc)
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]
```

The library is available as an [npm package](https://www.npmjs.com/package/date-fns-jalali).
To install the package run:

```bash
npm install date-fns-jalali --save
# or with yarn
yarn add date-fns-jalali
```

## Docs

[See date-fns.org](https://date-fns.org/) for more details, API,
and other docs.

## License

MIT
