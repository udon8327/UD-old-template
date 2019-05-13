![Hello Week](assets/images/helloweek.png)


[![GitHub Tag](https://img.shields.io/github/release/mauroreisvieira/hello-week.svg?style=for-the-badge)](https://github.com/mauroreisvieira/hello-week/releases)
[![npm](https://img.shields.io/npm/dt/hello-week.svg?style=for-the-badge)](https://www.npmjs.com/package/hello-week)
[![GitHub issues](https://img.shields.io/github/issues/mauroreisvieira/hello-week.svg?style=for-the-badge)](https://github.com/mauroreisvieira/hello-week/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](https://github.com/mauroreisvieira/hello-week/blob/master/LICENSE)


## Quick start

#### Installation

```bash
npm install hello-week --save
```

```bash
yarn add hello-week
```

#### Including files:

```html
<link rel="stylesheet" type="text/css" href="hello.week.min.css" />
<link rel="stylesheet" type="text/css" href="hello.week.theme.min.css" />

<script type="text/javascript" src="hello.week.min.js"></script>
<script>
  new HelloWeek();
</script>
```

#### HTML Markup

```html
<div class="hello-week">
    <div class="navigation">
        <button class="prev">Prev</button>
        <div class="period"></div>
        <button class="next">Next</button>
    </div>
    <div class="week"></div>
    <div class="month"></div>
</div>
```

## Options

HelloWeek comes with a few (optional) settings that you can change by passing an object as an argument.
Default values are presented below.

```js
new HelloWeek({
    selector: '.hello-week',
    lang: 'en',
    langFolder: './dist/langs/',
    format: 'DD/MM/YYYY',
    weekShort: true,
    monthShort: false,
    multiplePick: false,
    defaultDate: null,
    todayHighlight: true,
    disablePastDays: false,
    disabledDaysOfWeek: null,
    disableDates: null,
    weekStart: 0, // week start on Sunday
    daysHighlight: null,
    daysSelected: null,
    range: false,
    rtl: false,
    locked: false,
    minDate: null,
    maxDate: null,
    nav: ['◀', '▶'],
    onLoad: () => { /** callback function */ },
    onChange: () => { /** callback function */ },
    onSelect: () => { /** callback function */ },
    onClear: () => { /** callback function */ }
});
```


### Useful links

- [Demos](https://mauroreisvieira.github.io/hello-week/)
- [Changelog](CHANGELOG.md)
- [Contributing](CONTRIBUTING.md)

### Supported Browsers:

- Chrome 49
- Firefox 31
- Opera 36
- Safari 9.3
- Edge 17
- iOS Safari 6.0

### License

**Hello Week** is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
