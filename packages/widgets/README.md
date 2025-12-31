# @campphillip/widgets

Web components for embedding Camp Phillip content.

## Deploy Quick Start

```html
<link rel="stylesheet" href="https://unpkg.com/@campphillip/widgets@latest/dist/widgets.css">

<!-- Add container divs for the widgets you want to use -->
<div id="camp-events"></div>
<div id="camp-board-events"></div>
<div id="camp-calendar"></div>
<div id="camp-banners"></div>
<div id="camp-categories"></div>
<div id="camp-rates"></div>

<script>
(function() {
  // Delete the widgets you don't need
  const widgets = [
    'events.widget.js',
    'board-events.widget.js',
    'calendar.widget.js',
    'banners.widget.js',
    'categories.widget.js',
    'rates.widget.js'
  ];
  
  widgets.forEach(function(widget) {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@campphillip/widgets@latest/dist/' + widget;
    document.body.appendChild(script);
  });
})();
</script>
```

This method ensures the script loads as an ES module, bypassing platform script loaders that may strip the `type="module"` attribute.

## Available Widgets

| Widget | Container ID | Script |
|--------|--------------|--------|
| Events | `camp-events` | `events.widget.js` |
| Board Events | `camp-board-events` | `board-events.widget.js` |
| Calendar | `camp-calendar` | `calendar.widget.js` |
| Banners | `camp-banners` | `banners.widget.js` |
| Categories | `camp-categories` | `categories.widget.js` |
| Rates | `camp-rates` | `rates.widget.js` |

## Local Dev

```sh
npm run dev
```

## Local Testing

```sh
npm run build
npm run serve
```
