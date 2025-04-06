# learn-fronend

## Змінні в SCSS

Звичайні змінні в CSS:

```css
:root {
  --primary-color: #45ffff;
  --size: 30px;
}
```

Треба викликати var() для використання змінної. Також вони мають бути огорнуті в
селектор.

Змінні в SCSS:

```scss
$primary-color: #45ffff;
$size: 30px;
```

Можна напряму писати змінні в коді. Та оголошувати де завгодно в коді.

```scss
h1 {
  color: $promary-color;
}
```

Змінні в SCSS мають області видимості. Якщо переназначити змінну в локальній
області видимості, то вона не буде видна ззовні. Щоб зробити змінну з локальної,
глобальною, треба додати після пробілу !global; в кінець.

```scss
p {
  $accent: #ffffff !global;
}
```

## Other

Імпорт файлів SCSS

```scss
@use 'інший файл' as 'cutomName';
```

Використання модуля через крапку:

```scss
p {
  color: customName.$variableName;
}
```

Є можливість змінювати стандартні значення в імпортованому файлі якщо змінним
вказати перед цим !default;

custom file:

```scss
$base: #151515 !default;
$primary: #9938df !default;
```

```scss
@use 'custom file' with (
  $base: #000000,
  $primary: #4938df
);
```
