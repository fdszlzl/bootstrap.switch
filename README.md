# bootstrap.switch
基于bootstrap2的开关选择器

- HTML
```html
<input type="checkbox" class="switch">
```

- 调用
```javascript
$(".switch").switch([options]);
```

- 选项
```javascript
{
  'onClass': 'btn-success', //开关为开时的类
  'offClass': 'btn-danger', //开关为关时的类
  'onText': 'On', //开关为开显示的文字
  'offText': 'Off' //开关为关显示的文字
}
```
