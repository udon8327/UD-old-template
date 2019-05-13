## Locked

#### Overview
Locks all days in calendar.

#### HTML Structure
```html
<div class="calendar"></div>
```

#### Javascript Initialization
```js
var calendar = new HelloWeek({
    selector: '.calendar',
    locked: true,
    onNavigation: () => {
        calendar.setLocked(false);
        calendar.update();
    }
});
```
